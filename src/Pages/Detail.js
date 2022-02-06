import Intensity from '../Components/Intensity';
import { motion } from 'framer-motion';
import ColorPicker from '../Components/ColorPicker';
import Scenes from '../Components/Scenes';

const fadeVariants = {
  hidden :{opacity: 0},
  shown: {
    opacity: 1, 
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 0,
  }
}

const Detail = () => {
  return (
    <motion.div 
      variants={fadeVariants} animate="shown" initial="hidden" exit="exit"
      className="flex flex-col justify-between h-full pb-12"
    >
      <Intensity />
      <ColorPicker />
      <Scenes />
    </motion.div>
  );
}
 
export default Detail;