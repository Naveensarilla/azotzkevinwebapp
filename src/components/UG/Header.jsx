import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
// import './header.css'

const Header = () => {
  const [showMenu, setshowMenu] = useState(0);
  return (
    <>
      <div className="ug_header">
        {Nav.map((NavData, index) => {
          return (
            <div className="header" key={index}>
              <div className="logo-header">
                <div className={NavData.logo_img_container}>
                  <Link to={"/"}>
                    {" "}
                    <img className="Pg_Logo" src={NavData.logo} alt="" />
                  </Link>
                </div>

                <div className="login_menu">
                  <a
                    href="https://online-pg.egradtutor.in"
                    target="_blank"
                    className={NavData.login}
                  >
                    {NavData.btn1}
                  </a>
                  <div
                    className="mobile_menu mobile_menu_non"
                    onClick={() => setshowMenu(!showMenu)}
                  >
                    <div
                      className={showMenu ? "rotate_right  " : "lines "}
                    ></div>
                    <div className={showMenu ? "no_lines  " : "lines "}></div>
                    <div
                      className={showMenu ? "rotate_left  " : "lines "}
                    ></div>
                  </div>
                  {/* <a href="#"><AiOutlineMenu/></a> */}{" "}
                </div>
              </div>

              <div className={showMenu ? "navbox  mobile-menu" : "navbox "}>
                <ul className={NavData.navbar}>
                  <li>
                    <a href="#home" className={NavData.navlist}>
                      {NavData.link1}
                    </a>
                  </li>
                  <li>
                    <a href="#Exams" className={NavData.navlist}>
                      {NavData.link2}
                    </a>
                  </li>
                  <li>
                    <a href="#course" className={NavData.navlist}>
                      {NavData.link3}
                    </a>
                  </li>
                  <li>
                    <a href="#about_" className={NavData.navlist}>
                      {NavData.link4}
                    </a>
                  </li>

                  <li>
                    {/* <Link className={NavData.navlist} to={"/PgcontactUs"}>
                      {NavData.link5}
                    </Link> */}
                    <a
                      href="/PgcontactUs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={NavData.navlist}
                    >
                      {NavData.link5}
                    </a>
                  </li>
                  <li>
                    {/* <a href="#faq" className={NavData.navlist}>
                      {NavData.link6}
                    </a> */}
                  </li>
                  {/* <li>
                    <a href="#" id="ughomepage_dropdown_download_linK" className={NavData.navlist}>
                      {NavData.link7}
                      <ul className="ughomepage_dropdown_download">
                        <li>
                          <a href="#">{NavData.link7_dp1}</a>
                        </li>
                        <li>
                          <a href="#">{NavData.link7_dp2}</a>
                        </li>
                      </ul>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
