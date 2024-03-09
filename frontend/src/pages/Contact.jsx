import { easeInOut, motion } from "framer-motion";
import AnimatedContact from "../components/ui/AnimatedContact";
import { TextField } from "@mui/material";
import Links from "../components/ui/Links";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className=" relative h-screen  md:p-20 py-24 md:px-12 overflow-hidden "
      >
        <motion.div
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "80%", height: "90%" }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.6 }}
          viewport={{ once: true }}
          className=" mx-auto overflow-hidden h-2/3 glass-effect rounded-2xl flex justify-between items-center"
        >
          <div className="relative  bg-neutral-100 w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 h-full p-6">
            <motion.h2
              initial={{ opacity: 0, translateY: "-4rem" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "backInOut" }}
              viewport={{ once: true }}
              className=" w-full text-4xl md:text-5xl pb-2 font-medium mb-3 text-animation border-b-2 border-neutral-300"
            >
              LET&apos;S CONNECT
            </motion.h2>
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
              minRows={2}
            />

            <button className=" bg-neutral-800 text-white px-6 py-3 ">
              Send Message
            </button>
          </div>
          <div className=" hidden lg:block p-6 h-full relative w-1/2">
            <AnimatedContact />
            <div className="flex flex-col justify-center h-full w-full items-end gap-4">
              <Links textColor="text-neutral-800" iconColor="text-neural-950" />
            </div>
          </div>
        </motion.div>
      </section>
      <footer className="py-3 absolute bottom-0 text-neutral-200 text-center w-screen bg-zinc-900 shadow-2xl shadow-black">
        <h3 className="text-md">Made with 🧡 by @Bazinga</h3>
      </footer>
    </>
  );
}

export default Contact;
