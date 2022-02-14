import { motion } from "framer-motion";

export const Lights = ({amount}) => {
  return (
    <motion.h3 
      className="text-yellow"
      initial={{y: -20, opacity: 0}}
      animate={{y: 5, opacity: 1}}
      transition={{duration: 1, delay: 1}}
    >
      {amount}{' '}{amount === 1 ? "Light" : "Lights"}
    </motion.h3>
  );
}