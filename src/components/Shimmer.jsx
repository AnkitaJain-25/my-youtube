const Shimmer = () => {
  return (
    <div className="w-full flex flex-col animate-pulse">
      <div className="bg-gray-300 rounded-lg aspect-video mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-1"></div>
      <div className="h-4 bg-gray-300 rounded mb-1 w-2/3"></div>
    </div>
  )
}

export default Shimmer