import { useContext, useEffect } from 'react';
import { ReactComponent as BulbOffIcon } from '../assets/svg/bulbOff.svg';
import { ReactComponent as BulbOnIcon } from '../assets/svg/bulbOn.svg';
import { BulbContext } from '../Utility/BulbContext';
import DetailTitle from './DetailTitle';


const Intensity = () => {
  const { sliderVal, setSliderVal } = useContext(BulbContext);

  useEffect(()=>{
    setSliderVal(sliderVal);
  }, []);

  return (
    <section>
      <DetailTitle title="Intensity" />
      <div className="flex items-center">
        <BulbOffIcon className="w-10" />
        <input className="w-full h-[1px] outline-none bg-darkGray appearance-none thumb mx-4" type="range" min="0" max="100" 
          value={sliderVal ? sliderVal : 100}
          onChange={(e) => setSliderVal(e.target.value)} 
        />
        <BulbOnIcon className="w-10" />
      </div>
    </section>
  );
}
 
export default Intensity;