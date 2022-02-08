const LightScene = ({icon, room}) => {
  return (
    <button 
      className="bg-darkBlue text-white rounded-xl flex justify-between items-center w-[140px] py-3 px-2 shadow-scene"
    >
      {icon}
      <p>{room}</p>
    </button>
  );
}
 
export default LightScene;