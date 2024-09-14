import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Total() {
    
    const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const cartItems = useSelector((state) => state.product.items);

  // Calculate the total price of products
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle purchase button click
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
        
      alert(`Order placed successfully via ${paymentMethod}!`);
      
        navigate('/success');
    
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Checkout Header */}
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
        Checkout
      </h1>

      {/* Total Price Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 shadow-xl rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-2">Total Price</h2>
        <p className="text-4xl font-extrabold">${totalPrice.toFixed(2)}</p>
      </div>

      {/* Payment Method Section */}
      <div className="bg-white p-8 shadow-xl rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose Payment Method</h2>
        <div className="flex space-x-6 justify-center">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === 'COD'}
              onChange={() => setPaymentMethod('COD')}
              className="form-radio text-purple-600 focus:ring-purple-500"
            />
            <span className="text-lg">Cash on Delivery (COD)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="Bank"
              checked={paymentMethod === 'Bank'}
              onChange={() => setPaymentMethod('Bank')}
              className="form-radio text-purple-600 focus:ring-purple-500"
            />
            <span className="text-lg">Bank Transfer</span>
          </label>
        </div>
      </div>

      {/* Purchase Button */}
      <div className="text-center">
        <button
          onClick={handlePurchase}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Total;
