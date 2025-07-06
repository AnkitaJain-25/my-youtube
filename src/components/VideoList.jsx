import { Link } from "react-router";
import VideoCard from "./VideoCard";

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="p-2 shadow-lg">
          <Link to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
