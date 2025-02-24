import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;