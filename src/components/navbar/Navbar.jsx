import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <div className={"navbar"}>
        {/* Sidebar */}
        <Sidebar />

        {/* Navbar atas */}
        <div className={"wrapper"}>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Alicia Felisha
          </motion.span>
          <div className={"socmed"}>
            <a href="https://github.com/aliciafelishaa">
              <img src="/github1.png" alt="" />
            </a>
            <a href="https://www.instagram.com/aliciafelishaa/?hl=id">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/alicia-felisha-0b12a9284/">
              <img src="/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
