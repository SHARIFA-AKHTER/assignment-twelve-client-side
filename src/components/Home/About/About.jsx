const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* About Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 mb-6">
          We are a dedicated team committed to improving your experience in the world of employee management and asset allocation. 
          Our goal is to provide seamless and efficient tools for HR management, employee satisfaction, and resource distribution.
        </p>
        <p className="text-lg text-gray-500">
          With years of experience in the industry, we aim to create a work environment where both employers and employees thrive.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all duration-300">
          <img
            src="https://i.ibb.co.com/RbrfG13/hr-manager2.jpg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-gray-500">HR Manager</p>
          <p className="text-sm text-gray-400 mt-2">Leading the HR initiatives with a focus on team growth and well-being.</p>
        </div>
        {/* Team Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all duration-300">
          <img
            src="https://i.ibb.co.com/vCNHF9m/employee2.jpg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Jane Smith</h3>
          <p className="text-gray-500">Employee Manager</p>
          <p className="text-sm text-gray-400 mt-2">Focusing on employee engagement, satisfaction, and retention.</p>
        </div>
        {/* Team Member 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all duration-300">
          <img
            src="https://i.ibb.co.com/Yj6pQpv/Asset-manager.jpg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Emily Johnson</h3>
          <p className="text-gray-500">Asset Manager</p>
          <p className="text-sm text-gray-400 mt-2">Managing resources and optimizing the allocation of assets effectively.</p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-600">
          To streamline the management of employees and assets, making processes more efficient and less time-consuming.
          We aim to provide innovative tools that help organizations adapt to modern challenges in the workplace.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600">
          Our mission is to revolutionize HR and asset management by creating a platform that simplifies tasks, increases productivity, and fosters a culture of transparency and growth. 
          We are committed to continuously evolving with the ever-changing needs of businesses worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;