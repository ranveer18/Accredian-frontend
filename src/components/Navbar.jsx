import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <span className="font-bold text-3xl">accredian</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button
                href="#"
                className="py-2 px-3  w-[132px] h-[44px]  bg-blue-500 text-white rounded"
              >
                Cources
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Refer & Earn
            </a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Login
            </a>
            <button
              href="#"
              className="py-2 px-3 w-[132px] h-[44px]  bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
