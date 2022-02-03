import { useParams } from 'react-router-dom';

const PageTitle = () => {
  const { id } = useParams();
  return <h1 className="text-3xl text-white">{id ? id : "Control Panel"}</h1>
}
 
export default PageTitle;