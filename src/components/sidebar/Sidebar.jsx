import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transiton: {
      type: "spring",
      stiffness: 20,
      duration:5
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transiton: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};


function Sidebar() {
  const [open, setOpen] = useState(false);


  return (
    <>
      <motion.div className="sidebar" animate={open ? "open" : "close"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
}

export default Sidebar;
