import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img1 from '../../public/Objects/Laptops/1.jfif';
import img2 from '../../public/Objects/Laptops/2.jfif';
import img3 from '../../public/Objects/Laptops/3.jfif';
import img4 from '../../public/Objects/Laptops/4.jfif';
import img5 from '../../public/Objects/Laptops/5.jfif';
import img6 from '../../public/Objects/Laptops/6.jfif';
import img7 from '../../public/Objects/Laptops/7.jfif';
import img8 from '../../public/Objects/Laptops/8.jfif';
import img9 from '../../public/Objects/Laptops/9.jfif';
import img10 from '../../public/Objects/Laptops/10.jfif';
import img11 from '../../public/Objects/Laptops/11.jfif';
import img12 from '../../public/Objects/Laptops/12.jfif';
import img13 from '../../public/Objects/Laptops/13.jfif';
import img14 from '../../public/Objects/Laptops/14.jfif';
import img15 from '../../public/Objects/Laptops/15.jfif';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Slices/CardSlice';
import { addProduct } from '../Redux/Slices/ProductSlice';

function Laptop() {

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
  const LaptopsData = [
    {
      id: 1,
      name: "Apple MacBook Pro M2",
      price: 2000,
      description: "Powerful performance with the M2 chip, stunning Retina display, and excellent battery life.",
      image: img1,
      brand: "Apple",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      price: 1200,
      description: "Sleek, portable, and powerful with Intel's latest processors and InfinityEdge display.",
      image: img2,
      brand: "Dell",
    },
    {
      id: 3,
      name: "HP Spectre x360",
      price: 1400,
      description: "Premium 2-in-1 laptop with a stunning design, long battery life, and powerful performance.",
      image: img3,
      brand: "HP",
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1500,
      description: "Lightweight, durable, and business-ready with an excellent keyboard and display.",
      image: img4,
      brand: "Lenovo",
    },
    {
      id: 5,
      name: "Asus ZenBook 14",
      price: 1000,
      description: "Compact and lightweight with great battery life and a vivid NanoEdge display.",
      image: img5,
      brand: "Asus",
    },
    {
      id: 6,
      name: "Microsoft Surface Laptop 4",
      price: 1300,
      description: "Elegant and premium design with an excellent display and performance.",
      image: img6,
      brand: "Microsoft",
    },
    {
      id: 7,
      name: "Acer Swift 3",
      price: 800,
      description: "Affordable yet powerful with AMD Ryzen processors and a sharp Full HD display.",
      image: img7,
      brand: "Acer",
    },
    {
      id: 8,
      name: "Razer Blade 15",
      price: 2500,
      description: "A top-tier gaming laptop with a sleek design, powerful GPU, and high refresh rate display.",
      image: img8,
      brand: "Razer",
    },
    {
      id: 9,
      name: "MSI GS66 Stealth",
      price: 2200,
      description: "High-performance gaming laptop with Nvidia RTX graphics and a 240Hz display.",
      image: img9,
      brand: "MSI",
    },
    {
      id: 10,
      name: "LG Gram 16",
      price: 1700,
      description: "Super lightweight and long battery life with a large 16-inch display.",
      image: img10,
      brand: "LG",
    },
    {
      id: 11,
      name: "Samsung Galaxy Book Pro",
      price: 1100,
      description: "Ultra-slim design with an AMOLED display and impressive battery life.",
      image: img11,
      brand: "Samsung",
    },
    {
      id: 12,
      name: "Huawei MateBook X Pro",
      price: 1500,
      description: "Elegant design with a high-resolution display and excellent performance.",
      image: img12,
      brand: "Huawei",
    },
    {
      id: 13,
      name: "Gigabyte Aero 15",
      price: 2300,
      description: "A creator-focused laptop with a 4K OLED display and powerful GPU performance.",
      image: img13,
      brand: "Gigabyte",
    },
    {
      id: 14,
      name: "Alienware m15 R6",
      price: 2400,
      description: "High-end gaming performance with a stylish design and Nvidia RTX 30 series GPUs.",
      image: img14,
      brand: "Alienware",
    },
    {
      id: 15,
      name: "Toshiba Dynabook Tecra A50",
      price: 900,
      description: "A budget-friendly laptop with decent performance for everyday tasks.",
      image: img15,
      brand: "Toshiba",
    }
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-center text-5xl decoration-gray-50 mb-20 ">Laptops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {LaptopsData.map((item, index) => (
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
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 my-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-purple-600">${item.price}</span>
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
    </div>
  );
}

export default Laptop;
