import { useContext } from 'react';
import { BulbContext } from '../Utility/BulbContext';
import { motion } from "framer-motion";

const Color = ({color, index}) => {
  const {setColorPick} = useContext(BulbContext);
  const value = parseInt(`-${10*index/2}`);

  return (
    <motion.li
      initial={{x: value}}
      animate={{x: 0}}
      transition={{duration: 1, delay: 1}}
      datacolor={color} 
      className="w-7 h-7 rounded-full cursor-pointer" 
      style={{backgroundColor: color}}
      onClick={(e)=>{
        setColorPick(e.target.getAttribute("datacolor"));
      }}
    >
    </motion.li>
  );
}
 
export default Color;