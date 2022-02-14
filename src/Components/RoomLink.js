import {useContext} from "react";
import {Link} from "react-router-dom";
import {LampContext} from "../Utility/LampContext";
import * as Sentry from "@sentry/react";
import Fallback from "../Components/Fallback";

const RoomLink = ({room, icon, lights}) => {
	return (
		<li className="bg-white rounded-3xl w-[150px] h-[150px] shadow-md">
			<Sentry.ErrorBoundary fallback={() => <Fallback room={room} />}>
				<Link
					to={`${room}/?lights=${lights}`}
					className="flex flex-col justify-between py-6 px-5 h-full"
				>
					{icon}
					<h3>{room}</h3>
					<p className="text-orange">
						{lights} {lights === 1 ? "Light" : "Lights"}
					</p>
				</Link>
			</Sentry.ErrorBoundary>
		</li>
	);
};

export default RoomLink;
