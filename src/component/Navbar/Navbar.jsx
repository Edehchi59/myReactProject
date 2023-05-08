import React, { useState } from "react";
import "./navbar.scss";
import { ImAndroid } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [active, setActive] = useState("navbar");
  // fuction to toggle navbar
  const showNav = () => {
    setActive("navbar activeNavbar");
  };
  // fuction to close navbar
  const closeNav = () => {
    setActive("navbar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <ImAndroid className="icon" />
              DroineTech
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About us
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
