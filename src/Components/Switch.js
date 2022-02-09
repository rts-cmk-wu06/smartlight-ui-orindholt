import { useContext } from "react";
import { LampContext } from '../Utility/LampContext';

const Icon = () => {
  const {sliderVal, setSliderVal} = useContext(LampContext);
  return (
    <button 
      className="bg-white w-8 h-8 flex justify-center items-center absolute rounded-full cursor-pointer top-[-40px] right-0 shadow-md"
      onClick={()=>{
        setSliderVal(parseInt(sliderVal) ? "0" : "100");
      }}
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.536"
      height="17.819"
      viewBox="0 0 17.536 17.819"
      >
        <path
          fill={parseInt(sliderVal) ? "#FF9898" : "#CECECE"}
          d="M14.421 1.913a8.767 8.767 0 11-10.189 0 .851.851 0 011.237.272l.559.993a.848.848 0 01-.233 1.1 5.939 5.939 0 107.067 0 .843.843 0 01-.23-1.092l.559-.993a.847.847 0 011.23-.276zm-3.676 7.421V.849A.846.846 0 009.9 0H8.765a.846.846 0 00-.849.849v8.485a.846.846 0 00.849.849H9.9a.846.846 0 00.845-.849z"
          data-name="Icon awesome-power-off"
          transform="translate(-.563)"
        ></path>
      </svg>
    </button>
  );
}

export default Icon;