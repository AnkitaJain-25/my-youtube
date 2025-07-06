import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router";
import useOutsideClick from "../hooks/useOutsideClick";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const searchCache = useSelector((store) => store.search);

  useOutsideClick(wrapperRef, () => setShowSuggestions(false));

  useEffect(() => {
    // make an api call after each key press
    // but if the difference between 2 API calls is <200ms then decline the API call
    if (!searchQuery) return;
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH(searchQuery));
    const json = await data.json();
    setSuggestions(json.items);
    dispatch(
      cacheResult({
        [searchQuery]: json.items,
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-1.5 items-center">
      <div className="flex col-span-1">
        <button
          onClick={() => toggleMenuHandler()}
          className="py-1 px-4 cursor-pointer"
        >
          <FaBars size={24} />
        </button>
        <Link to="/">
          <img className="h-8 p-1 pl-2" alt="youtube-logo" src={YOUTUBE_LOGO} />
        </Link>
      </div>
      <div className="col-span-10 flex justify-center w-full">
        <div className="relative w-1/2" ref={wrapperRef}>
          <input
            placeholder="Search"
            className="border border-gray-300 rounded-l-full w-full p-1 pl-4"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && searchQuery && (
            <div className="absolute bg-white p-2 w-full rounded-lg shadow-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s.etag}
                    className="p-2 pl-4 rounded-lg flex gap-4 items-center hover:bg-gray-200"
                  >
                    <Link
                      to={`/result?v=${s.id.videoId}`}
                      onClick={() => setShowSuggestions(false)}
                    >
                      <FiSearch color="gray" />
                      <span className="text-sm">{s.snippet.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button className="border border-gray-300 p-2 rounded-r-full bg-gray-100 cursor-pointer">
          <FiSearch />
        </button>
      </div>
      <div className="col-span-1 flex justify-end">
        <button className="h-8 p-1 rounded-full">
          <FaUserCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default Head;
