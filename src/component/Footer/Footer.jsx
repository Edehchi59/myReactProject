import React, { useEffect } from "react";
import "./footer.scss";
import video from "../../assets/clouds-64759.mp4";
import { FiSend } from "react-icons/fi";
import { ImAndroid } from "react-icons/im";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";

import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  // Scroll animination

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH </small>
            <h2>Buy from us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              type="text "
              data-aos="fade-up"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <ImAndroid className="icon" /> DroineTech
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              DroineTech is a reputable company that provides top-notch phone
              repair services and sells high-quality phones. Their commitment to
              customer satisfaction and expertise in the industry make them a
              reliable choice for all your phone needs.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiFillYoutube className="icon" />
              <BsWhatsapp className="icon" />
              <AiOutlineInstagram className="icon" />
              <FiFacebook className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Products
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Locations
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payments
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Apple
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tecno
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Samsung
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Infinix
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Windows
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup">
              <span className="groupTitle">Marketplaces</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Ogbete Market
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                DroineTech
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Shoprite
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Enugu
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Lagos
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>
              MADE WITH <GiSelfLove className="icon" /> BY DROINETECH
            </small>
            <small>COPYRIGHT RESEVERED - EDEH CHINEDU 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
