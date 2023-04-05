import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";

import Header from "../components/Header";
import About from "../components/About";
import Workouts from "../components/Workouts";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
// import Join from "../components/Join";
import Contact from "../components/Contact";

const Home = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="" name="home">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Community />
      <Faq />
      {/* <Join /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
