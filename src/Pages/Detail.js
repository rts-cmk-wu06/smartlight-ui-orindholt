import { useParams } from 'react-router-dom';
import Intensity from '../Components/Intensity';

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h2>Intensity</h2>
      <Intensity />
    </>
  );
}
 
export default Detail;