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
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/" className="flex">
            <div className="flex items-center gap-2">
              <IoMdHome />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <SiYoutubeshorts />
            <span>Shorts</span>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <FaVideo />
            <span>Videos</span>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <MdLiveTv />
            <span>Live</span>
          </div>
        </li>
      </ul>
      <h1 className="font-bold pt-5">
        <div className="flex items-center gap-2">
          <MdSubscriptions />
          <span>Subscriptions</span>
        </div>
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
