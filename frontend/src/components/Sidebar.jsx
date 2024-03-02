import { Drawer } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Sidebar({ toggleState, setToggleState }) {
  return (
    <Drawer anchor={"right"} open={toggleState}>
      <motion.div className="relative w-[80vw] h-screen bg-neutral-800 text-3xl pt-20 text-neutral-200 flex flex-col gap-6 ">
        <button className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105">
          <IoCloseOutline onClick={() => setToggleState(false)} />
        </button>
        <NavLink
          to="/home"
          className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105"
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105"
        >
          Skills
        </NavLink>
        <NavLink
          to="/project"
          className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105"
        >
          Work
        </NavLink>
        <NavLink className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105">
          Testimonials
        </NavLink>
        <NavLink className="mx-6 py-2 rounded-md hover:bg-neutral-700 bg-opacity-5 transition-all duration-100 active:scale-105">
          Contact
        </NavLink>
      </motion.div>
    </Drawer>
  );
}

export default Sidebar;
