import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

function FeatureSection() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6l6 4.5L12 15 6 10.5 12 6z"
          />
        </svg>
      ),
      title: "Quality Guarantee",
      description:
        "We ensure top quality in every product, backed by our commitment to excellence.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7h2a2 2 0 012 2v1.58a5.973 5.973 0 00-2-1.58V9h-2V7zm0 7v2h-2v-2h2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm4-4h2v2h-2V7zm0 4h2v2h-2v-2z"
          />
        </svg>
      ),
      title: "Daily Offers",
      description:
        "Enjoy our daily offers and discounts on a wide range of products.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.34v3.66a2 2 0 104 0V8.5m-8 0v1.5a4 4 0 108 0V8.5M7 12.5v1.5a6 6 0 0012 0v-1.5M5 18h14v2H5v-2zm5-7.5v-4M14 10.5v-4m-5-1h6m2 0H7m0 0h6m-6 0h6"
          />
        </svg>
      ),
      title: "100% Secure Payment",
      description:
        "Shop with confidence using our 100% secure payment gateway.",
    },
  ];

  return (
    <section className="bg-transparent-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        

        {/* Feature Icons and Text with Flip Animation */}
        <Flipper flipKey={features.map((_, i) => i).join('')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Flipped key={index} flipId={`feature-${index}`}>
                <div
                  className="text-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
                  onClick={() => console.log(`Flipped card ${index}`)}
                >
                  <Flipped inverseFlipId={`feature-${index}`}>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                  </Flipped>
                  <Flipped flipId={`feature-title-${index}`}>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </Flipped>
                  <Flipped flipId={`feature-desc-${index}`}>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  </Flipped>
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
      </div>
    </section>
  );
}

export default FeatureSection;
