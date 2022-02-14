import {BsFillLightbulbOffFill} from "react-icons/bs";

const Error = ({room}) => {
	console.log(room);
	return (
		<aside className="flex flex-col w-full h-full items-center justify-between text-center px-2 py-6">
			<BsFillLightbulbOffFill className="text-2xl" />
			<p className="text-sm">
				{room ? room : "This room"} is currently unavailable
			</p>
		</aside>
	);
};

export default Error;
