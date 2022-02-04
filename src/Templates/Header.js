import { Route, Routes } from 'react-router-dom';
import Lamp from '../Components/Lamp';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";

const Header = () => {
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
            <Lamp color="green" />
          </>
        }/>
      </Routes>
    </header>
  );
}
 
export default Header;