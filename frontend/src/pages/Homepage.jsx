import { useRef, useState } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import music from "../assets/music.mp3";
import Robot from "../components/Robot";

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
    <div className="relative text-3xl md:text-4xl h-screen flex pt-16 md:pt-24 before:bg-neutral-900 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-50 homepage">
      <div className="z-10">
        <div className="mx-8 md:ml-20 lg:ml-28 mt-20 text-neutral-300">
          <h3>Hello!</h3>
          <h1 className="border-b-8 border-neutral-300 w-full text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 bg-clip-text text-5xl md:text-7xl lg:text-8xl pb-4 mb-4">
            I am <span className="text-animation">Abhishek Singh</span>
          </h1>
          <h4>React Frontend Web Developer</h4>

          <button className=" text-white font-thin text-xl glass-effect py-3 px-6 mt-9 hover:scale-105 active:scale-100 transition-transform ease-in-out duration-100">
            Get Resume
          </button>
        </div>
        <div className=" absolute bottom-8 md:left-2 w-full md:w-fit flex justify-center md:flex-col  gap-4">
          <div className="glass-effect flex justify-center items-center p-3 rounded-full">
            <button className="icon-rounded">
              <RiLinkedinLine />
            </button>
          </div>
          <div className="glass-effect flex justify-center items-center p-3 rounded-full">
            <button className="icon-rounded">
              <VscGithubAlt />
            </button>
          </div>
          <div className="glass-effect flex justify-center items-center p-3 rounded-full">
            <button className="icon-rounded">
              <FaXTwitter />
            </button>
          </div>
          <div className="glass-effect flex justify-center items-center p-3 rounded-full">
            <button className="icon-rounded">
              <SiLeetcode />
            </button>
          </div>
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
    </div>
  );
}

export default Homepage;
