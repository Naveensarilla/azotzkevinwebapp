import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../UG/terms.css'
import Examheader from './Examheader'
const CancellationRefundPolicy = () => {
  return (
    <div> 
 {/* <Header/> */}
 <Examheader />
        <div className='carf container'>
    <p><b>CANCELLATION & REFUND POLICY :</b>
    
    <ul className='termsul'>
      <li>We do not accept cancellation of the order or refund claims.</li>
      <li> We do not accept refund for damaged shipment, if the shipment is damaged bring it to our notice and provide proof for the replacement of shipment.</li>
      <li>If the amount is debited more than once for the same order please bring it to our notice. If we receive the amount more than once for the same order then we will refund the extra amount if we do not receive the extra transaction amount then you have to contact your bank for the refund.</li>
    </ul>
    </p>
    
    {/* <div className='container' id='policy'> */}
        {/* <h3>PRICING POLICY</h3> */} 

        <p><b>PRICING POLICY :</b>
        
        <ul className='termsul'>
          <b>Please read the Terms and conditions and Privacy Policy along with this Refund policy carefully before enrolling/subscribing to any of the courses, as once you have enrolled/subscribed.</b>
          <li>You cannot change or cancel your enrolment/subscription plan. Once you enrol/subscribe and make the required payment, it shall be considered final as you have given the consent for no refund policy and there cannot be any changes or modifications to the same and neither will there be any refund of such amount. All our courses do not have refund policy or no refund shall be provided once the enrolment/subscription has been taken by the student /subscriber and the same shall not be claimed or entertained in any situation as the case may be.</li>
         
        </ul>   
        </p>




{/*         
        <p style={{ fontWeight: 'bold' }}>Please read the Terms and conditions and Privacy Policy along with this Refund policy carefully before enrolling/subscribing to any of the courses, as once you have enrolled/subscribed.</p> */}

{/* <ul>
<li style={{ listStyleType: 'disc' }}>
  You cannot change or cancel your enrolment/subscription plan. Once you enrol/subscribe and make the required payment, it shall be considered final as you have given the consent for no refund policy and there cannot be any changes or modifications to the same and neither will there be any refund of such amount. All our courses do not have refund policy or no refund shall be provided once the enrolment/subscription has been taken by the student /subscriber and the same shall not be claimed or entertained in any situation as the case may be.
</li>

</ul> */}
        
       {/* </div> */}

    
    </div>

   

    <Footer />
    </div>
  )
}

export default CancellationRefundPolicy