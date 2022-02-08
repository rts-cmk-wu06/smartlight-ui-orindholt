import DetailTitle from "../Components/DetailTitle";
import Scene from "../Components/Scene";

const scenesArray = [
  {
    color: {
      default: "#FF9898",
      light: "#FFBC91"
    },
    sceneName: "Birthday"
  },
  {
    color: {
      default: "#A693EB",
      light: "#DA93EB"
    },
    sceneName: "Party"
  },
  {
    color: {
      default: "#94CAEB",
      light: "#93DDEB"
    },
    sceneName: "Relax"
  },
  {
    color: {
      default: "#94EB9E",
      light: "#BFEC92"
    },
    sceneName: "Fun"
  },
]

const Scenes = () => {
  return (
    <section>
      <DetailTitle title="Scenes" />
      <ul className="grid grid-cols-2 grid-rows-2 gap-4 text-sm">
        {scenesArray.map(({color, sceneName}, i)=>{return <Scene color={color} sceneName={sceneName} key={i} />})}
      </ul>
    </section>
  );
}
 
export default Scenes;