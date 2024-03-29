import Spline from "@splinetool/react-spline";
import floating from "../assets/floatingimg.png";
import { motion } from "framer-motion";

function Robot() {
  return (
    <>
      <motion.div
        initial={{ translateX: "50%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ ease: "backInOut", duration: 2, delay: 3 }}
        className="hidden md:block absolute right-4 bottom-0"
      >
        <Spline scene="https://prod.spline.design/sqLRqrvDft1vLfqG/scene.splinecode" />
      </motion.div>
      <div className="md:hidden absolute bottom-24 w-svw flex justify-center items-center mt-8">
        <img className="floating-image h-60" src={floating} />
      </div>
    </>
  );
}

export default Robot;
