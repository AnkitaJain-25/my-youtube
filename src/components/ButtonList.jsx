import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { YOUTUBE_VIDEO_CATEGORIES } from "../utils/constants";

const ButtonList = () => {
  const [buttonList, setButtonList] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 700;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    getVideoCategories();
  }, []);

  const getVideoCategories = async () => {
    const data = await fetch(YOUTUBE_VIDEO_CATEGORIES);
    const json = await data.json();
    setButtonList(json.items);
  };

  return (
    <div className="flex items-center py-4">
      <button
        onClick={() => scroll("left")}
        className="rounded-full p-2 hover:bg-black hover:text-white"
      >
        <MdKeyboardArrowLeft size={20} />
      </button>
      <div className="overflow-hidden" ref={scrollRef}>
        <div className="flex">
          <Button name={"All"} />
          {buttonList.map((item) => (
            <div key={item.id}>
              <Button name={item.snippet.title} categoryId={item.id} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("right")}
        className="rounded-full bg-gray-200 p-2 hover:bg-black hover:text-white"
      >
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default ButtonList;
