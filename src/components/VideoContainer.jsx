import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_RESULT,
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEO_BY_CATEGORIES,
} from "../utils/constants";
import VideoList from "./VideoList";
import ShimmerList from "./ShimmerList";
import ErrorPage from "./ErrorPage";

const VideoContainer = ({ searchParams, categoryId, categoryName }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const isResultView = !!(searchParams || categoryId);

  useEffect(() => {
    setVideos([]);
    getVideos();
  }, [searchParams, categoryId]);

  const getVideos = async () => {
    setError(false);
    let apiUrl;
    if (searchParams) {
      apiUrl = YOUTUBE_SEARCH_RESULT(searchParams);
    } else if (categoryId) {
      apiUrl = YOUTUBE_VIDEO_BY_CATEGORIES(categoryId);
    } else {
      apiUrl = YOUTUBE_VIDEOS_API;
    }

    if (!apiUrl) {
      setError(true);
      return;
    }

    const data = await fetch(apiUrl);
    const json = await data?.json();
    if (!json?.items?.length) {
      setError(true);
      return;
    }
    setVideos(json.items);
  };

  if (error) {
    return <ErrorPage errorMessage={"No valid videos found"} />;
  }

  if (!videos.length) {
    return <ShimmerList count={12} />;
  }
  return <VideoList videos={videos} isResultView={isResultView} />;
};

export default VideoContainer;
