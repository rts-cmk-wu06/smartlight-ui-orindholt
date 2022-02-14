import { motion } from "framer-motion";
import { useState } from "react";
import Color from "../Components/Color";
import DetailTitle from "../Components/DetailTitle";
import NewColor from "../Components/NewColor";

const LampColor = () => {
  const [colors, setColors] = useState(["#FF9898","#94EB9E","#94CAEB","#A594EB","#DE94EB","#EBD094"]);
  const newColor = (color) => {
    setColors([...colors, color]);
  }
  return (
    <section>
      <DetailTitle title="Colors" />
      <motion.ul className="flex" animate={{gap: "10px"}} transition={{duration: 1, delay: 1}}>
        {colors.map((color, i)=>{return <Color color={color} key={i} index={i} />})}
        <NewColor func={newColor} />
      </motion.ul>
    </section>
  );
}
 
export default LampColor;