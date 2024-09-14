import React from 'react';
import thankYouImg from '../../public/About/3.jfif'; // Add a suitable "thank you" image

function ThankYou() {


  // Handle navigation back to homepage or shop
  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      {/* Thank You Message */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-8">
        Thank You for Your Purchase!
      </h1>

      {/* Image Section */}
      <div className="mx-auto mb-8">
        <img
          src={thankYouImg}
          alt="Thank You"
          className="mx-auto w-80 h-80 object-cover rounded-full shadow-2xl"
        />
      </div>

      {/* Message */}
      <p className="text-lg text-gray-700 mb-12">
        We hope you enjoy your purchase. Your order is being processed and will
        be shipped shortly. If you have any questions, feel free to contact our
        support team.
      </p>

      {/* Button Section */}
      <div className="text-center">
        <button
          onClick={handleContinueShopping}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
