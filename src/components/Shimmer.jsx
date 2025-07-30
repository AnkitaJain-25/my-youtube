const Shimmer = () => {
  return (
    <div className="flex w-full animate-pulse flex-col">
      <div className="mb-2 aspect-video rounded-lg bg-gray-300"></div>
      <div className="mb-1 h-4 rounded bg-gray-300"></div>
      <div className="mb-1 h-4 w-2/3 rounded bg-gray-300"></div>
    </div>
  );
};

export default Shimmer;
