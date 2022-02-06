import { ReactComponent as ArrowIcon } from '../assets/svg/arrow.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageTitle = ({ title }) => {
  const fixedPath = title.replace("%20", " ").replace("/", "");
  
  return (
    <motion.h1 
      className="text-3xl text-white max-w-[160px]"
    >
      {fixedPath ? <Link to="/"><ArrowIcon className="inline" />{' '}{fixedPath}</Link> : "Control Panel"}
    </motion.h1>
  );
}
 
export default PageTitle;