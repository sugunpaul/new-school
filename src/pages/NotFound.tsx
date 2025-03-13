
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-preschool-light-blue p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We couldn't find the page you're looking for.
        </p>
        <a href="/" className="button-primary">
          <Home size={18} className="mr-2" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
