import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSearchParams } from "react-router";

const MainContainer = () => {
  const [params] = useSearchParams();

  return (
    <div className="px-4 w-full">
      <ButtonList />
      <VideoContainer
        searchParams={params.get("v")}
        categoryId={params.get("categoryid")}
        categoryName={params.get("categoryname")}
      />
    </div>
  );
};

export default MainContainer;
