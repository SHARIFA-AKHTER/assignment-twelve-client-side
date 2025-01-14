
const Packages = () => {
    const packages = [
      {
        title: "Maximum 5 Employees",
        price: "$5",
        description: "Best for small teams looking for affordable solutions.",
      },
      {
        title: "Maximum 10 Employees",
        price: "$8",
        description: "Ideal for medium-sized teams with growing needs.",
      },
      {
        title: "Maximum 20 Employees",
        price: "$15",
        description: "Perfect for larger teams requiring advanced support.",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Packages
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Choose a package that fits your team size and needs.
          </p>
  
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {pkg.title}
                </h3>
                <p className="text-2xl font-bold text-blue-500 mb-4">
                  {pkg.price}
                </p>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Packages;