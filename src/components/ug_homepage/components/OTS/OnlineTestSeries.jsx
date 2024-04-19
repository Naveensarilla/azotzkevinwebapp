import React from "react";
// import Examheader from "../../../UG/Examheader";
import "./OnlineTestSeries.css";
import card from "../../../UG/infographic/ots22.png";
import otsMAinImg from "../../../UG/infographic/ots11.png";
import neet from "../../../UG/infographic/neet.png";
import logo from "../../components/Header/logo/egate logo 1.png";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import Footer from "../Footer/Footer";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const OnlineTestSeries = () => {
  return (
    <div>
      <Examheader />
      <div className="">
        <div className="otseriesContainer ">
          <div className="otseriesContant otseriesimgText ">
            <div className="ugOts_header">
              <div className="otseriesTextImg">
                <h3>ONLINE TEST SERIES</h3>
                <p>
                  Preparing for competitive exams involves a multifaceted
                  approach, combining subject/topic-wise study with
                  comprehensive coverage of the full syllabus. This holistic
                  strategy ensures a deep understanding of all concepts while
                  covering a wide range of topics.
                </p>
              </div>
              <div className="otseriesImg">
                <img src={otsMAinImg} alt="" />
              </div>
            </div>
          </div>
          <div
            className="otseriesContant otseriesInstaImg"
            style={{ background: "#f8e3b6" }}
          ></div>
        </div>
      </div>
            <div className="ugOts_header">
  
        <div className="otsSeriesExamList">
          <div className="otsSeriesExamList_header">
            <h3>IIT JEE ONLINE TEST SERIES</h3>
            <IITJEEotsCards />
          </div>
        </div>
      </div>
      <div className="ug_exam_header">
        <div className="otsSeriesExamList">
          <div className="otsSeriesExamList_header">
            <h3>NEET ONLINE TEST SERIES</h3>
            <div className="test-series-card">
              {NeetTestSeries().map((item, index) => (
                <div
                  className="test-series-item"
                  style={{ background: "#fef0ff" }}
                  key={index}
                >
                  <div className="image-container">
                    <img src={neet} alt="Test Series" />
                  </div>
                  <div className="otsExamDetails">
                    <h3 className="otsTitleOfTheCArd">{item.title}</h3>
                    <ul className="noOfV">
                      <li>
                        <span>No. of Tests:</span> {item.No_ofTests}
                      </li>
                      <li>
                        <span>Validity:</span> {item.Validity}
                      </li>
                    </ul>
                    <div className="price-buy-details">
                      <div className="priceBuyNow">
                        <span className="price_-ots">
                          <FaIndianRupeeSign /> {item.price}
                        </span>
                        <button>{item.BuyNow}</button>
                      </div>
                      <div>
                        <button>{item.Details}</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardDesigns />
      <Footer />
    </div>
  );
};


// card component
export const IITJEEotsCards = () => {
  return (
    <>
      <div className="test-series-card">
        {TestSeries().map((item, index) => (
          <div className="test-series-item" key={index}>
            <div className="image-container">
              <img src={card} alt="Test Series" />
            </div>
            <div className="otsExamDetails">
              <h3 className="otsTitleOfTheCArd">{item.title}</h3>
              <ul className="noOfV">
                <li>
                  <span>No. of Tests:</span> {item.No_ofTests}
                </li>
                <li>
                  <span>Validity:</span> {item.Validity}
                </li>
              </ul>
              <div className="price-buy-details">
                <div className="priceBuyNow">
                  <span className="price_-ots">
                    <FaIndianRupeeSign /> {item.price}
                  </span>
                  <button>{item.BuyNow}</button>
                </div>
                <div>
                  <button>{item.Details}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export const TestSeries = () => [
  {
    title: "IIT JEE - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "IIT JEE - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "IIT JEE - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "IIT JEE - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "IIT JEE - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
];

export const NeetTestSeries = () => [
  {
    title: "NEET - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "NEET - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "NEET - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "NEET - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
  {
    title: "NEET - Online Test Series 2024",
    No_ofTests: "5",
    Validity: "02-02-2025",
    price: "5000/-",
    BuyNow: "Buy Now",
    Details: "Details",
  },
];

export const Examheader = () => {
  return (
    <div>
      <div className="ugexam_header">
        {NavData.map((NavData, index) => {
          return (
            <div className="header ug_exam_header" key={index}>
              <div className={NavData.logo_img_container}>
                <Link to={"/"}>
                  <img src={NavData.logo} alt="" />
                </Link>
              </div>
              <div className="exam_login_menu  ">
                <li>
                  <a
                    href="https://online-ug.egradtutor.in/"
                    id="exam_login_menu_home"
                    className={NavData.navlist}
                  >
                    <RiLoginBoxLine /> Login/Registration
                  </a>
                  <Link
                    to="/home"
                    className={NavData.navlist}
                    id="exam_login_menu_home"
                  >
                    <IoMdHome /> {NavData.link1}
                  </Link>
                </li>
                {/* <a
                      href="https://online-ug.egradtutor.in"
                      target='_blank'
                      className={NavData.login}
                    >
                      {NavData.btn1}
                    </a> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const NavData = [
  {
    // --------------------logo------------------
    logo_img_container: " logo_img_container",
    logo: [logo],

    // ---------------------navbar classes-----------------

    navbar: "navbarug",
    navlist: "navlist",
    login: "uglogin_btn",

    // ---------------------navbar links-----------------

    link1: "Home",
    link2: "Exams",
    link3: "Courses",
    link4: "About Us",
    link5: "Contact Us",
    link6: "FAQs",
    link7: "Downloads",
    link7_dp1: "PYQ Papers",
    link7_dp2: "Worksheet",

    // ---------------------navbar login-----------------
    login_btn: "login_btn",
    btn1: "Login/Registration",
  },
];

export const CardDesigns = () => {
  return (
    <div className="containerCardDesigns">
      {TestSeries().map(
        (
          item,
          index // Assuming TestSeries() returns an array of items
        ) => (
          <div key={index} className="CardDesigns">
            <img src={otsMAinImg} alt="" />
            <div className="intro">
              <u>
                <h3 className="otsTitleOfTheCArd" style={{ color: "#33c7c9" }}>
                  {item.title}
                </h3>
              </u>
              <p>
                <ul className="noOfV">
                  <li>
                    <span>No. of Tests:</span> {item.No_ofTests}
                  </li>
                  <li>
                    <span>Validity:</span> {item.Validity}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
