"use client";
import Brain from "../../components/brain"
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/SunDev.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Full Stack Developer ,experienced in frontend and backend development technologies such as 
              Javascript ,NodeJS ,ReactJS ,Next.js ,Springboot and flask  
            </p>
            {/* BIOGRAPHY QUOTE */}
            {/* <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span> */}
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg 
            width="172" 
            height="106" 
            viewBox="0 0 172 106" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M45 31C45 44.4685 48.5371 87 26 87C19.0081 87 14.4159 80.0337 10.4444 75.2222C2.72923 65.8749 2 56.4945 2 44.7778C2 23.7264 18.739 14.0849 35.8889 6C42.977 2.65845 48.3638 2 56 2C64.5624 2 65.9075 12.5266 66 19.5556C66.3243 44.2061 58.5012 65.7829 38.7778 82C32.9851 86.7629 29.5233 88 22.2222 88C15.9765 88 12.9723 85.8087 14.2222 78.7778C16.3617 66.743 27.4349 59 39.2222 59C43.6698 59 47.0458 64.4458 50 67.5556C54.3948 72.1816 58.6953 75.49 63.5 79.5556C71.1304 86.0121 81.0687 83.7685 86.9444 75.4444C89.8188 71.3725 92.2445 67.1986 90.4444 62.0556C89.0049 57.9426 85.3139 53 80.5556 53C71.2087 53 73.0044 68.0725 76.4444 73.3889C81.6219 81.3904 87.7891 69.699 88.9444 64.5C89.6339 61.3975 85.2999 67.5115 85.0556 68.6111C84.4304 71.4242 84.9977 76.2976 88.5556 76.9444C94.9406 78.1054 96 67.5845 96 63.5C96 58.868 96 61.6137 96 64.5556C96 68.8231 96.5411 71.1932 98.4444 75C99.6442 77.3995 100.923 81.0808 103.944 77.5556C106.466 74.6136 104.485 70.8287 106.222 68.2222C106.595 67.6629 107.839 58.4444 106.556 58.4444C103.981 58.4444 105 65.7024 105 67.2222C105 70.486 104.357 74.486 107.222 76.7778C110.778 79.6221 112.755 73.9234 114 72.4444C115.986 70.0856 116 66.3076 116 63.2222C116 57.847 116.489 60.5774 114.778 64C112.712 68.1326 115.074 80.8519 122 76.7778C124.966 75.0332 125.548 59.1971 122 59C118.539 58.8077 117.737 62.8283 121 63C124.744 63.1971 128.699 60.8727 132 59.2222C136.096 57.174 138.793 48.5227 134.778 57C132.125 62.6004 130.525 74.5143 139.944 72.9444C144.266 72.2242 153.771 64.6719 150.444 59.4444C145.802 52.1488 139.502 65.779 145.5 70.4444C148.409 72.7069 150 68.9229 150 66.5C150 61.4936 149.506 69.3951 150.556 70.4444C156.638 76.5271 162 59.2083 162 55.4444C162 48.015 162 55.6521 162 58.5556C162 64.3519 162 70.1481 162 75.9444C162 81.1127 160.542 88.3773 159 93.3889C158.002 96.6334 155.373 100.581 152.444 102.444C143.719 107.997 141.435 95.6765 146.556 90.5556C154.287 82.8237 160.815 72.1231 170 66" 
            stroke="black" 
            stroke-width="3" 
            stroke-linecap="round"/>
            </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Flask
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Degree */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    B.E 
                  </div>
                  {/* DESC */}
                  <div className="p-3 text-sm italic">
                    I successfully completed my B.E in the field of Information Science and Engineering.
                    
                    Score: 8.39 CGPA{" "}
                  </div>
                  {/* <div className="p-3 text-sm italic semi-bold">
                    Score:8.39 CGPA.{" "}
                  </div> */}
                  {/* Batch */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2023
                  </div>
                  {/* Institution */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    RNSIT
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-56">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* Degree */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    12th
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I opted for science stream and successfully cleared my High school examination.
                    
                    Score:77.8%{" "}
                  </div>
                  {/* <div className="p-3 text-sm italic semi-bold">
                    Score:77.8% .{" "}
                  </div> */}
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018-2019{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Delhi Model Public School
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    10th{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I succesfully cleared the matriculation exams.
                    
                    Score: 10 CGPA{" "}
                  </div>
                  {/* <div className="p-3 text-sm italic semi-bold">
                    Score:10 CGPA.{" "}
                  </div> */}
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016-2017{" "}
                    {/* JOB COMPANY */}
                  
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Adelaide Convent School
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
