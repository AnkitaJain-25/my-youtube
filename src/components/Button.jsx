const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1.5 m-2 bg-gray-200 rounded-lg text-nowrap font-medium text-sm">
        {name}
      </button>
    </div>
  );
};

export default Button;
