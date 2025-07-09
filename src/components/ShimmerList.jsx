import Shimmer from "./Shimmer";

const ShimmerList = ({ count = 10 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  );
};

export default ShimmerList;
