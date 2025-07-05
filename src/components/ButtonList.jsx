import { useRef } from "react";
import Button from "./Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const list = [
  "All",
  "JavaScript",
  "Music",
  "Trailers",
  "Podcasts",
  "Indian Pop Music",
  "Soul Music",
  "Satire",
  "Microservices",
  "Watched",
  "Recently Uploaded",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Valentines",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 rounded-full hover:bg-black hover:text-white"
        >
          <MdKeyboardArrowLeft size={20} />
        </button>
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex">
            {list.map((name) => (
              <div key={name}>
                <Button name={name} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full hover:bg-black hover:text-white"
        >
          <MdKeyboardArrowRight size={20} />
        </button>
      </div>
  );
};

export default ButtonList;
