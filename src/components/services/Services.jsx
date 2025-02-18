import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 1,
    opacity: 1,

    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <motion.div
        className="services"
        initial="initial"
        variants={variants}
        // whileInView="animate"
        ref={ref}
        // animate={isInView && "animate"}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I was an software engineer enthusiast <br />
            who growth by learning
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="titleContainer"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "rebeccapurple" }}>Here</motion.b>{" "}
              are
            </h1>
          </div>
          <motion.div className="title">
            <h1>
              My{" "}
              <motion.b whileHover={{ color: "rebeccapurple" }}>
                Organization
              </motion.b>{" "}
              Experience.
            </h1>
            {/* <button>Let's See!</button> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="listContainer"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            className="box"
            whileHover={{
              backgroundColor: "rgb(156, 225, 255)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>BNCC TECHNOSCAPE 2024</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{
              backgroundColor: "rgb(117, 170, 193)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>BNCC Techno Talk 2024</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{
              backgroundColor: "rgb(117, 170, 193)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>BNCC Corporate Social Responsibility</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{
              backgroundColor: "rgb(156, 225, 255)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>HIMTI Techno Transcend Welcoming Party</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{
              backgroundColor: "rgb(117, 170, 193)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>HIMTI SEMINAR</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div
            className="box"
            whileHover={{
              backgroundColor: "rgb(156, 225, 255)",
              border: "2px solid rgb(117, 170, 193)",
            }}
          >
            <h2>HIMTI Company Visit</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
