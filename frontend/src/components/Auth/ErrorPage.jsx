import { AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-dark-purple flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-dark-gray rounded-xl shadow-2xl p-8 text-center space-y-6">
        <div className="flex justify-center mb-4">
          <AlertOctagon 
            size={100} 
            className="text-[#ea384c] animate-pulse" 
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-neutral-gray text-lg mb-6">
          We're sorry, but the page you're looking for seems to have disappeared into the digital abyss.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="bg-bright-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;