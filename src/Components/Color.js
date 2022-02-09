import { useContext, useState, useEffect } from 'react';
import { LampContext } from '../Utility/LampContext';
import { motion } from "framer-motion";

const Color = ({color, index}) => {
  const {setLampColor} = useContext(LampContext);
  const [crntColor, setCrntColor] = useState(null);
  const value = parseInt(`-${10*index/2}`);
  useEffect(()=>{setCrntColor(color)}, [color]);

  return (
    <motion.li
      initial={{x: value}}
      animate={{x: 0}}
      transition={{duration: 1, delay: 1}}
      className="w-7 h-7 rounded-full cursor-pointer shadow-sm" 
      style={{backgroundColor: color}}
      onClick={()=>setLampColor(crntColor)}
    >
    </motion.li>
  );
}
 
export default Color;