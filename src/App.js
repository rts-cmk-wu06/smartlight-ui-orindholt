import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import LightContext from './Utility/LightContext';

function App() {
  return (
    <div className="App max-w-sm mx-auto bg-blue bg-[url('./assets/svg/circles.svg')] bg-[center_top_-4rem]">
        <Router>
          <LightContext.Provider value="context">
              <Header />
            <main className="bg-gray p-6 rounded-t-3xl">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:id" element={<Detail />} />
              </Routes>
            </main>
            <Footer />
          </LightContext.Provider>
        </Router>
    </div>
  );
}

export default App;
