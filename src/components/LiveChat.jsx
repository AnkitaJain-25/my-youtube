import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(30) + "🚀",
        }),
      );
    }, 1500);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="ml-2 flex h-[500px] w-full flex-col-reverse overflow-y-scroll rounded-lg border border-black bg-slate-100 p-2">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="ml-2 w-full rounded-lg border border-black p-2"
        onSubmit={(e) => {
          e.preventDefault();
          liveMessage &&
            dispatch(
              addMessage({
                name: "Ankita",
                message: liveMessage,
              }),
            );
          setLiveMessage("");
        }}
      >
        <input
          className="w-4/5 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 bg-green-100 px-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
