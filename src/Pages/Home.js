import {ReactComponent as BedIcon} from "../assets/svg/bed.svg";
import {ReactComponent as LivingRoomIcon} from "../assets/svg/living.svg";
import {ReactComponent as KitchenIcon} from "../assets/svg/kitchen.svg";
import {ReactComponent as BathIcon} from "../assets/svg/bathroom.svg";
import {ReactComponent as OutdoorIcon} from "../assets/svg/outdoor.svg";
import {ReactComponent as BalconyIcon} from "../assets/svg/balcony.svg";
import RoomLink from "../Components/RoomLink";
import {motion} from "framer-motion";

const roomArray = [
	{
		room: "Bed Room",
		icon: <BedIcon />,
		lights: 4,
	},
	{
		room: "Living Room",
		icon: <LivingRoomIcon />,
		lights: 2,
	},
	{
		room: "Kitchen",
		icon: <KitchenIcon />,
		lights: 5,
	},
	{
		room: "Bathroom",
		icon: <BathIcon />,
		lights: 1,
	},
	{
		room: "Outdoor",
		icon: <OutdoorIcon />,
		lights: 5,
	},
	{
		room: "Balcony",
		icon: <BalconyIcon />,
		lights: 2,
	},
];

const fadeVariants = {
	hidden: {opacity: 0},
	shown: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const Home = () => {
	return (
		<motion.div
			variants={fadeVariants}
			animate="shown"
			initial="hidden"
			className="flex flex-col gap-2 h-full"
		>
			<h2>All Rooms</h2>
			<nav>
				<ul className="flex flex-wrap justify-between gap-y-6">
					{roomArray.map(({room, icon, lights}, i) => {
						return <RoomLink key={i} room={room} icon={icon} lights={lights} />;
					})}
				</ul>
			</nav>
		</motion.div>
	);
};

export default Home;
