import { useEffect, useRef, useState } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import music from "../assets/music.mp3";
import Robot from "../components/Robot";
import Links from "../components/ui/Links";

// import Navbar from "../components/Navbar";

function Homepage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      console.log(audioRef.current);
      audioRef.current.pause();
    } else {
      console.log(audioRef.current);
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative mb-20 text-2xl md:text-4xl h-screen flex pt-16 md:pt-24 before:bg-neutral-900 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-50 homepage">
      <div className="z-10">
        <div className="mx-8 md:ml-20 lg:ml-28 mt-14 md:mt-20 text-neutral-300">
          <motion.h3
            initial={{ translateX: "-3rem", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "backInOut", duration: 1, delay: 3 }}
            viewport={{ once: true }}
          >
            Hello!
          </motion.h3>
          <motion.h1
            initial={{ translateX: "-3rem", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "backInOut", duration: 1, delay: 3.5 }}
            viewport={{ once: true }}
            className="border-b-8 border-neutral-300 w-full text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 bg-clip-text text-3xl md:text-7xl lg:text-8xl pb-4 mb-4"
          >
            I am <span className="text-animation">Abhishek Singh</span>
          </motion.h1>
          <motion.h4
            initial={{ translateX: "-3rem", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "backInOut", duration: 1, delay: 4 }}
            viewport={{ once: true }}
          >
            React Frontend Web Developer
          </motion.h4>

          <motion.button
            initial={{ translateY: "3rem", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ ease: "backInOut", duration: 1, delay: 4 }}
            viewport={{ once: true }}
            className=" text-white font-thin text-xl glass-effect py-3 px-6 mt-9 "
          >
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              viewport={{ once: true }}
            >
              Get Resume
            </motion.p>
          </motion.button>
        </div>
        <div className=" absolute bottom-8 md:left-2 w-full md:w-fit flex justify-center md:flex-col  gap-4">
          <Links />
          <div
            className="glass-effect flex justify-center items-center p-3 rounded-full"
            onClick={togglePlayPause}
          >
            <audio ref={audioRef} src={music} loop />
            <button className={`icon-rounded ${isPlaying ? "playing" : ""}`}>
              {isPlaying ? (
                <IoPauseOutline color=" #b4b4b4" />
              ) : (
                <IoPlayOutline color=" #b4b4b4" />
              )}
            </button>
          </div>
        </div>
        <Robot />
      </div>
    </section>
  );
}

export default Homepage;
