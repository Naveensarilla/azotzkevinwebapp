import React, { useContext, useState } from "react";
import logo from "./logo2.jpg";
import Faq from "./Faq";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Examheader from "./Examheader";
import answering from "./CARDS/images/answering.png";
import Additional from "./CARDS/images/Additional.png";
import explained from "./CARDS/images/explained.png";
import OLVCPAGE from "./CARDS/images/OLVCPAGE.png";
import bitsat1 from "./BitsatOLVC_images/bitsat2024_3.png";
import { FaDownload } from "react-icons/fa";
import understanding from "./CARDS/images/OLVCPAGE.png";
import { FaRupeeSign } from "react-icons/fa";

import { FiFileText } from "react-icons/fi";
// cards
import comments from "./CARDS/images/comments.png";

import Discussion from "./BitsatOLVC_images/Discussion.png";
import yourpreparation from "./CARDS/images/yourpreparation.png";
import NeetperformanceAnalysis from "./CARDS/images/NeetperformanceAnalysis.png";

import bitsatTable2 from "./BitsatOLVC_images/bitsat2024_4_CRASH_COURSE_TABLE.png";

import { MdOutlineVerticalAlignTop } from "react-icons/md";
import myContext from "../PG/context/MyContext";
import Faq_BitsatOLVC from "./Faq_BitsatOLVC";
import { Carousel } from "react-responsive-carousel";

import bitsat2024_CRASH_COURSE from "../ug_homepage/components/Home_Section/Banners/bitsat2024_CRASH_COURSE.png";
import BITSAT_CRASH_COURSE_BANNER from "../ug_homepage/components/Home_Section/Banners/BITSAT CRASH COURSE BANNER.jpg";
import { FaArrowRight } from "react-icons/fa6";

