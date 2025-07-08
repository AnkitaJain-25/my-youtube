import { Link } from "react-router";
import VideoCard from "./VideoCard";

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className="block">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
