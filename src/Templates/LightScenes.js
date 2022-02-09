import { ReactComponent as Bulb } from '../assets/svg/sceneBulb.svg';
import { ReactComponent as Desk } from '../assets/svg/deskIcon.svg';
import { ReactComponent as Bed } from '../assets/svg/bedIcon.svg';

import { LampContext } from '../Utility/LampContext';
import { useContext, useEffect, useState } from 'react';
import LightScene from "../Components/LightScene"
import { motion } from "framer-motion";

const scenes = [
  {
    icon: <Bulb />,
    room: "Main Light"
  },
  {
    icon: <Desk />,
    room: "Desk Lights"
  },
  {
    icon: <Bed />,
    room: "Bed Lights"
  }
]

const LightScenes = () => {
  const { lightAmount } = useContext(LampContext);
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{setLoaded(true)}, 1000);
  }, []);

  return (
    loaded && <motion.div
      className="flex gap-4 overflow-x-auto py-2 mt-4"
      initial={{x: "100vw"}} animate={{x:0}} transition={{duration: 1, ease: "easeOut"}}
    >
      {scenes.map(({icon, room}, i)=>{
        if(i >= lightAmount) return null
        return <LightScene room={room} icon={icon} key={i} />
      })}
    </motion.div>
  );
}
 
export default LightScenes;