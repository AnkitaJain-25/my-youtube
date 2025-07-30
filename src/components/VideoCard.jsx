import { useEffect, useState } from "react";
import {
  CHANNEL_THUMBNAIL,
  YOUTUBE_EMBED,
  YOUTUBE_THUMBNAIL,
} from "../utils/constants";

const VideoCard = ({ info, isResultView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [channelThumbnail, setChannelThumbnail] = useState(null);
  const { snippet, statistics, id } = info;
  const { channelTitle, title, channelId, description } = snippet;

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(CHANNEL_THUMBNAIL(channelId));
    const json = await data.json();
    setChannelThumbnail(json.items[0].snippet.thumbnails.default);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${Math.round(num / 1000)}K`;
    } else {
      return num.toString();
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full pb-2 ${
        isResultView
          ? "flex flex-col gap-3 border-b border-gray-300 pb-4 md:flex-row"
          : "flex flex-col"
      }`}
    >
      <div
        className={`relative ${
          isResultView ? "w-full flex-shrink-0 md:w-1/3" : "w-full"
        } aspect-video overflow-hidden bg-black transition-all duration-500 ease-in-out ${
          isHovered ? "rounded-none" : "rounded-lg"
        }`}
      >
        <img
          alt="thumbnail"
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          src={YOUTUBE_THUMBNAIL(id)}
        />
        {isHovered && (
          <>
            <iframe
              className={`absolute top-0 left-0 h-full w-full transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              src={YOUTUBE_EMBED(id) + "?&autoplay=1&mute=1&controls=0"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            {/* Transparent overlay when hovered to redirect to the watch page */}
            <div className="absolute top-0 left-0 z-10 h-full w-full cursor-pointer"></div>
          </>
        )}
      </div>

      <div className="flex gap-2 py-3">
        <img
          className="h-10 rounded-full"
          alt="channel-thumbnail"
          src={channelThumbnail?.url}
        />
        <div className="leading-5">
          <div className="pb-2 text-[1rem] font-medium">{title}</div>
          <div className="flex flex-col font-sans text-[0.9rem] text-gray-700">
            <span>{channelTitle}</span>
            <span>{formatNumber(statistics.viewCount)} views</span>
          </div>
          {isResultView && <p className="line-clamp-1">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
