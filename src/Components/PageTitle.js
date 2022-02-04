import { ReactComponent as ArrowIcon } from '../assets/svg/arrow.svg';
import { Link, useParams } from 'react-router-dom';

const PageTitle = () => {
  const { id } = useParams();
  
  return (
    <h1 className="text-3xl text-white max-w-[160px] ">
      {id ? <Link to="/"><ArrowIcon className="inline" />{' '}{id}</Link> : "Control Panel"}
    </h1>
  );
}
 
export default PageTitle;