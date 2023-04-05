import React from "react";

// import data
// import { nav } from "../data";
import { Link } from "react-scroll";

const NavMobile = ({ navMobile, onClose }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
        <li className="text-white text-body-md">
          <Link to="home" smooth={true} duration={500} onClick={onClose}>
            Home
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="about" smooth={true} duration={500} onClick={onClose}>
            About
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="workouts" smooth={true} duration={500} onClick={onClose}>
            Workouts
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            onClick={onClose}
          >
            Testimonials
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="faq" smooth={true} duration={500} onClick={onClose}>
            FAQ
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="contact" smooth={true} duration={500} onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
