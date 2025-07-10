const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_THUMBNAIL = (id) =>
  `https://i.ytimg.com/vi/${id}/hq720.jpg`;

export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH = (searchText) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_RESULT = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_EMBED = (videoId) =>
  `https://www.youtube.com/embed/${videoId}`;

export const CHANNEL_DETAILS = (channelId) =>
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`;

export const CHANNEL_THUMBNAIL = (channelId) =>
  `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_CATEGORIES = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_BY_CATEGORIES = (categoryId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=IN&videoCategoryId=${categoryId}&key=${GOOGLE_API_KEY}`;
