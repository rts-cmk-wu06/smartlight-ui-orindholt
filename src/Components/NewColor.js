import Color from "./Color";

const NewColor = ({func}) => {
  
  return (
    <button 
      onClick={()=>{func("#000000")}}
      className="w-7 h-7 rounded-full bg-white"
    >+</button>);
}
 
export default NewColor;