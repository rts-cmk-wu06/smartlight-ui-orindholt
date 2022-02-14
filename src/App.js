import {useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Header from "./Templates/Header";
import Footer from "./Templates/Footer";
import {LampContext} from "./Utility/LampContext";
import Main from "./Templates/Main";

function App() {
	const [sliderVal, setSliderVal] = useState(100);
	const [lampColor, setLampColor] = useState("white");
	const [lightAmount, setLightAmount] = useState(0);
	const {pathname} = useLocation();

	return (
		<div
			style={{
				backgroundPosition: `center top ${
					pathname.length > 2 ? "20%" : "-10%"
				}`,
			}}
			className="App 
        transition-[background-position]
        duration-1000
        max-w-sm mx-auto 
        bg-blue bg-[url('./assets/svg/circles.svg')]
        h-[100vh] 
        flex flex-col justify-between
        bg-no-repeat
        overflow-hidden"
		>
			<LampContext.Provider
				value={{
					sliderVal,
					setSliderVal,
					lampColor,
					setLampColor,
					lightAmount,
					setLightAmount,
				}}
			>
				<Header />
				<div>
					<Main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/:id" element={<Detail />} />
						</Routes>
					</Main>
					<Footer />
				</div>
			</LampContext.Provider>
		</div>
	);
}

export default App;
