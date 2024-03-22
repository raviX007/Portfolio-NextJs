"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from '../styles.module.css';

const items = [
  // {
  //   id: 1,
  //   color: "from-red-300 to-blue-300",
  //   title: "AI chat chrome extension",
  //   desc: "This is a chrome extension developed using Plasmo which provides us the functionalities of ChatGpt like AI chat services by using HuggingFace API in NextJS backend. The user can input their query in the extension and the query will be sent to backend where its response is generated using hugging face API call. After that the response is sent back to user and it is displayed in the extension",
  //   img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
   
  // },
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    title: "User Management Application",
    desc: "This is Web Application developed using NextJs for developing UI and NodeJs is used for Backend along with MongoDB. It helps us to add , edit and delete user information .It also has a feature of selection of multiple rows and sending them over mail in a tabular form",
    img: "/userM.png",
    link: "https://user-management-client.netlify.app/"
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    title: "Employee Management System",
    desc: "This is a simple web based application developed using React.js and Node.js that maintains user information in a table and allows them to perform actions like create, update and delete.",    
    img: "/empM.png",
    link:"https://65fc7be33365df5cbf4aec4b--tiny-baklava-07327d.netlify.app/"
   
  },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Online Music App",
  //   desc: "This project is a basic clone of the music playing application Spotify which gives us some features such as playing songs, moving next or previous, etc",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> */}
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-l font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-56 lg:w-[400px] lg:h-[350px] xl:w-[600px] xl:h-[220px]">
                  <Image src={item.img} alt="Employee Management System" layout="fill" objectFit="contain" className="rounded-lg" />

                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;