import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

const MainContainer = () => {
  const [videoParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={isMenuOpen ? "w-[calc(100%-12rem)]" : "w-full"}>
      <ButtonList />
      <VideoContainer params={videoParams.get("v")} />
    </div>
  );
};

export default MainContainer;
