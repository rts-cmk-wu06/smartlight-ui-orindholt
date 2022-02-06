import { useContext } from 'react';
import { ReactComponent as BulbOffIcon } from '../assets/svg/bulbOff.svg';
import { ReactComponent as BulbOnIcon } from '../assets/svg/bulbOn.svg';

const Intensity = () => {
  const [state, setState] = useContext(IntensityContext);
  return (
    <div className="flex items-center">
      <BulbOffIcon />
      <input className="w-full h-[1px] outline-none bg-darkGray appearance-none thumb mx-4" type="range" min="0" max="100" 
        onChange={(e) => setState(e.target.value)} 
      />
      <BulbOnIcon />
    </div>
  );
}
 
export default Intensity;