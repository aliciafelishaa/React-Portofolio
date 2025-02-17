import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    oppacity: 0,
  },

  animate: {
    x: 0,
    oppacity: 1,

    transition:{
        duration:1.3,
        staggerChildren:0.1
    }
  },

  scrollButton:{
    oppacity:0,
    y:10,

    transition:{
        duration:2,
        repeat:Infinity
    }
  }
};

const sliderVariants = {
    initial: {
      x: 0,
    },
  
    animate: {
      x: "-220%",
      
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:10
      }
    }
  };

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>ALICIA FELISHA</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer and UI Designer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button variants={textVariants}>See my Latest Magichand Creation!</motion.button>
              <motion.button variants={textVariants} className="btn2">Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
          </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial"animate="animate"  >Software Engineer Enthusiast</motion.div>
        <div className="imageContainer">
          <img src="./photohero2.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
