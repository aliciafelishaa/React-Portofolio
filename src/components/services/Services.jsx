import { motion } from "framer-motion";
import "./services.scss";

function Services() {
  return (
    <>
      <motion.div className="services">
        <motion.div className="textContainer">
          <p>
            I was an software engineer enthusiast <br />
            who growth by learning
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer">
          <div className="title">
            <h1>
              <b>Here</b> are
            </h1>
          </div>
          <div className="title">
            <h1>
              My <b>Organization</b> Experience.
            </h1>
            <button>Let's Take A Look!</button>
          </div>
        </motion.div>
        <motion.div className="listContainer">
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <motion.h2 >TechnoScape Event</motion.h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <h2>BNCC Techno Talk 2024</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <h2>BNCC Corporate Social Responsibility</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <h2>HIMTI Techno Transcend Welcoming Party</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <h2>HIMTI SEMINAR</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
          <motion.div className="box" whileHover={{backgroundColor:"rgb(29, 14, 44)", border:"2px solid rgb(29, 14, 44)"}}>
            <h2>HIMTI Company Visit</h2>
            {/* <button>My contributions</button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
