import { Link, useLocation } from "react-router";

const Button = ({ name, categoryId }) => {
  const location = useLocation();
  const categoryParams = new URLSearchParams(location.search);
  const currentId = categoryParams.get("category");

  const isActive =
    currentId === categoryId || (!categoryParams.size && !categoryId);

  const to = categoryId ? `/result?category=${categoryId}` : "/";

  return (
    <Link to={to}>
      <button
        className={`m-2 rounded-lg px-3 py-1.5 text-sm font-medium text-nowrap ${
          isActive ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
