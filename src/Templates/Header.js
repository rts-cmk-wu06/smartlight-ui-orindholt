import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HeaderContent from '../Components/HeaderContent';
import Lamp from '../Components/Lamp';
import { Lights } from '../Components/Lights';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";
import { BulbContext } from '../Utility/BulbContext';
import LightScenes from './LightScenes';

const Header = () => {
  const { colorPick, lightAmount } = useContext(BulbContext);
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
            <Lamp color={colorPick} />
          </HeaderContent>
        }/>
      </Routes>
    </header>
  );
}
 
export default Header;