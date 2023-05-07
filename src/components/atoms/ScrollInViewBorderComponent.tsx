import { motion } from "framer-motion";

export default function ScrollInViewBorder() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 2 },
      }}
      className={`w-full border-b-2 border-white`}
    ></motion.div>
  );
}
