import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoList from "./VideoList";

const VideoContainer = ({ params }) => {
  console.log(params);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [params]);

  const getVideos = async () => {
    let data;
    if (!params) {
      data = await fetch(YOUTUBE_VIDEOS_API);
    } else {
      data = await fetch(YOUTUBE_SEARCH_RESULT(params));
    }
    const json = await data.json();
    setVideos(json.items);
  };

  return <VideoList videos={videos} />;
};

export default VideoContainer;
