const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH = (searchText) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_RESULT = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_EMBED = (videoId) =>
  `https://www.youtube.com/embed/${videoId}`;
