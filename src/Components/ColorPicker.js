import { motion } from "framer-motion";
import Color from "./Color";
import DetailTitle from "./DetailTitle";
import NewColor from "./NewColor";

const standardColors = [
  "#FF9898",
  "#94EB9E",
  "#94CAEB",
  "#A594EB",
  "#DE94EB",
  "#EBD094"
]

const ColorPicker = () => {
  return (
    <section>
      <DetailTitle title="Colors" />
      <motion.ul className="flex" animate={{gap: "10px"}} transition={{duration: 1, delay: 1}}>
        {standardColors.map((color, i)=>{return <Color color={color} key={i} index={i} />})}
        <NewColor />
      </motion.ul>
    </section>
  );
}
 
export default ColorPicker;