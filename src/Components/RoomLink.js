import { Link } from "react-router-dom";

const RoomLink = ({room, icon, lights}) => {
  return (
    <Link 
      to={room.toLowerCase().replace(" ", "")} 
      className="bg-white py-6 px-5 rounded-3xl w-[150px] h-[150px] flex flex-col justify-between"
    >
      {icon}
      <p>{room}</p>
      <p className="text-orange">{lights} Lights</p>
    </Link>
  );
}
 
export default RoomLink;