import { easeInOut, motion } from "framer-motion";
import { SparklesCore } from "../components/ui/sparkles";
import AnimatedContact from "../components/ui/AnimatedContact";

function Contact() {
  return (
    <>
      <section className=" relative h-screen   md:p-20 p-3 px-12 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, translateY: "-4rem" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "backInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300"
        >
          CONTACT
        </motion.h2>
        <motion.div
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "80%", height: "500px" }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto h-[500px] glass-effect rounded-2xl flex justify-around items-center"
        >
          <div></div>
          <AnimatedContact />
        </motion.div>
      </section>
      <footer className="py-3 text-neutral-200 text-center w-screen bg-zinc-900 shadow-2xl shadow-black">
        <h3 className="text-md">Made with 🧡 by @Bazinga</h3>
      </footer>
    </>
  );
}

export default Contact;
