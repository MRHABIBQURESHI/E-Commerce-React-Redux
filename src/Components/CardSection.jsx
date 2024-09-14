import React from 'react';
import img1 from '/Static Products/Mobile/1.jpg'
import img2 from '/Static Products/Mobile/2.jpg'
import img3 from '/Static Products/Mobile/4.jpg'
import { Link } from 'react-router-dom';

function CardSection() {
  return (
    <section className="bg-transparent-100 py-12">
      <div className="container mx-auto px-4">
      <div className="text-start mb-8">
          <h2 className="text-3xl font-bold text-purple-800">Mobile Products</h2>
          {/* <p className="text-purple-600 mt-2">Explore some of the best products available</p> */}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={img1}
              alt="Product 1"
              className="w-full h-66 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
            <Link to = "/mobiles">Go to Shop</Link>
</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={img2}
              alt="Product 2"
              className="w-full h-66 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
            <Link to = "/mobiles">Go to Shop</Link>
</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
            <img
              src={img3}
              alt="Product 3"
              className="w-full h-66 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
  <Link to = "/mobiles">Go to Shop</Link>
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection;
