const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 5001;
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const jsSHA = require('jssha');
// const correctPath = __dirname;
// const __dirname = path.resolve();


// console.log(correctPath);
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "src", "build", "index.html"));
// });
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }));

// app.use(cors({
//     origin: 'https://www.egradtutor.in',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }));
const nodemailer = require('nodemailer');
const crypto = require('crypto');

app.use(cors());

app.post('/submitForm', async (req, res) => {
    try {
      const { name, email,date,number,mothername,fathername,contactno,address,college } = req.body;
      console.log('Received email:', email);
      // Send email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'egradtutorweb@gmail.com', // Your email address
          pass: 'zzwj ffce jrbn tlhs', // Your email password
        },
      });
  
      const mailOptions = {
        from: 'egradtutorweb@gmail.com',
        to: email,
        subject: 'Payment Details',
        text: `Thank you for your payment. Here are your payment details:\n\nName: ${name}\nEmail: ${email}\nDate of Birth: ${date}\nNumber:${number}\nMother's Name:${mothername}\nFather's Name:${fathername}\nParents Contact No:${contactno}\nPostal Address:${address}\nCollege of Study:${college}`,
      };

      const mailOptions2 = {
        from: 'egradtutorweb@gmail.com',
        to:'sindhu.g@egradtutor.in',
        subject: 'Payment Details',
        text: `New registation:\n\nName: ${name}\nEmail: ${email}\nDate of Birth: ${date}\nNumber:${number}\nMother's Name:${mothername}\nFather's Name:${fathername}\nParents Contact No:${contactno}\nPostal Address:${address}\nCollege of Study:${college}`,
      };

      const sendMail1 = transporter.sendMail(mailOptions);
      const sendMail2 = transporter.sendMail(mailOptions2);
  
      // Wait for both promises to resolve
      await Promise.all([sendMail1, sendMail2]);
  
    //   transporter.sendMail([mailOptions,mailOptions2], (error, info) => {
    //     if (error) {
    //       console.error('Error sending email:', error);
    //       res.status(500).send({
    //         error: 'Internal Server Error',
    //       });
    //     } else {
    //       console.log('Email sent:', info.response);
    //       res.send('Payment details sent to user via email.');
    //     }
    //   });
    } catch (error) {
      console.error('Error in /submitForm route:', error);
      res.status(500).send({
        error: 'Internal Server Error',
      });
    }
  });


const PayU =require('./PayU/PayU')
 
app.use("/PayU",PayU)

  app.post("/hash", async (req, res) => {
    try {
        const { name, email, amount, productinfo, transactionId } = req.body;
        const data = {
            key: "2RJzQH",
            salt: 'WSRuqJafAmgvQ22Ztmzhixel1fTlZhgg',
            txnid: transactionId,
            amount: amount,
            productinfo: 'TEST PRODUCT',
            firstname: name,
            email: email,
            udf1: 'details1',
            udf2: 'details2',
            udf3: 'details3',
            udf4: 'details4',
            udf5: 'details5',
        };
        const surl = '/success';
        const furl = '/failure';
        const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|${data.udf1}|${data.udf2}|${data.udf3}|${data.udf4}|${data.udf5}||||||${data.salt}`;
 
        // Using crypto library
        const cryp = crypto.createHash('sha512');
        cryp.update(hashString);
        const hash = cryp.digest('hex');
 
        // Using jsSHA library
        const sha = new jsSHA('SHA-512', 'TEXT');
        sha.update(hashString);
        const hashJsSHA = sha.getHash('HEX');
 
        return res.status(200).send({
            hash: hash,
            hashJsSHA: hashJsSHA,
            transactionId: transactionId,
            surl: surl,
            furl: furl,
        });
    } catch (error) {
        console.error('Error in /hash route:', error);
        return res.status(500).send({
            error: 'Internal Server Error',
        });
    }
});

app.post('/success',async(req,res) =>{
 
    try{
        console.log('Payment successful:', req.body);
        res.send('Payment successful');
        // return res.redirect('http://localhost:3000/success')
    }catch(error){
 
    }
})

app.post('/failure', async (req, res) => {
    try {
      console.log('Payment failed:', req.body);
 
      // Extract user email from the form or any other source
      const userEmail = req.body.email; // Assuming email is in req.body.email
      const name = req.body.name;
      // Create a Nodemailer transporter using your email service credentials
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'egradtutorweb@gmail.com', // Your email address
          pass: 'zzwj ffce jrbn tlhs', // Your email password
        },
      });
 
      // Set up the email options
      const mailOptions = {
        from: 'egradtutorweb@gmail.com', // Sender email address
        to: userEmail, // Receiver email address (user's email)
        subject: 'Payment Failure', // Subject of the email
        text: 'Your payment has failed. Please try again.',
        name:name,
      };
 
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send({
            error: 'Internal Server Error',
          });
        } else {
          console.log('Email sent:', info.response);
          res.send('Payment failed. Email sent to user.');
        }
      });
    } catch (error) {
      console.error('Error in /failure route:', error);
      res.status(500).send({
        error: 'Internal Server Error',
      });
    }
  });
 
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });