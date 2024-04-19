import React, { useContext, useState } from "react";
import Faq from "./Faq";
import logo from "./logo2.jpg";
import { Link } from "react-router-dom";
import "./IITJEE_OLVCStyles.css";
import Footer from "./Footer";
import Examheader from "./Examheader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import "./BitsatOTC.css";
import BITSATimg from "../UG/CARDS/images/BITSATCARD.png";
import { FaShoppingBag } from "react-icons/fa";

import academic from "../UG/CARDS/images/academic.png";
import analysis from "../UG/CARDS/images/analysis.png";
import performance from "../UG/CARDS/images/NeetperformanceAnalysis.png";
import subjects from "../UG/CARDS/images/learning.png";
import Indiarank from "../UG/CARDS/images/Indiarank.png";

import subjectsd from "../UG/CARDS/images/learning.png";
import answering from "../UG/CARDS/images/answering.png";
import Additional from "../UG/CARDS/images/Additional.png";
import myContext from "../PG/context/MyContext";
import { SlCalender } from "react-icons/sl";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

import MATHEMATICS from "./BitsatOLVC_images/maths.png";
import PHYSICS from "./BitsatOLVC_images/PHYSICS.png";
import CHEMISTRY from "./BitsatOLVC_images/CHEMISTRY.png";
import mpc from "./BitsatOLVC_images/ENGLISH_LR_GA_OTS.png";
import english from "./BitsatOLVC_images/english2.png";
import CHALLENGER from "./BitsatOLVC_images/CHALLENGER.png";
import { LuScrollText } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { BiRupee } from "react-icons/bi";
import { PiClipboardTextThin } from "react-icons/pi";
import { MdAddChart } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// -------------------------
export const BitsatOTC = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;
  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />
      {/* BITSAT - ONLINE TEST SERIES */}
      <div className="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1>BITSAT - ONLINE TEST SERIES</h1>
      </div>
      <div className="jeesection">
        <div className="jeediv">
          <h2>BITSAT - ONLINE TEST SERIES - 2024</h2>
          {/* <a href="">COURSE BROCHURE</a> */}
        </div>
        <p className="jeesection_paragraph">
          BITSAT stands for Birla Institute of Technology and Science Admission
          Test. It is an online exam which is conducted for the students to take
          admission into B.E., B. Pharm and M.Sc. programmes offered at its
          three campuses located at Pilani, Goa and Hyderabad. Preparing well
          and attempting the exam successfully is one of the greatest desires
          aspirants. BITSAT Online Test Series provides an opportunity to the
          students to assess their level of learning and understanding of the
          subject before showcasing their prowess in the main entrance
          examination. Our online test series makes your understanding stronger
          and helps you to challenge yourself in an environment that resembles
          the final examination. We at eGRADTutor academy are offering previous
          year question papers and online tests series. The online test series
          interface is similar to the actual exam interface and it helps the
          student to strategize and approach the examination.
        </p>
      </div>

      {/* WHY ONLINE TEST SERIES? */}
      <div className="FEATURES_Bgcolor">
        <div className="jeesection">
          <h2>WHY ONLINE TEST SERIES?</h2>
          <ul className="FEATURES_-contant">
            {/* <li>By taking BITSAT online tests series, candidates get familiar with the test-taking environment.</li> */}
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={academic} alt="" />
              </span>
              <p>
                BITSAT online test series is crafted by academic experts with
                years of domain knowledge and experience
              </p>
            </li>

            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={performance} alt="" />
              </span>
              <p>
                With the help of online test series, candidates are able to
                enhance their speed and accuracy of answering questions in the
                examination.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={analysis} alt="" />
              </span>
              <p>
                You will be receiving an in-depth analysis post your test that
                will help you understand your strong/weak areas.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={subjects} alt="" />
              </span>
              <p>
                BITSAT online test series lets you have a real-time exam
                experience. You can learn to manage your time better, attempt
                questions with accuracy and precision.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="jeesection">
        <h2>BUY ONLINE TEST SERIES</h2>

        <div>
          <Carousel
            autoPlay
            infiniteLoop
            // showArrows={false}
            interval={8000}
            // showThumbs={false}
            // showIndicators={false}
            showStatus={false}>

            <div className="bitsatcard-container">
              {/* car1 */}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5 className="bitsat-card-title">CHALLENGER TEST SERIES</h5>
                  <div className="bitsatCardimage_section">
                    <img
                      className="bitsatCard-imgs"
                      src={CHALLENGER}
                      alt="CHALLENGER" />
                  </div>
                  <ul>
                    <li className="PartTests">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>15</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                    <li style={{ display: "inline-block", paddingTop: "54px" }}></li>
                  </ul>
                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a
                        href="https://online-ug.egradtutor.in/"
                        target="_blank"
                        id="buy-now-btn"> Buy Now </a>
                    </div>
                    <span className="BitsatPriceTag">Price 1200/-</span>
                    <a href="#" id="schedule-btn"> Schedule </a>
                  </div>
                </div>
              </div>

              {/* car 2 */}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5 className="bitsat-card-title">BITSAT OTS BUNDLE</h5>
                  <div className="bitsatCardimage_section">
                    <img className="bitsatCard-imgs" src={mpc} alt="mpc " />
                  </div>
                  <ul>
                    <li className="PartTests">
                      <LuFileText className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>150</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <PiClipboardTextThin className="SlCalender" />
                      <p className="ChallengerBorder">
                        Subject wise Full Test <span> 20</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Challenger Full Tests <span>15</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                  </ul>
                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a
                        href="https://online-ug.egradtutor.in/"
                        target="_blank"
                        id="buy-now-btn">
                        Buy Now
                      </a>
                    </div>
                    <span className="BitsatPriceTag">Price 2000/-</span>
                    <a href="#" id="schedule-btn">
                      Schedule
                    </a>
                  </div>
                </div>
              </div>
              {/* car 3*/}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5
                    className="bitsat-card-title"
                    title="English, Logical Reasoning, and General Aptitude">
                    VERBAL; LR & GA - OTS
                  </h5>
                  <div className="bitsatCardimage_section">
                    <img
                      className="bitsatCard-imgs"
                      src={english}
                      alt="english" />
                  </div>
                  <ul>
                    <li
                      className="PartTests"
                      title="English, Logical Reasoning, and General Aptitude">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>25</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <LuFileText className="SlCalender" />
                      <p className="ChallengerBorder">
                        Part Tests <span> 20</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <PiClipboardTextThin className="SlCalender" />
                      <p className="ChallengerBorder">
                        Full Tests <span> 5</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                  </ul>
                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a
                        href="https://online-ug.egradtutor.in/"
                        target="_blank"
                        id="buy-now-btn"
                      >
                        Buy Now
                      </a>
                    </div>
                    <span className="BitsatPriceTag">Price 499/-</span>
                    <a href="#" id="schedule-btn">
                      Schedule
                    </a>
                  </div>
                </div>
              </div>

              {/* car 4*/}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5 className="bitsat-card-title">MATHEMATICS - OTS</h5>
                  <div className="bitsatCardimage_section">
                    <img className="bitsatCard-imgs" src={MATHEMATICS} alt="" />
                  </div>
                  <ul>
                    <li className="PartTests">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>25</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <LuFileText className="SlCalender" />
                      <p className="ChallengerBorder">
                        Part Tests <span> 20</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <PiClipboardTextThin className="SlCalender" />
                      <p className="ChallengerBorder">
                        Full Tests <span> 5</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                  </ul>
                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a
                        href="https://online-ug.egradtutor.in/"
                        target="_blank"
                        id="buy-now-btn" >
                        Buy Now
                      </a>
                    </div>
                    <span className="BitsatPriceTag">Price 499/-</span>
                    <a href="#" id="schedule-btn">
                      Schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bitsatcard-container">
              {" "}
              {/* card 5 */}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5 className="bitsat-card-title">PHYSICS - OTS</h5>
                  <div className="bitsatCardimage_section">
                    <img
                      className="bitsatCard-imgs"
                      src={PHYSICS}
                      alt="PHYSICS" />
                  </div>
                  <ul>
                    <li className="PartTests">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>25</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <LuFileText className="SlCalender" />
                      <p className="ChallengerBorder">
                        Part Tests <span> 20</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <PiClipboardTextThin className="SlCalender" />
                      <p className="ChallengerBorder">
                        Full Tests <span> 5</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                  </ul>

                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a href="https://online-ug.egradtutor.in"
                        target="_blank" id="buy-now-btn"> Buy Now </a>
                    </div>
                    <span className="BitsatPriceTag">Price 499/-</span>
                    <a href="#" id="schedule-btn">
                      Schedule
                    </a>
                  </div>
                </div>
              </div>
              {/* car 6*/}
              <div className="bitsat-card">
                <div className="bitsat-card-body">
                  <h5 className="bitsat-card-title">CHEMISTRY - OTS</h5>
                  <div className="bitsatCardimage_section">
                    <img
                      className="bitsatCard-imgs"
                      src={CHEMISTRY}
                      alt="CHEMISTRY" />
                  </div>
                  <ul>
                    <li className="PartTests">
                      <MdAddChart className="SlCalender" />
                      <p className="ChallengerBorder">
                        Total Tests <span>25</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <LuFileText className="SlCalender" />
                      <p className="ChallengerBorder">
                        Part Tests <span> 20</span>
                      </p>
                    </li>
                    <li className="PartTests">
                      <PiClipboardTextThin className="SlCalender" />
                      <p className="ChallengerBorder">
                        {" "}
                        Full Tests <span> 5</span>
                      </p>
                    </li>
                    <li style={{ display: "flex", alignItems: "center" }}>
                      <SlCalender className="SlCalender" /> 01-04-2024 to
                      22-06-2024
                    </li>
                  </ul>

                  <div className="schedule-buy-now">
                    <div className="price-tag">
                      <a
                        href="https://online-ug.egradtutor.in/"
                        target="_blank"
                        id="buy-now-btn">
                        Buy Now
                      </a>
                    </div>
                    <span className="BitsatPriceTag">Price 499/-</span>
                    <a href="#" id="schedule-btn">
                      Schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* BUY ONLINE TEST SERIES */}
      {/* <div className="jeesection jeetable">
        <h2>BUY ONLINE TEST SERIES</h2>
        <div>
           <table className="jeeinsidetable">
            <tr>
              <th>S.NO</th>
              <th> TEST SERIES TYPE</th>
              <th>PRICE</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>BUY NOW</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Challenger Test Series (15 Tests)</td>
              <td>
                &#8377;2500 +<small>GST</small>
              </td>
              <td>10-04-2023</td>
              <td>22-06-2023</td>
              <td>
                <center>
                  <a href="https://online-ug.egradtutor.in/">BUY NOW</a>
                </center>
              </td>
            </tr>
          </table> 
        </div>
      </div> */}

      {/* <div className="whyonline_ots">
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two">
                <div className="cards_logo_two">
                  <img src={BITSATimg} alt="" />
                </div>
                <div className="card_dates_two">
                  <span>10-04-2023 to 22-06-2023</span>
                </div>

                <p className="ENROLL_NOW_btn_two">
                  <a href="https://online-ug.egradtutor.in/" target="_blank">
                    <p>
                      <FaShoppingBag />
                    </p>
                    Buy Now
                  </a>
                </p>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹5000 + GST"</p>
                  <a href="">view schedule</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* NEET - ONLINE TEST SERIES SCHEDULE */}

      {/* <div className="jeesection ots_schedule">
        <h2 className="bitsatheading">BITSAT - ONLINE TEST SERIES SCHEDULE</h2>
        <a className="otsbroucher" href="#">
          BITSAT - ONLINE TEST SERIES SCHEDULE
        </a>
      </div> */}

      {/* FEATURES OF ONLINE TEST SERIES */}
      {/* <div className='jeesection'>
        <h2>FEATURES OF ONLINE TEST SERIES</h2>
        <ul>
          <li>All India rank will be given for each test.</li>
          <li>10 papers as a part of the challenger test series</li>
          <li>Developed as per the latest syllabus of BITSAT exam.</li>
          <li>Additional 5 Previous year question papers for practice</li>
          <li>Well explained and detailed answers for every question.</li>
          <li>All the tests are active till the BITSAT - 2023 examination.</li>
          <li>Test series prepared by experts who are top faculty across India.</li>
          <li>We have designed BITSAT online test series that will provide you with in-depth coverage of the latest syllabus.</li>
          <li>Our BITSAT online test interface is similar to that of the final exam, and it helps students assess their preparation.</li>
          <li>Same pattern and time limit as the actual BITSAT exam which acquaints students with the intricacies of the exam.</li>
        </ul>
      </div> */}

      {/* main code */}
      {/* <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
              </span>
              <p>Ranker board for every exam.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={subjectsd} alt="" />
              </span>
              <p>Detached performance analysis for all exams.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={answering} alt="" />
              </span>
              <p>Developed as per the latest syllabus of BITSAT exam.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Additional} alt="" />
              </span>
              <p>Error free solutions to all questions.</p>
            </li>
          </ul>
        </div>
      </div> */}

      {/* FEATURES_Bgcolor */}
      <div className="FEATURES_Bgcolor FEATURES_Bgcolor_bitsat_p_4">
        <div className="whyonline_ots whyonline_otsmedia">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATUREScontant">
            <li>
              <div className="bitsatFEATUREScontant">
                <div className="bitsatFEATUREScontant_list">
                  <p>Ranker board for every exam.</p>
                  <div className="bitsatFEATUREScontantimg">
                    <img width={90} height={90} src={Indiarank} alt="" />
                  </div>
                </div>

                <div className="bitsatFEATUREScontantlist">
                  <p>Detached performance analysis for all exams.</p>
                  <div className="bitsatFEATUREScontantimg">
                    <img width={90} height={90} src={subjectsd} alt="" />
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="bitsatFEATUREScontant">
                <div className="bitsatFEATUREScontant_list">
                  <p>Developed as per the latest syllabus of BITSAT exam.</p>
                  <div className="bitsatFEATUREScontantimg">
                    <img width={90} height={90} src={answering} alt="" />
                  </div>
                </div>

                  <div className="bitsatFEATUREScontantlist">
                    <p>Error free solutions to all questions.</p>
                    <div className="bitsatFEATUREScontantimg">
                    <img width={90} height={90} src={Additional} alt="" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="features_ots ">
        <div className="features_heading">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <div className="ots_-cordContainer">
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  {" "}
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p> All India rank will be given for each test.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>10 papers as a part of the challenger test series</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Developed as per the latest syllabus of BITSAT exam.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Additional 5 Previous year question papers for practice</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>
                  Same pattern and time limit as the actual BITSAT exam which
                  acquaints students with the intricacies of the exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Faq /> */}
      <Footer />
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
