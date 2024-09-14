import React from 'react';
import img1 from '/About/1.jpg'
import img2 from '/About/2.jpg'

function About() {
  return (
    <div>
      {/* About Header */}
      <section className="bg-transparent-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-purple-800">About Us</h1>
          <p className="text-purple-600 mt-2">
            Learn more about our journey, mission, and values.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={img1}
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-800">Our Mission</h2>
              <p className="text-purple-600 mt-4">
                Our mission is to provide the best services to our customers with a commitment to quality, innovation, and sustainability. We strive to be a leader in our industry by delivering exceptional value and experiences to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-800">Our Values</h2>
              <p className="text-purple-600 mt-4">
                We believe in integrity, transparency, and putting our customers first. Our values guide everything we do, ensuring that we maintain the highest standards in every aspect of our business.
              </p>
            </div>
            <div>
              <img
                src={img2}
                alt="Our Values"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-800">Our Story</h2>
          <p className="text-purple-600 mt-4 max-w-3xl mx-auto">
            Founded in [Year], our company started with a simple idea: to make a positive impact in the lives of our customers. Over the years, we have grown and evolved, but our core mission remains the same. We are passionate about what we do, and we are dedicated to serving our customers with the highest level of excellence.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
