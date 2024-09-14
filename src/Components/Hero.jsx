import React from 'react';


function Hero(props) {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 px-6">
           {props.name}
          </h1>
          <p className="text-lg md:text-xl mb-8 px-7">
          {props.des}
          </p>
          <a
            href="/products"
            className="bg-yellow-300 text-black py-3 px-6 rounded-full text-lg font-medium hover:bg-yellow-400 transition duration-300 ml-6"
          >
            {props.btntxt}
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={props.img}
            alt="Electronics"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full opacity-50 mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-50 mix-blend-multiply filter blur-3xl animate-pulse"></div>
    </section>
  );
}

export default Hero;
