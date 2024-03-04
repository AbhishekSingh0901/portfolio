import { motion } from "framer-motion";

function Skill({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "4rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.1, ease: "linear" }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      className={`
      bg-neutral-900 shadow-md text-neutral-200 text-4xl md:text-5xl flex flex-col justify-center items-center gap-3 w-32 h-32 md:w-48 md:h-48 rounded-full border-neutral-700 hover:shadow-xl hover:scale-110 border-4 md:border-8 transition-transform duration-300 ${className}  `}
    >
      {children}
    </motion.div>
  );
}

export default Skill;
