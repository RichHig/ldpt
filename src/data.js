// images
import Logo from "../src/assets/img/header/logo.svg";
import Logo1 from "../src/assets/img/header/logo1.png";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";

import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo1,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

// export const nav = [
//   { name: "Home" },
//   { name: "About", href: "/" },
//   { name: "Workouts", href: "/" },
//   { name: "Testimonials", href: "/" },
//   { name: "FAQ", href: "/" },
//   { name: "Contact", href: "/" },
// ];

export const banner = {
  titlePart1: "Control your Health & Fitness",
  titlePart2: "Come hit your goals here.",
  subtitle:
    "No matter your fitness level, come challenge yourself to be better",
  textBtn: "Contact me",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Our misson",
  subtitle1:
    "Welcome to LDPT training your first step is complete. The information included is designed to show anyone who feels that their fitness and health days are behind are wrong. Fitness takes many forms and everyone is different but what unifies us is that the benefits are limitless. With a little bit of knowledge and a dose of dedication you too can improve any aspects of your physical and mental health.",
  subtitle2: "Session can be either:",
  subtitle3: "· Face to face in my private one to one gym",
  subtitle4: "· Private home visits",
  subtitle5: "· Virtual appointments and classes",
  subtitle6:
    "A eating regime that fits your life and goals are provided and 24 hour support to keep you on the path.",

  link: "Book A Session Now",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Training programs",
  programs: [
    {
      image: ResistanceImg,
      name: "Weight Loss",
    },
    {
      image: BoxingImg,
      name: "Mobility",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Rehabilitation",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Competition Prep",
    },
    {
      image: BattleRopeImg,
      name: "Online Fitness",
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Testimonials",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Richard H.",
      message:
        "“I have achieved more in 6 months with Lewis then 5 years training by myself!”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Lewis changed my life. Not only physically but mentally as well.”",
    },
    {
      image: CommunityImg3,
      name: "John D.",
      message:
        "“I have struggled with my mobility due to my age and through the online classes I can finally do the simple things like pick a newspaper off the floor”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“I struggled with shoulder mobility due to a motorbike accident, through online classes I finally can move my arm above my head without pain.”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "Fill out the contact form below with your phone number/email and we can arrange a time slot to kickstart your journey together.",
    },
    {
      question: "Do I have to pay for a membership?",
      answer:
        "No, like all my clients they pay for training rehabilition sessions either on the day or book and pay in advance for their sessions.",
    },
    {
      question: "What do you speciailse in?",
      answer:
        "I am a highly qualified personal trainer who specialises in Rehabilition, Competition Prep and all round fitness journey for my client to help them to achieve the goals they set.",
    },
    {
      question: "Are their any age restrictions to become your client?",
      answer:
        "I work with clients from the age of 16 onwards who are starting their fitness journey to helping with rehabilition and overall fitness with clients in care homes.",
    },
    {
      question: "Which area are you based in?",
      answer:
        "I am based in Pershore, Worcestershire where you can visit my home gym. I do offer outcall services for clients located in Worcestershire and Gloucestershire. If you are located outside of these locations send me a message via the contact form.",
    },
    {
      question: "How can I book a online class?",
      answer:
        "Send a message with your email and phone number via the contact form and we will arrange a time. How the online classes work is once payment is successful you will be provided with a link for the Zoom call where we can start your session wherever you are located in the world.",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.",
  btnText: "Join now",
};

export const footer = {
  logo: Logo1,
  copyrightText: "All rights reserved. LDPT 2023.",
};
