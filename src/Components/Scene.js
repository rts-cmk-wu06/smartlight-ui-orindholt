import { useContext, useEffect, useState } from 'react';
import { ReactComponent as SceneBulb } from '../assets/svg/sceneBulb.svg';
import { BulbContext } from '../Utility/BulbContext';

const Scene = ({color, sceneName = "undefined"}) => {
  const { setColorPick } = useContext(BulbContext);
  const [crntColor, setCrntColor] = useState(null);
  useEffect(()=>{setCrntColor(color.default)}, [color]);

  return (
    <li 
      className="flex justify-center items-center text-white rounded-xl w-full h-[55px] gap-5 cursor-pointer" 
      style={{backgroundImage: `linear-gradient(30deg, ${color.default}, ${color.light})`}}
      datacolor={color.default}
      onClick={()=>setColorPick(crntColor)}
    >
      <SceneBulb />
      <p>{sceneName}</p>
    </li>
  );
}
 
export default Scene;