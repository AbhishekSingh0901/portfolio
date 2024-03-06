import { easeInOut, motion } from "framer-motion";
import AnimatedContact from "../components/ui/AnimatedContact";
import { TextField } from "@mui/material";
import Links from "../components/ui/Links";

function Contact() {
  return (
    <>
      <section className=" relative h-screen  md:p-20  p-3 px-12 overflow-hidden ">
        <motion.h2
          initial={{ opacity: 0, translateY: "-4rem" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "backInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300"
        >
          LET&apos;S CONNECT
        </motion.h2>
        <motion.div
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "80%", height: "500px" }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
          viewport={{ once: true }}
          className="z-10 mx-auto overflow-hidden h-[500px] glass-effect rounded-2xl flex justify-between items-center"
        >
          <div className="relative  bg-neutral-100 w-1/2 flex flex-col justify-start items-start gap-6 h-full p-12">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              minRows={4}
            />

            <button className=" bg-neutral-800 text-white px-6 py-3 ">
              Send Message
            </button>

            <div className="flex justify-center items-center gap-4">
              <Links textColor="text-neutral-800" iconColor="text-neural-950" />
            </div>
          </div>
          <div className=" p-6 h-full relative w-1/2">
            <AnimatedContact />
          </div>
        </motion.div>
        <footer className="py-3 absolute bottom-0 text-neutral-200 text-center w-screen bg-zinc-900 shadow-2xl shadow-black">
          <h3 className="text-md">Made with 🧡 by @Bazinga</h3>
        </footer>
      </section>
    </>
  );
}

export default Contact;
