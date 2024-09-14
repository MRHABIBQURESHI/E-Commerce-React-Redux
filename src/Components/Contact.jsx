import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message submitted:', { name, email, message });
    // Clear form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      {/* Contact Information */}
      <section className="bg-transparent-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-800">Contact Us</h2>
            <p className="text-purple-600 mt-2">We'd love to hear from you!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaMapMarkerAlt className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
              <p className="text-gray-600 mt-2">
                123 Main Street, Suite 456<br />
                City, State, 12345
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaPhone className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+1 (555) 123-4567</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaEnvelope className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">info@example.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-transparent py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-800">Send Us a Message</h2>
            <p className="text-purple-600 mt-2">We're here to help</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 self-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-800">Find Us</h2>
            <p className="text-purple-600 mt-2">Locate us on the map below</p>
          </div>

          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.051261139252!2d-122.41941868468334!3d37.774929279759055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e00f8c5d5%3A0x427d2f36f452a4b7!2sSan%20Francisco%2C%20CA%2094150!5e0!3m2!1sen!2sus!4v1638537884570!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
