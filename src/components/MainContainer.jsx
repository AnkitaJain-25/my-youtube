import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSearchParams } from "react-router";

const MainContainer = () => {
  const [videoParams] = useSearchParams();

  return (
    <div className="px-4 w-full">
      <ButtonList />
      <VideoContainer params={videoParams.get("v")} />
    </div>
  );
};

export default MainContainer;
