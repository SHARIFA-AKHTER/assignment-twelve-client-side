
const About = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* About Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 mb-6">
            We are a dedicated team committed to improving your experience in the world of employee management and asset allocation.
          </p>
        </div>
  
        {/* Team Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/RbrfG13/hr-manager2.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">John Doe</h3>
            <p className="text-gray-500">HR Manager</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/vCNHF9m/employee2.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Jane Smith</h3>
            <p className="text-gray-500">Employee Manager</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/Yj6pQpv/Asset-manager.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Emily Johnson</h3>
            <p className="text-gray-500">Asset Manager</p>
          </div>
        </div>
  
        {/* Vision Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600">
            To streamline the management of employees and assets, making processes more efficient and less time-consuming.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;