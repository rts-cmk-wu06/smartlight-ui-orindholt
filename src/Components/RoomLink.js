import { Link } from "react-router-dom";

const RoomLink = ({room, icon, lights}) => {
  return (
    <li>
      <Link 
      to={room} 
      className="bg-white py-6 px-5 rounded-3xl w-[150px] h-[150px] flex flex-col justify-between shadow-md"
    >
      {icon}
      <h3>{room}</h3>
      <p className="text-orange">{lights} Lights</p>
    </Link>
    </li>
  );
}
 
export default RoomLink;