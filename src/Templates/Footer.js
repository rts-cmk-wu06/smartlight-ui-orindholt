import { Link } from 'react-router-dom';
import { ReactComponent as BulbIcon } from '../assets/svg/bulb.svg';
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';

const linkArray = [
  {
    icon: <BulbIcon />,
    path: "/detail"
  },
  {
    icon: <HomeIcon />,
    path: "/"
  },
  {
    icon: <SettingsIcon />,
    path: "/settings"
  }
]

const Footer = () => {
  return (
    <footer className="flex justify-evenly bg-white p-5">
      {linkArray.map((obj, i)=>{
        return <Link key={i} to={obj.path}>{obj.icon}</Link>
      })}
    </footer>
  );
}
 
export default Footer;