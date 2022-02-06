import { motion } from "framer-motion";

const headerContent = ({children}) => {
  const fadeVariants = {
    hidden :{opacity: 0},
    shown: {
      opacity: 1, 
      transition: {
        duration: 1
      }
    },
  }

  return (
    <motion.div
      className="flex justify-between items-center"
      variants={fadeVariants} animate="shown" initial="hidden">
      {children}
    </motion.div>
  );
}
 
export default headerContent;