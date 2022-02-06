import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lamp from '../Components/Lamp';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";
import LightContext from './Utility/LightContext';


const Header = () => {
  const context = useContext(LightContext);
  const [sliderVal, setSliderVal] = useState(null);
  console.log(context);
  return (
    <header className="flex justify-between items-center p-6 pt-[60px] relative">
      <Routes>
        <Route path="/" element={
          <>
            <PageTitle />
            <ProfileIcon />
          </>
        }/>
        <Route path="/:id" element={
          <>
            <PageTitle />
            <Lamp color={""} />
          </>
        }/>
      </Routes>
    </header>
  );
}
 
export default Header;