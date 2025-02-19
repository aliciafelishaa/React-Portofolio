import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portofolio.scss";

const items = [
  {
    id: 1,
    title: "My Portfolio Website",
    img: "./portofolioimage.jpg",
    desc: "A personal portfolio website showcasing my best projects.",
  },
  {
    id: 2,
    title: "WeCan",
    img: "./images.jpeg",
    desc: "A mental wellness application that helps users share stories, receive advice, and track their mental well-being.",
  },
  {
    id: 3,
    title: "Redesign Ashpatl Rejends",
    img: "./images.jpeg",
    desc: "A UI/UX redesign project for a digital platform with improved navigation and aesthetics.",
  },
  {
    id: 4,
    title: "Chipi Chapa Front End",
    img: "./images.jpeg",
    desc: "Developing the user interface for an e-commerce platform using React.js and Tailwind CSS.",
  },
  {
    id: 5,
    title: "Hackathon Technoscape",
    img: "./images.jpeg",
    desc: "A Technoscape BNCC Hackathon project focused on innovative technology-based solutions.",
  },
  {
    id: 6,
    title: "Final Project TPM BNCC",
    img: "./images.jpeg",
    desc: "The final project in TPM BNCC, developing a collaborative website with back-end and UI/UX teams.",
  },
  {
    id: 7,
    title: "Mini Project TPM BNCC",
    img: "./images.jpeg",
    desc: "A mini project in TPM BNCC focusing on UI design implementation using HTML, CSS, and JavaScript.",
  },
  {
    id: 8,
    title: "Chipi Chapa Admin Dashboard",
    img: "./images.jpeg",
    desc: "Creating an admin dashboard for monitoring data and transactions in an e-commerce system.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]); 

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portofolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div className="portofolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portofolio;
