import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold">Welcome to Holiday Lights!</h1>
          <p className="mt-2 text-lg">Brighten up your holiday season with beautiful lights.</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="mt-4">
              We offer a wide range of holiday lighting services, including installation and maintenance.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Get a Quote</h2>
            <p className="mt-4">
              Contact us to request a quote and brighten up your holidays with our professional lighting services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
