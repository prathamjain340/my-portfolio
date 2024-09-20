import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCanva,
  SiAdobephotoshop,
  SiPython,
  SiMysql,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"html5"} />,
          <FaCss3 key={"css"} />,
          <FaJs key={"fj"} />,
          <FaReact key={"react"} />,
          <SiNextdotjs key={"next"} />,
          <SiFramer key={"framer"} />,
          <FaWordpress key={"word"} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <SiAdobephotoshop key={"siadobeshop"} />,
          <SiCanva key="sicanva" />,
          <FaFigma key={"fafigma"} />,
        ],
      },
      {
        title: "Programming and DBMS",
        icons: [
          <TbBrandCpp key={"tbbrandcpp"} />,
          <SiPython key={"sipython"} />,
          <SiMysql key={"simysql"} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "IEEE MAIT Treasure Hunt - 3rd Position",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Vice President - Career Development Cell MAIT",
        stage: "Oct 2022 - Present",
      },
      {
        title: "Technical Content Editor - ShortHills Tech",
        stage: "Apr 2022 - Apr 2022",
      },
      {
        title: "Cadet - National Cadet Corps",
        stage: "Feb 2022 - May 2024",
      },
      {
        title: "Volunteer - National Service Scheme",
        stage: "2024",
      },
      {
        title: "Volunteer - Blood Donation Camp",
        stage: "2024",
      },
      {
        title: "Co-Founder President - Sync",
        stage: "Aug 2019 - Feb 2021",
      },
      {
        title: "Graphic Designer - Spic Macay",
        stage: "Jul 2019 - Jul 2019",
      },
      {
        title: "Graphic Designer - Electoral Literacy Club",
        stage: "Jun 2019 - Jun 2019",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "B.Tech. in Electrical and Electronics Engineering - MAIT, Rohini",
        stage: "2025",
      },
      {
        title: "DSA in C++ - VSIT",
        stage: "2024",
      },
      {
        title: "Class XII - Venkateshwar International School",
        stage: "2021",
      },
    ],
  },
];

// components
// import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img*/}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificient designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            My journey in web development began with a deep curiosity for how
            things work, and it has evolved into a career where I continuously
            strive to learn and adapt to new challenges.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={0} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div> */}
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div> */}
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === item &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icons, index) => {
                      return (
                        <div key={index} className="text-2xl text-white">
                          {icons}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default About;
