import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import img1 from '../../public/Objects/Mobiles/1.jfif';
import img2 from '../../public/Objects/Mobiles/2.jfif';
import img3 from '../../public/Objects/Mobiles/3.jfif';
import img4 from '../../public/Objects/Mobiles/4.jfif';
import img5 from '../../public/Objects/Mobiles/5.jfif';
import img6 from '../../public/Objects/Mobiles/6.jfif';
import img7 from '../../public/Objects/Mobiles/7.jfif';
import img8 from '../../public/Objects/Mobiles/8.jfif';
import img9 from '../../public/Objects/Mobiles/9.jfif';
import img10 from '../../public/Objects/Mobiles/10.jfif';
import img11 from '../../public/Objects/Mobiles/11.jfif';
import img12 from '../../public/Objects/Mobiles/12.jfif';
import img13 from '../../public/Objects/Mobiles/13.jfif';
import img14 from '../../public/Objects/Mobiles/14.jfif';
import img15 from '../../public/Objects/Mobiles/15.jfif';
import { addtocart } from '../Redux/Slices/CardSlice';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Slices/ProductSlice';


function Mobile() {

  const dispatch = useDispatch()
  const handleaddtoCart = (productId , productName , productPrice , productImage ) => {

    console.log(productId);
    console.log(productName);
    console.log(productPrice);
    console.log(productImage);
    
  dispatch(addtocart(productId))
  dispatch(addProduct({
    id : productId,
    name : productName,
    price : productPrice,
    image : productImage
  }))
  }


  const MobilePhonesData = [
    {
      id: 16,
      name: 'Apple iPhone 14',
      price: 1000,
      description: 'The latest iPhone with A15 Bionic chip and enhanced features.',
      image: img1,
      brand: 'Apple',
    },
    {
      id: 17,
      name: 'Samsung Galaxy S23',
      price: 850,
      description: 'Powerful performance with Snapdragon 8 Gen 1 processor and vibrant display.',
      image: img2,
      brand: 'Samsung',
    },
    {
      id: 18,
      name: 'Google Pixel 7',
      price: 750,
      description: 'Get the best of Google with Pixel 7’s incredible camera and stock Android.',
      image: img3,
      brand: 'Google',
    },
    {
      id: 19,
      name: 'OnePlus 11',
      price: 700,
      description: 'Experience fluid performance with a 120Hz AMOLED display and fast charging.',
      image: img4,
      brand: 'OnePlus',
    },
    {
      id: 20,
      name: 'Xiaomi Mi 12 Pro',
      price: 600,
      description: 'Flagship performance with a sleek design and powerful 108MP camera.',
      image: img5,
      brand: 'Xiaomi',
    },
    {
      id: 21,
      name: 'Sony Xperia 5 III',
      price: 950,
      description: 'Compact yet powerful with Sony’s signature camera technology.',
      image: img6,
      brand: 'Sony',
    },
    {
      id: 22,
      name: 'Oppo Find X5 Pro',
      price: 850,
      description: 'Sleek design with a powerful Snapdragon 8 Gen 1 chip and ultra-fast charging.',
      image: img7,
      brand: 'Oppo',
    },
    {
      id: 23,
      name: 'Vivo X70 Pro+',
      price: 900,
      description: 'Featuring a gimbal-stabilized camera for outstanding photography.',
      image: img8,
      brand: 'Vivo',
    },
    {
      id: 24,
      name: 'Realme GT 2 Pro',
      price: 700,
      description: 'Powerful performance with a stunning display and flagship features.',
      image: img9,
      brand: 'Realme',
    },
    {
      id: 25,
      name: 'Huawei P50 Pro',
      price: 950,
      description: 'Top-notch hardware with a focus on photography and performance.',
      image: img10,
      brand: 'Huawei',
    },
    {
      id: 26,
      name: 'Asus ROG Phone 6',
      price: 1200,
      description: 'The ultimate gaming phone with a high refresh rate display and cooling system.',
      image: img11,
      brand: 'Asus',
    },
    {
      id: 27,
      name: 'Nokia X50',
      price: 500,
      description: 'A reliable smartphone with long battery life and durable design.',
      image: img12,
      brand: 'Nokia',
    },
    {
      id: 28,
      name: 'Motorola Edge 30 Pro',
      price: 750,
      description: 'Edge-to-edge display with fast performance and a sleek design.',
      image: img13,
      brand: 'Motorola',
    },
    {
      id: 29,
      name: 'Poco F4 GT',
      price: 650,
      description: 'Performance-focused with advanced cooling for high-intensity tasks.',
      image: img14,
      brand: 'Poco',
    },
    {
      id: 30,
      name: 'ZTE Axon 40 Ultra',
      price: 800,
      description: 'High-end features packed in a sleek design with a powerful camera system.',
      image: img15,
      brand: 'ZTE',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 mt-12">
        {/* Grid container for products */}
        <h2 className="text-center text-5xl decoration-gray-50 mb-20 ">
          Mobiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MobilePhonesData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 my-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-purple-600">
                    ${item.price}
                  </span>
                  <button
                  onClick={() => handleaddtoCart(item.id , item.name , item.price , item.image)}
                    className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mobile;
