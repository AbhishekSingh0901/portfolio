import { motion } from "framer-motion";

function Contact() {
  return (
    <section className=" relative  mb-24 md:p-20 p-3 px-12 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, translateY: "-4rem" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "backInOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 text-4xl md:text-6xl pb-2 font-medium mb-12 text-animation border-b-2 border-neutral-300"
      >
        CONTACT
      </motion.h2>
    </section>
  );
}

export default Contact;