import { LuFileText } from "react-icons/lu";
import { PiClipboardTextThin } from "react-icons/pi";
import { MdAddChart } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export const BitsatOLVC = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      <span id="topMove"></span>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className="otsh1" style={{ background: "#000", height: "9vh" }}>
        <h1>BITSAT CRASH COURSE - 2024</h1>
      </div>

      <div style={{ padding: "10px 0" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          interval={4600}
          showThumbs={false}
          // showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src={bitsat2024_CRASH_COURSE} alt="" />
          </div>
          <div>
            <img src={BITSAT_CRASH_COURSE_BANNER} alt="" />
          </div>
          {/* <div>
          <img src={img0} alt="" />
        </div> */}
        </Carousel>
      </div>

      {/* <div className="whyonline_ots" >
        <img src={bitsat1} alt="" style={{ width: "100%", marginBottom: '10px' }} />
      </div> */}

      <div>
        <div className="jeesection">
          <div className="jeediv">
            <h2 className="olvcheading">
              BITSAT CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
            </h2>
            <p className="jeesection_paragraph">
              Birla Institute of Technology and Science Admission Test (BITSAT)
              is an entrance exam conducted by the Birla Institute of Technology
              and Science (BITS), Pilani, for admissions to undergraduate
              engineering courses (BE) at its three campuses located at Pilani,
              Goa and Hyderabad. BITSAT success is mostly attributed to the
              foundation created for the student in XI and XII standards. During
              the last few days before examination, the foundation has to be
              strengthened by the experts. To resolve this, we at eGRADTutor
              with one of the top faculty from IIT/IISc, will give the best mode
              to each student to cover and prepare for the complete syllabus of
              Mathematics, Physics and Chemistry for the examination within 30-
              40 days, through our daily BITSAT Crash Course Online Live Video
              Classes. These classes are designed perfectly to cater to teach
              the most important topics, which is more or less expected in the
              examination. This course comes with practice tests and daily
              assignment questions, which will be resolved in detail by the
              faculty in guidance sessions. English and General Aptitude classes
              will be conducted on Sundays, to cover the overall requirement for
              the examination. BITSAT Crash course will let students improve
              their confidence and channel their skills towards the desired
              success in just 30- 40 days.
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <div className="wayOTS_-container  ">
            <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
            <ul className="FEATURES_-contant">
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={answering} alt="" />
                </span>
                <p>Classroom just for you!! Anywhere, Anytime!</p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={Additional} alt="" />
                </span>
                <p>
                  Live online video classes encourage participation of students.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={comments} alt="" />
                </span>
                <p>
                  Live online video classes allow interaction with students
                  through chats and comments.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={explained} alt="" />
                </span>
                <p>
                  Live interaction with expert faculty helps students to
                  understand the areas of improvement.
                </p>
              </li>
             
            </ul>
          </div>

          <div className="Schedulebitsat">
            <div className="COURSEInfoCard_-container">
              <h2>Schedule</h2>
              <ul className="COURSEInfoCard">
                <li>
                  <b>COURSE :</b> ONLINE LIVE VIDEO CLASSES
                </li>

                <li>
                  {" "}
                  <b>EXAM :</b> BITSAT 1 - YEAR COURSE – 2024
                </li>
                <li>
                  <b>SYLLABUS</b> COMPLETE SYLLABUS FOR XI & XII
                </li>
                <li>
                  <b>ELIGIBILITY :</b> APPEARED/PASSED XI IN 2023/PASSED
                  XII(LONG TERM)
                </li>
                <li>
                  <b>SUBJECTS :</b> MATHS + PHYSICS + CHEMISTRY + ENGLISH AND
                  LOGICAL REASONING
                </li>
                <li>
                  <b>COURSE DURATION :</b> 7 - 8 MONTHS
                </li>
                <li>
                  <b>MODE OF INSTRUCTIONS :</b> ENGLISH
                </li>
                <li>
                  <b>START DATE :</b> Batch-1: 01-06-2023 Batch-2: 01-07-2023
                </li>
                <li>
                  <b>END DATE :</b> COURSE VALID UNTIL BITSAT EXAM
                </li>
                <li>
                  <b>FEES :</b> 45000/- + GST (TOTAL FEE CAN BE PAID IN 2
                  INSTALLMENTS) ONLY
                </li>
                <li>
                  <b>TIMINGS :</b> BATCH-1: 6:00 AM – 8:00AM BATCH-2: 7:00 PM –
                  9:00PM
                </li>
                <a href="https://online-ug.egradtutor.in/">
                  <button>ENROLL NOW</button>
                </a>
              </ul>
            </div>
         
          </div>

         
        </div>
      </div> */}
      </div>

      {/* table */}

      {/* BUY ONLINE TEST SERIES */}

      {/* <div
        style={{ overflowY: "scroll" }}
        className="container content-container"
      ></div> */}

      <div className="bitsat_olvc">
        {/* BITSAT CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024 */}

        {/* WHY ONLINE LIVE VIDEO CLASSES ? */}
      </div>

      {/* FEATURES OF ONLINE LIVE VIDEO CLASSES */}

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          {/* <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1> */}
          <h1 className="subheading">FEATURES AND HIGHLIGHTS OF THE COURSE</h1>

          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={Discussion} alt="" />
              </div>
              <p>
                Discussion and coverage of entire BITSAT syllabus in 30-35 days.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={yourpreparation} alt="" />
              </div>
              <p>Practice sheets with 100-150 questions for daily practice.</p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={comments} alt="" />
              </div>
              <p>
                One-on-One doubt clarification sessions and personal mentoring.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img
                  width={150}
                  height={150}
                  src={NeetperformanceAnalysis}
                  alt=""
                />
              </div>
              <p>Online test series for continuous performance Evaluation</p>
            </li>
          </ul>
        </div>
      </div>
      <br />
      {/* main code live  */}
      
      {/* <div>
        <div className="whyonline_ots">
          <h1 className="subheading">BATCH TIMINGS</h1>
          <div className="REGISTERNOW">
            <img src={bitsatTable2} alt="" style={{ width: "100%" }} />
          </div>
          <ul className="registrationBATCH">
          <li>
              Register here for BATCH-1M
              <a className="BATCH_closed" href="#" target="_blank">
                
              CLOSED
              </a>
            </li>
            <li>
              Register here for BATCH-2M{" "}
              <a href="https://forms.gle/tEginzpMrDa2xcYAA" target="_blank">
                {" "}
                Click Here
              </a>
            </li>
            <li>
              Register here for BATCH-2E{" "}
              <a href="https://forms.gle/VbBBT79KHCJEDNop8" target="_blank">
                {" "}
                Click Here
              </a>
            </li>
          </ul>

          <p className="bitsat_Note">
            <b>Note:</b> Post completion of the syllabus there will be practice
            sessions, tests and doubt clarification classes conducted everday.
            Also the classes can be extended or special classes (English and
            Logical Reasoning) will be conducted on Saturday and Sunday incase
            it is needed to complete the syllabus. However, there will be no
            rush to complete the syllabus mechanically. Course and exams will be
            planned and scheduled accordingly.{" "}
          </p>
        </div>
      </div> */}


{/* table code */}
      {/* <div className="whyonline_ots">
        <h1 className="subheading" style={{ marginBottom: "10px" }}>
          BATCH TIMINGS
        </h1>

        <div className="BATCH_TIMINGS">
          <ul>
            <li className="bitsatTable">BATCHES</li>
            <li>BATCH-1M</li>
            <li>BATCH-2M</li>
            <li>BATCH-2E</li>
          </ul>
          <ul>
            <li className="bitsatTable">COURSE START DATE</li>
            <li>15-03-2024</li>
            <li>15-04-2024</li>
            <li> 10-04-2024</li>
          </ul>
          <ul>
            <li className="bitsatTable">COURSE END DATE</li>
            <li>14-04-2024</li>
            <li>18-05-2024</li>
            <li>18-05-2024</li>
          </ul>
          <ul>
            <li className="bitsatTable">NO OF SEATS</li>
            <li>
              <u>20 CLOSED</u>
            </li>
            <li>30</li>
            <li>30</li>
          </ul>
          <ul>
            <li className="bitsatTable">TIMINGS</li>
            <li>8:00 AM – 11:00 AM</li>
            <li>8:00 AM – 11:00 AM</li>
            <li>2:00 PM – 5:00 PM</li>
          </ul>
          <ul>
            <li className="bitsatTable">DAYS</li>
            <li>MONDAY TO SATURDAY</li>
            <li>MONDAY TO FRIDAY</li>
            <li>MONDAY TO FRIDAY</li>
          </ul>
          <ul>
            <li className="bitsatTable">REGISTRATION START </li>
            <li>08-04-2024</li>
            <li>08-04-2024</li>
            <li>05-04-2024</li>
          </ul>
          <ul>
            <li className="bitsatTable">REGISTER HERE</li>
            <li className="RegistrationLinks">
              <u>CLOSED</u>
            </li>
            <li className="RegistrationLinks">
              <a href="https://forms.gle/tEginzpMrDa2xcYAA" target="_blank">
                Click Here
              </a>
            </li>
            <li className="RegistrationLinks">
              <a href="https://forms.gle/VbBBT79KHCJEDNop8" target="_blank">
                Click Here
              </a>
            </li>
          </ul>
        </div>
        <br />
        <p className="BitsatNote">
          Note : Post completion of the syllabus there will be practice
          sessions, tests and doubt clarification classes conducted everday.
          Also the classes can be extended or special classes (English and
          Logical Reasoning) will be conducted on Saturday and Sunday incase it
          is needed to complete the syllabus. However, there will be no rush to
          complete the syllabus mechanically. Course and exams will be planned
          and scheduled accordingly.{" "}
        </p>
      </div> */}


      {/* <Faq_BitsatOLVC /> */}
{/* catds */}

  {/* <div className="BatchTimings_BitsatImg">
                <FiFileText />
              </div> */}
      <div className="whyonline_ots">
      <h1 className="subheading" style={{ marginBottom: "10px",textAlign:'center',display:'flex',justifyContent:'center' }}>
          BATCH TIMINGS
        </h1>
            <div className="BATCHTIMINGS_Bitsat">
            <ul className="registerBitsatClass">
            
              <b>BATCH-1M</b>
              <li>DAYS <span>MONDAY TO SATURDAY</span></li>
              <li>TIMINGS <span>8:00 AM – 11:00 AM</span></li>

              <li>COURSE START DATE <span>15-03-2024</span></li>
              <li>COURSE END DATE <span>14-04-2024</span></li>
              <li>REGISTRATION START <span>08-04-2024</span></li>
              <li className="line_through">No.SEATS <span>20 CLOSED</span></li>
              <li className="BItsat_-line_through"><div>1<sup>st </sup> INSTALMENT</div> <span>CLOSED</span></li>
              <li className="BItsat_-line_through"><div>2<sup>nd </sup> INSTALMENT</div> <span>CLOSED</span></li>

              <p>REGISTRATION   <a className="line_through">CLOSED</a></p>
              <p style={{marginTop:'10px'}}> COURSE BROCHURE   <a  >  <FaDownload /> </a>  </p>

            </ul>

            <ul className="registerBitsatClass">
        
              <b>BATCH-2M</b>
              <li>DAYS <span>MONDAY TO FRIDAY</span></li>
              <li>TIMINGS <span>8:00 AM – 11:00 AM</span></li>

              <li>COURSE START DATE <span>22-04-2024</span></li>
              <li>COURSE END DATE <span>25-05-2024</span></li>
              <li>REGISTRATION START <span>22-04-2024</span></li>
              <li>No.SEATS  <span>30</span></li>
              <li className="INSTALLMENT_Pric"><div  className="INSTALLMENT_Pric">1<sup>st </sup> INSTALMENT</div> <span><FaRupeeSign /> 12,000/- </span></li>
              <li className="INSTALLMENT_Pric"><div  className="INSTALLMENT_Pric">2<sup>nd </sup> INSTALMENT</div> <span><FaRupeeSign /> 12,000/- </span></li>
              <p>REGISTER NOW <a href="https://rzp.io/l/lb0Ozy9fX" target="_blank">Click Here</a></p>
              <p style={{marginTop:'10px'}}> COURSE BROCHURE   <a  >  <FaDownload /> </a>  </p>

            </ul>

            <ul className="registerBitsatClass">
        
            <b>BATCH-2E</b>
            <li>DAYS <span>MONDAY TO FRIDAY</span></li>
            <li>TIMINGS <span>2:00 PM – 5:00 PM</span></li>

              <li>COURSE START DATE <span>15-04-2024</span></li>
              <li>COURSE END DATE <span>18-05-2024</span></li>
              <li>REGISTRATION START <span>15-04-2024</span></li>
              <li>No.SEATS  <span>30</span></li>
              <li><div className="INSTALLMENT_Pric">1<sup>st </sup> INSTALMENT</div> <span><FaRupeeSign /> 12,000/- </span></li>
              <li><div  className="INSTALLMENT_Pric">2<sup>nd </sup> INSTALMENT</div> <span><FaRupeeSign />12,000/- </span></li>
              <p>REGISTER NOW <a href="https://rzp.io/l/sITWKibpGv" target="_blank">Click Here</a></p>

       <p style={{marginTop:'10px'}}> COURSE BROCHURE   <a  >  <FaDownload /> </a>  </p>

            </ul> 
            </div>
      </div>


      {/* <Faq /> */}

      <Footer />
      
      {/* 
      <div class="f_OT_S_P_c">
        <div class="f_OT_S_P_c_chs">
          <div class="f_OT_S_P_c_ch">Ranker board for every exam.</div>
        </div>
        <div class="f_OT_S_P_c_chs">
          <div class="f_OT_S_P_c_ch">Ranker board for every exam.</div>
        </div>

        <div class="f_OT_S_P_c_chs">
          <div class="f_OT_S_P_c_ch">Ranker board for every exam.</div>
        </div>

        <div class="f_OT_S_P_c_chs">
          <div class="f_OT_S_P_c_ch">Ranker board for every exam.</div>
        </div>
      </div> */}

      {isVisible && (
        <span className="UpArrow" onClick={scrollToTop}>
          <a href="#topMove">
            <MdOutlineVerticalAlignTop style={{ fontSize: "30px" }} />
          </a>
        </span>
      )}
    </>
  );
};
