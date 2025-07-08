import { FaVideo } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdLiveTv, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="fixed left-0 px-3 py-5 shadow-lg w-48 h-screen">
      <ul>
        <li>
          <Link to="/" className="flex">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
              <div className="flex items-center gap-4">
                <IoMdHome size={24} />
                <span>Home</span>
              </div>
            </button>
          </Link>
        </li>
        <li>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            <div className="flex items-center gap-4">
              <SiYoutubeshorts size={23} />
              <span>Shorts</span>
            </div>
          </button>
        </li>
        <li>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            <div className="flex items-center gap-4">
              <FaVideo size={23} />
              <span>Videos</span>
            </div>
          </button>
        </li>
        <li>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            <div className="flex items-center gap-4">
              <MdLiveTv size={24} />
              <span>Live</span>
            </div>
          </button>
        </li>
      </ul>
      <h1 className="font-bold pt-5">
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200">
          <div className="flex items-center gap-4">
            <MdSubscriptions />
            <span>Subscriptions</span>
          </div>
        </button>
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
