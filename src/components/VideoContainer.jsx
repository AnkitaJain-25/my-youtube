import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoList from "./VideoList";
import ShimmerList from "./ShimmerList";

const VideoContainer = ({ params }) => {
  const [videos, setVideos] = useState([]);
  const isSearchView = !!params;

  useEffect(() => {
    setVideos([]);
    getVideos();
  }, [params]);

  const getVideos = async () => {
    const apiUrl = params ? YOUTUBE_SEARCH_RESULT(params) : YOUTUBE_VIDEOS_API;
    const data = await fetch(apiUrl);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos.length) {
    return <ShimmerList count={12} />;
  }
  return <VideoList videos={videos} isSearchView={isSearchView} />;
};

export default VideoContainer;
