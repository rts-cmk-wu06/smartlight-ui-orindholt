import { Route, Routes } from 'react-router-dom';
import Lamp from '../Components/Lamp';
import PageTitle from '../Components/PageTitle';
import ProfileIcon from "../Components/ProfileIcon";

const Header = () => {
  
  return (
    <div className="flex justify-between items-center p-6">
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
    </div>
  );
}
 
export default Header;