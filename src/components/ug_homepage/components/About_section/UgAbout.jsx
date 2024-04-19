import React from "react";
import { UgAboutDAta } from "./UgAboutDAta"; // Assuming "./AboutData" is the correct path to your data file
import './about.css';
import OUR_MISSION from '../../../UG/Images/OUR_VISION1.png';
import OUR_VISION from '../../../UG/Images/OUR_VISION2.png';
import logo from "./logo/egradtutor_logo.png";

const UgAbout = () => {
  return (
    <div id="about">
      <div className="About">
        {UgAboutDAta.map((data, index) => (
          <div className='Ug_-about_container' key={index}>
            <h2>{data.about_title}</h2>
            <div className="Ug_-About__container">
              <div className='Ug_-about_left_container'>
                <div className='Ug_-about_img_contant'>
                  <img src={logo} alt="eGRADTutor Logo" />
                </div>
                <div className="Ug_-about_left_info">
                  <p>{data.about_info}</p>
                </div>
              </div>
              <div className='Ug_-about_right_container'>
                <div className='Ug_-about_vision_box_contant'>
                  <div className='Ug_-about_vision_-subbox'>
                    <div className='Ug_-m-Vimg'>
                      <img src={OUR_MISSION} alt="Our Mission" />
                    </div>
                    <h3>{data.about_box_title1}</h3>
                    <div className='Ug_-about_vision_-subbox_info'>
                      <p>{data.about_box_info}</p>
                      <ol className="Ug_-about_Ol" type="1">
                        <li className="Ug_-about_Li">{data.about_box_point1}</li>
                        <li className="Ug_-about_Li">{data.about_box_point2}</li>
                        <li className="Ug_-about_Li">{data.about_box_point3}</li>
                        <li className="Ug_-about_Li">{data.about_box_point4}</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className='Ug_-about_vision_box_contant'>
                  <div className='Ug_-about_mision_-subbox'>
                    <div className='Ug_-m-Vimg'>
                      <img src={OUR_VISION} alt="Our Vision" />
                    </div>
                    <h3>{data.about_box_title2}</h3>
                    <div className='Ug_-about_vision_-subbox_info'>
                      <ul style={{ textAlign: "justify" }}>
                        <li>{data.about_box_info1}</li>
                        <li>{data.about_box_info2}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UgAbout;
