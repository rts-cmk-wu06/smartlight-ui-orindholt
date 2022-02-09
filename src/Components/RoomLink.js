import { useContext } from "react";
import { Link } from "react-router-dom";
import { LampContext } from '../Utility/LampContext';

const RoomLink = ({room, icon, lights}) => {
  const { setLightAmount } = useContext(LampContext);

  return (
    <li>
      <Link 
      onClick={()=>setLightAmount(lights)}
      to={room} 
      className="bg-white py-6 px-5 rounded-3xl w-[150px] h-[150px] flex flex-col justify-between shadow-md"
    >
      {icon}
      <h3>{room}</h3>
      <p className="text-orange">{lights}{' '}{lights == 1 ? "Light" : "Lights"}</p>
    </Link>
    </li>
  );
}
 
export default RoomLink;