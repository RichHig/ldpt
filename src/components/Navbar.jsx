// import data
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 text-white">
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="workouts" smooth={true} duration={500}>
            Workouts
          </Link>
        </li>
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="faq" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
        <li className="hover:text-primary-200 transition cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
