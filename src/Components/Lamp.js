import { motion } from "framer-motion";
import { useContext } from "react";
import { LampContext } from '../Utility/LampContext';

const Lamp = ({color}) => {
  const {sliderVal} = useContext(LampContext);

  return (
    <motion.svg
      animate={{y: 30}}
      transition={{duration: 1, delay: 1}}
      className="absolute top-[-30px] right-6"
      xmlns="http://www.w3.org/2000/svg"
      width="139"
      height="159"
      viewBox="0 0 139 159"
    >
      <defs>
        {/* LIGHT BULB GLOW */}
        <filter
          id="Ellipse_10"
          width="70"
          height="70"
          x="35"
          y="89"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="8"></feGaussianBlur>
          <feFlood floodColor={color} floodOpacity={sliderVal/100}></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        {/* LIGHT BULB GLOW END */}
      </defs>

      {/* LIGHT BULB */}
      <g data-name="light bulb" transform="translate(-204 4)">
        <g filter="url(#Ellipse_10)" transform="translate(204 -4)">
          <circle
            cx="11"
            cy="11"
            r="11"
            fill={color}
            style={{filter: `brightness(${sliderVal}%)`}}
            data-name="Ellipse 10"
            transform="translate(59 110)"
          ></circle>
        </g>
        <path
          fill="#fff"
          d="M30.334 1.617h79.054c3.314 0 4.206 2.324 6 6L139 62a6 6 0 01-6 6H6a6 6 0 01-6-6L24.334 7.617c1.503-3.38 2.686-6 6-6z"
          data-name="Path 100"
          transform="translate(204 52)"
        ></path>
        <path
          fill="#fff"
          d="M0 0H5V102H0z"
          data-name="Rectangle 13"
          transform="translate(271 -4)"
        ></path>
        <rect
          width="4"
          height="58"
          fill="#568bd0"
          data-name="Rectangle 14"
          opacity="0.151"
          rx="2"
          transform="rotate(-23 296.938 -716.633)"
        ></rect>
      </g>
      {/* LIGHT BULB END */}
    </motion.svg>
  );
}

export default Lamp;