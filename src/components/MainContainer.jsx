import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSearchParams } from "react-router";

const MainContainer = () => {
  const [params] = useSearchParams();

  return (
    <div className="w-full px-4">
      <ButtonList />
      <VideoContainer
        searchParams={params.get("v")}
        categoryId={params.get("category")}
      />
    </div>
  );
};

export default MainContainer;
