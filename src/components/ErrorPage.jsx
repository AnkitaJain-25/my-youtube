const ErrorPage = ({errorMessage}) => {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold">Oops! Something went wrong.</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
