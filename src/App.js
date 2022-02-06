import { useState } from 'react';
import { Route, Routes , useLocation} from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import { BulbContext } from './Utility/BulbContext';
import Main from './Templates/Main';

function App() {
  const [sliderVal, setSliderVal] = useState(100);
  const [colorPick, setColorPick] = useState("white");
  const location = useLocation();

  return (
    <div 
      className={`App 
        transition-[background-position]
        duration-1000
        max-w-sm mx-auto 
        bg-blue bg-[url('./assets/svg/circles.svg')] bg-[center_top_${location.pathname.length > 2 ? "-6rem" : "-4rem"}] 
        h-[800px] 
        flex flex-col justify-between`}
    >
        <BulbContext.Provider value={{sliderVal, setSliderVal, colorPick, setColorPick}}>
          <Header />
          <div>
            <Main>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:id" element={<Detail />} />
              </Routes>
            </Main>
            <Footer />
          </div>
        </BulbContext.Provider>
    </div>
  );
}

export default App;
