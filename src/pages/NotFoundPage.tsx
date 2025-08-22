import { Link } from 'react-router-dom';
import BasicButton from '../shared/components/atoms/buttons/BasicButton';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            {/* Main 404 Text */}
            <h1 className="text-9xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-float opacity-70"></div>
            <div className="absolute -top-8 -right-6 w-6 h-6 bg-yellow-500 rounded-full animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Oops! Page not found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you're looking for seems to have wandered off into the fashion universe. 
            Don't worry, we'll help you find your way back to our amazing collection!
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-6">
            <svg className="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.5a7.962 7.962 0 01-5.657-2.343L12 12l-5.657-5.657A7.962 7.962 0 0112 3.5c2.294 0 4.357.96 5.828 2.5" />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link to="/" className="block sm:inline-block">
            <BasicButton
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold px-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </BasicButton>
          </Link>
          
          <Link to="/products" className="block sm:inline-block">
            <BasicButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 px-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Products
            </BasicButton>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/sale" 
              className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
            >
              Sale Items
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/products?filter=new" 
              className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
            >
              New Arrivals
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/community" 
              className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
            >
              Community
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/login" 
              className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-yellow-600 transition-colors duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">L</span>
            </div>
            <span className="font-semibold">Back to LANDAS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
