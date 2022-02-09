import { useContext, useEffect, useState } from 'react';
import { ReactComponent as SceneBulb } from '../assets/svg/sceneBulb.svg';
import { LampContext } from '../Utility/LampContext';

const Scene = ({color, sceneName = "undefined"}) => {
  const { setLampColor } = useContext(LampContext);
  const [crntColor, setCrntColor] = useState(null);
  useEffect(()=>{setCrntColor(color.default)}, [color]);

  return (
    <li 
      className="flex justify-center items-center text-white rounded-xl w-full h-[55px] gap-5 cursor-pointer shadow-sm" 
      style={{backgroundImage: `linear-gradient(30deg, ${color.default}, ${color.light})`}}
      onClick={()=>setLampColor(crntColor)}
    >
      <SceneBulb />
      <p>{sceneName}</p>
    </li>
  );
}
 
export default Scene;