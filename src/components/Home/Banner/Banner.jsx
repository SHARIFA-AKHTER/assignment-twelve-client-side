

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* Banner Section with Slider */}
      <div className="carousel w-full">
        {/* Slider 1: HR Manager */}
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co.com/QKc7cbq/Hr-manager.webp"
            className="w-full"
            alt="HR Manager"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center px-4 sm:px-8 md:px-16">
              <h5 className="text-3xl text-red-600  sm:text-4xl font-bold">
                Join as HR Manager
              </h5>
              <p className="text-red-600 sm:text-lg mb-6">
                Manage employees and assets
              </p>
              <Link to="/join-as-hr-manager">
                <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition">
                  Join as HR Manager
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider 2: Employee */}
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co.com/dp0QGD3/employee.jpgp"
            className="w-full"
            alt="Employee"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center px-4 sm:px-8 md:px-16">
              <h5 className="text-3xl text-red-600  sm:text-4xl font-bold">
                Join as an Employee
              </h5>
              <p className="text-red-600 sm:text-lg mb-6">
                Access and request assets
              </p>
              <Link to="/join-as-employee">
                <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-500 transition">
                  Join as Employee
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls (Navigation Buttons) */}
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
      </div>
    </div>
  );
};

export default Banner;