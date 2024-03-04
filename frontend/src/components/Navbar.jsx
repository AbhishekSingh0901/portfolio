import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ translateY: "-3rem", opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ ease: "backInOut", duration: 1, delay: 0.8 }}
        className="z-40 navbar fixed top-0 left-0 bottom-0 right-0 h-16 m-3 px-5 glass-effect rounded-2xl  text-neutral-300 flex justify-between lg:justify-around items-center "
      >
        <h2 className=" text-lg md:text-2xl">&lt;PORTFOLIO/&gt;</h2>
        <ul className="hidden list-none lg:flex justify-center gap-8 uppercase">
          <li>Home</li>
          <li>About</li>
          <li>skills</li>
          <li>work</li>
          <li>testimonials</li>
          <li>contact</li>
        </ul>
        <div
          onClick={() => setToggleState(true)}
          className="p-2 rounded-full hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105 cursor-pointer"
        >
          <AiOutlineMenu className="text-lg md:text-2xl lg:hidden" />
        </div>
        <Sidebar toggleState={toggleState} setToggleState={setToggleState} />
      </motion.nav>
    </>
  );
}

export default Navbar;
