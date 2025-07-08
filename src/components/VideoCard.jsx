import { useEffect, useState } from "react";
import {
  CHANNEL_THUMBNAIL,
  YOUTUBE_EMBED,
  YOUTUBE_THUMBNAIL,
} from "../utils/constants";

const VideoCard = ({ info }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [channelThumbnail, setChannelThumbnail] = useState(null);
  const { snippet, statistics, id } = info;
  const { channelTitle, title, channelId } = snippet;

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
      className="relative pb-2"
    >
      <div
        className={`w-full aspect-video relative bg-black transition-all overflow-hidden duration-500 ease-in-out ${
          isHovered ? "rounded-none" : "rounded-lg"
        }`}
      >
        <img
          alt="thumbnail"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          src={YOUTUBE_THUMBNAIL(id)}
        />
        {isHovered && (
          <>
            <iframe
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              src={YOUTUBE_EMBED(id) + "?&autoplay=1&mute=1&controls=0"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            {/* Transparent overlay when hovered to redirect to the watch page */}
            <div className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"></div>
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
          <div className="text-[1rem] font-medium pb-2">{title}</div>
          <div className="text-gray-700 text-[0.9rem] font-sans flex flex-col">
            <span>{channelTitle}</span>
            <span>{formatNumber(statistics.viewCount)} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
