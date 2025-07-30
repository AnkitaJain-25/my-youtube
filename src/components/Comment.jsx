import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="my-2 flex rounded-lg bg-gray-100 p-2 shadow-sm">
      <FaUserCircle size={40} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
