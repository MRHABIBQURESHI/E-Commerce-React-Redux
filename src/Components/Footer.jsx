import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 px-10">        Electronix</h2>
          <p className="text-gray-200 px-8">
          Electronix is your one-stop destination for the latest and greatest products. We bring you a wide variety of items at unbeatable prices.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-300 transition duration-300">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-200">1234 Electronix St., Commerce City, CO 80022</p>
          <p className="text-gray-200">Email: support@eshop.com</p>
          <p className="text-gray-200">Phone: +1 234 567 8900</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h10.7v-8.667H9.666V11h3.034v-2.5c0-3.034 1.855-4.7 4.566-4.7 1.3 0 2.417.096 2.742.14v3.18h-1.882c-1.479 0-1.766.702-1.766 1.733V11H20l-.667 2.333H16.9V24H22c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.961 9.961 0 01-2.828.775A4.935 4.935 0 0023.337 3a9.866 9.866 0 01-3.127 1.195A4.92 4.92 0 0016.616 2c-2.723 0-4.928 2.206-4.928 4.928 0 .387.043.764.127 1.127C7.691 7.828 4.066 5.865 1.64 2.932c-.423.727-.666 1.571-.666 2.475 0 1.708.87 3.214 2.188 4.095A4.9 4.9 0 01.96 8.73v.063c0 2.385 1.693 4.375 3.946 4.83-.413.112-.847.172-1.294.172-.316 0-.624-.031-.926-.088.625 1.956 2.444 3.379 4.6 3.418A9.869 9.869 0 010 21.538a13.91 13.91 0 007.545 2.212c9.055 0 14.009-7.502 14.009-14.009 0-.213-.004-.426-.014-.637A10.002 10.002 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2H16.25C19.063 2 21 3.937 21 6.75V16.25C21 19.063 19.063 21 16.25 21H7.75C4.937 21 3 19.063 3 16.25V6.75C3 3.937 4.937 2 7.75 2zM16.25 0H7.75C3.47 0 0 3.47 0 7.75V16.25C0 20.53 3.47 24 7.75 24H16.25C20.53 24 24 20.53 24 16.25V7.75C24 3.47 20.53 0 16.25 0zM12 6.75C9.515 6.75 7.5 8.765 7.5 11.25C7.5 13.735 9.515 15.75 12 15.75C14.485 15.75 16.5 13.735 16.5 11.25C16.5 8.765 14.485 6.75 12 6.75zM12 14.25C10.48 14.25 9.25 13.02 9.25 11.5C9.25 9.98 10.48 8.75 12 8.75C13.52 8.75 14.75 9.98 14.75 11.5C14.75 13.02 13.52 14.25 12 14.25zM18.5 5.25C17.395 5.25 16.5 4.355 16.5 3.25C16.5 2.145 17.395 1.25 18.5 1.25C19.605 1.25 20.5 2.145 20.5 3.25C20.5 4.355 19.605 5.25 18.5 5.25z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">&copy; 2024 Electronix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
