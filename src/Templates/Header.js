import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HeaderContent from '../Components/HeaderContent';
import Lamp from '../Components/Lamp';
import { Lights } from '../Components/Lights';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";
import { LampContext } from '../Utility/LampContext';
import LightScenes from './LightScenes';

const Header = () => {
  const { lampColor, lightAmount } = useContext(LampContext);
  const { pathname } = useLocation();

  return (
    <header className="p-6 pt-[50px] pb-0 relative">
      <Routes>
        <Route path="/" element={
          <HeaderContent>
            <PageTitle title={pathname} />
            <ProfileIcon />
          </HeaderContent>
        }/>
        <Route path="/:id" element={
          <HeaderContent>
            <div>
              <PageTitle title={pathname} />
              <Lights amount={lightAmount} />
              <LightScenes />
            </div>
            <Lamp color={lampColor} />
          </HeaderContent>
        }/>
      </Routes>
    </header>
  );
}
 
export default Header;