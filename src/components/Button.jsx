import { Link, useLocation } from "react-router";

const Button = ({ name, categoryId }) => {
  const location = useLocation();
  const categoryParams = new URLSearchParams(location.search);
  const currentName = categoryParams.get("categoryname");

  const isActive =
    currentName === name || (!categoryParams.size && name === "All");

  const to = categoryId
    ? `/result?categoryid=${categoryId}&categoryname=${encodeURIComponent(
        name
      )}`
    : "/";

  return (
    <Link to={to}>
      <button
        className={`px-3 py-1.5 m-2 rounded-lg text-nowrap font-medium text-sm ${
          isActive ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
