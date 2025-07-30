import { Link } from "react-router";
import VideoCard from "./VideoCard";

const VideoList = ({ videos, isResultView }) => {
  return (
    <div
      className={
        isResultView
          ? "flex flex-col"
          : "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      }
    >
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className="block">
          <VideoCard info={video} isResultView={isResultView} />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
