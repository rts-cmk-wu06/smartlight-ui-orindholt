import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Main = ({children}) => {
  const { pathname }= useLocation();
  const variants = {
    initial: {height: 580, transition: {
      type: "tween",
      duration: 1
    }},
    animate: {
      height: 480, transition: {
        type: "tween",
        duration: 1
      }
    },
  }

  return (
    <motion.main 
      variants={variants}
      initial="initial"
      animate={pathname.length > 2 ? "animate" : "initial"}
      className="bg-gray p-6 rounded-t-3xl h-[580px]"
    >
      {children}
    </motion.main>
  );
}
 
export default Main;