import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../../public/Objects/Tablets/1.jfif';
import img2 from '../../public/Objects/Tablets/2.jfif';
import img3 from '../../public/Objects/Tablets/3.jfif';
import img4 from '../../public/Objects/Tablets/4.jfif';
import img5 from '../../public/Objects/Tablets/5.jfif';
import img6 from '../../public/Objects/Tablets/6.jfif';
import img7 from '../../public/Objects/Tablets/7.jfif';
import img8 from '../../public/Objects/Tablets/8.jfif';
import img9 from '../../public/Objects/Tablets/9.jfif';
import img10 from '../../public/Objects/Tablets/10.jfif';
import img11 from '../../public/Objects/Tablets/11.jfif';
import img12 from '../../public/Objects/Tablets/12.jfif';
import img13 from '../../public/Objects/Tablets/13.jfif';
import img14 from '../../public/Objects/Tablets/14.jfif';
import img15 from '../../public/Objects/Tablets/15.jfif';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Slices/CardSlice';
import { addProduct } from '../Redux/Slices/ProductSlice';

function Tablet() {

  const dispatch = useDispatch()
  const handleaddtoCart = (productId , productName , productPrice , productImage) => {
  dispatch(addtocart(productId))
  dispatch(addProduct({
    id : productId,
    name : productName,
    price : productPrice,
    image : productImage
  }))
  }
  const TabletsData = [
    {
      id: 46,
      name: "Apple iPad Pro 12.9",
      price: 1100,
      description: "Powerful tablet with M1 chip, 12.9-inch Liquid Retina XDR display, and support for Apple Pencil.",
      image: img1,
      brand: "Apple",
    },
    {
      id: 47,
      name: "Samsung Galaxy Tab S8 Ultra",
      price: 900,
      description: "Large 14.6-inch AMOLED display, Snapdragon 8 Gen 1 processor, and S Pen support.",
      image: img2,
      brand: "Samsung",
    },
    {
      id: 48,
      name: "Microsoft Surface Pro 8",
      price: 1200,
      description: "Versatile 2-in-1 tablet with Intel Core i7, 13-inch PixelSense Flow display, and Windows 11.",
      image: img3,
      brand: "Microsoft",
    },
    {
      id: 49,
      name: "Amazon Fire HD 10",
      price: 150,
      description: "Affordable tablet with 10.1-inch Full HD display, Alexa integration, and 32GB storage.",
      image: img4,
      brand: "Amazon",
    },
    {
      id: 50,
      name: "Lenovo Tab P11 Pro",
      price: 500,
      description: "11.5-inch OLED display, Snapdragon 730G, and keyboard attachment support for productivity.",
      image: img5,
      brand: "Lenovo",
    },
    {
      id: 51,
      name: "Apple iPad Air 10.9",
      price: 600,
      description: "Powerful mid-range iPad with A14 Bionic chip and 10.9-inch Liquid Retina display.",
      image: img6,
      brand: "Apple",
    },
    {
      id: 52,
      name: "Samsung Galaxy Tab S7",
      price: 700,
      description: "Premium tablet with 11-inch LCD display, S Pen support, and Snapdragon 865+ processor.",
      image: img7,
      brand: "Samsung",
    },
    {
      id: 53,
      name: "Microsoft Surface Go 3",
      price: 550,
      description: "Portable 10.5-inch tablet with Intel Pentium Gold and Windows 11, great for on-the-go productivity.",
      image: img8,
      brand: "Microsoft",
    },
    {
      id: 54,
      name: "Huawei MatePad Pro",
      price: 850,
      description: "12.6-inch OLED display, Kirin 9000E chip, and M-Pencil support for creative tasks.",
      image: img9,
      brand: "Huawei",
    },
    {
      id: 55,
      name: "Xiaomi Pad 5",
      price: 400,
      description: "11-inch display, Snapdragon 860 processor, and great value for media consumption and light productivity.",
      image: img10,
      brand: "Xiaomi",
    },
    {
      id: 56,
      name: "Apple iPad Mini 6",
      price: 500,
      description: "Compact 8.3-inch Liquid Retina display, A15 Bionic chip, and Apple Pencil support.",
      image: img11,
      brand: "Apple",
    },
    {
      id: 57,
      name: "Samsung Galaxy Tab A7 Lite",
      price: 180,
      description: "Affordable 8.7-inch tablet, ideal for media consumption and light usage.",
      image: img12,
      brand: "Samsung",
    },
    {
      id: 58,
      name: "Lenovo Yoga Tab 13",
      price: 600,
      description: "Unique 13-inch tablet with kickstand, Snapdragon 870 processor, and HDMI input for gaming.",
      image: img13,
      brand: "Lenovo",
    },
    {
      id: 59,
      name: "Amazon Fire HD 8",
      price: 100,
      description: "Compact and affordable 8-inch tablet, perfect for reading and media streaming.",
      image: img14,
      brand: "Amazon",
    },
    {
      id: 60,
      name: "Huawei MatePad 11",
      price: 400,
      description: "11-inch display, Snapdragon 865 processor, and M-Pencil support for creative professionals.",
      image: img15,
      brand: "Huawei",
    }
  ];
  
  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-center text-5xl decoration-gray-50 mb-20">
          Tablets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TabletsData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              </div>
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
                  onClick={() =>handleaddtoCart(item.id , item.name , item.price , item.image)}
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
    </div>
  );
}

export default Tablet;
