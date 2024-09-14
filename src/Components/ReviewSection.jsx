import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import img1  from '/Static Products/Review/1.jfif'
import img2  from '/Static Products/Review/2.jfif'
import img3  from '/Static Products/Review/3.jfif'
function ReviewSection(props) {
  return (
    <section className="bg-transparent-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-800">{props.name}</h2>
          <p className="text-purple-600 mt-2">See the reviews from our satisfied customers</p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={img1}
              alt="Reviewer 1"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              "Amazing service and high-quality products. I couldn't be happier with my purchase!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={img2}
              alt="Reviewer 2"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <div className="flex mb-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-gray-600 mt-2">
              "The customer support was fantastic. I will definitely recommend this to my friends."
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
              src={img3}
              alt="Reviewer 3"
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
            <div className="flex mb-2">
              {[...Array(3)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {[...Array(2)].map((_, i) => (
                <FaStar key={i + 3} className="text-gray-300" />
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              "Good quality, but the delivery took a bit longer than expected. Overall satisfied."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
