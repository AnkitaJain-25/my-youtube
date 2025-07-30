import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-lg">
      <FaUserCircle size={24} />
      <span className="p-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
