import React from "react";

// import data
import { nav } from "../data";
import { Link } from "react-scroll";

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
        {/* {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="text-white text-body-md" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })} */}
        <li className="text-white text-body-md">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="workouts" smooth={true} duration={500}>
            Workouts
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="faq" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
        <li className="text-white text-body-md">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* buttons
      <div className="-mt-44 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white">Log in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div> */}
    </nav>
  );
};

export default NavMobile;
