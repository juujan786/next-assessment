export const ErrorPage = ({ error }) => {
  return (
    <div className="w-full py-12 flex justify-center items-center flex-col">
      <h1 className="text-xl">Error</h1>
      <p>{error.message}</p>
    </div>
  );
};
