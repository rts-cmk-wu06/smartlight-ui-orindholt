import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HeaderContent from '../Components/HeaderContent';
import Lamp from '../Components/Lamp';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";
import { BulbContext } from '../Utility/BulbContext';

const Header = () => {
  const { colorPick } = useContext(BulbContext);
  const location = useLocation();
  
  return (
    <header className="p-6 pt-[60px] pb-0 relative">
      <Routes>
        <Route path="/" element={
          <HeaderContent>
            <PageTitle title={location.pathname} />
            <ProfileIcon />
          </HeaderContent>
        }/>
        <Route path="/:id" element={
          <HeaderContent>
            <PageTitle title={location.pathname} />
            <Lamp color={colorPick} />
          </HeaderContent>
        }/>
      </Routes>
    </header>
  );
}
 
export default Header;