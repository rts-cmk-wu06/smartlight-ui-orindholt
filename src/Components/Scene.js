import { ReactComponent as SceneBulb } from '../assets/svg/sceneBulb.svg';

const Scene = ({color, sceneName = "undefined"}) => {
  console.log(color);
  return (
    <li 
      className="flex justify-center items-center text-white rounded-xl w-full h-[55px] gap-5 cursor-pointer" 
      style={{backgroundImage: `linear-gradient(to bottom, ${color.default}, ${color.light})`}}
    >
      <SceneBulb />
      <p>{sceneName}</p>
    </li>
  );
}
 
export default Scene;