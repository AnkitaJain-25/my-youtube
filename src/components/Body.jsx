import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      <Sidebar />
      <div className={`flex-1 w-full ${isMenuOpen ? "pl-48" : "pl-0"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
