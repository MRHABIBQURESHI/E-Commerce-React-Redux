import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../../public/Objects/PC/1.jfif';
import img2 from '../../public/Objects/PC/2.jfif';
import img3 from '../../public/Objects/PC/3.jfif';
import img4 from '../../public/Objects/PC/4.jfif';
import img5 from '../../public/Objects/PC/5.jfif';
import img6 from '../../public/Objects/PC/6.jfif';
import img7 from '../../public/Objects/PC/7.jfif';
import img8 from '../../public/Objects/PC/8.jfif';
import img9 from '../../public/Objects/PC/9.jfif';
import img10 from '../../public/Objects/PC/10.jfif';
import img11 from '../../public/Objects/PC/11.jfif';
import img12 from '../../public/Objects/PC/12.jfif';
import img13 from '../../public/Objects/PC/13.jfif';
import img14 from '../../public/Objects/PC/14.jfif';
import img15 from '../../public/Objects/PC/15.jfif';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Slices/CardSlice';
import { addProduct } from '../Redux/Slices/ProductSlice';

function Pc() {

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

  const GamingPCData = [
    { id: 31, name: "Alienware Aurora R12", price: 2500, description: "High-performance gaming desktop with Intel i7 and Nvidia RTX 3080 for ultimate gaming experiences.", image: img1, brand: "Alienware" },
    { id: 32, name: "Corsair Vengeance i7200", price: 2400, description: "Premium gaming desktop with Intel i9 and Nvidia RTX 3090 for high-end gaming and content creation.", image: img2, brand: "Corsair" },
    { id: 33, name: "CyberPowerPC Gamer Xtreme", price: 1500, description: "A solid choice for gamers featuring Intel i5 and Nvidia RTX 3060, delivering great performance for the price.", image: img3, brand: "CyberPowerPC" },
    { id: 34, name: "MSI Aegis RS", price: 2200, description: "A powerful gaming PC with Intel i7 and Nvidia RTX 3070 for fluid gaming at high settings.", image: img4, brand: "MSI" },
    { id: 35, name: "HP Omen 30L", price: 1900, description: "A sleek and customizable gaming desktop with AMD Ryzen 7 and Nvidia RTX 3080 for excellent gaming.", image: img5, brand: "HP" },
    { id: 36, name: "NZXT Streaming PC", price: 1700, description: "Designed for both gaming and streaming with AMD Ryzen 5 and Nvidia RTX 3070.", image: img6, brand: "NZXT" },
    { id: 37, name: "ASUS ROG Strix GA15", price: 1600, description: "Compact yet powerful with AMD Ryzen 7 and Nvidia RTX 3060, ideal for smooth 1080p gaming.", image: img7, brand: "ASUS" },
    { id: 38, name: "iBUYPOWER TraceMR Gaming Desktop", price: 1400, description: "An affordable gaming desktop with Intel i5 and Nvidia GTX 1660 Super for entry-level gaming.", image: img8, brand: "iBUYPOWER" },
    { id: 39, name: "Skytech Blaze II Gaming PC", price: 1200, description: "Budget-friendly gaming PC with Ryzen 5 and Nvidia GTX 1660 for solid 1080p gaming.", image: img9, brand: "Skytech" },
    { id: 40, name: "CLX Set Gaming Desktop", price: 3500, description: "A custom-built powerhouse featuring Intel i9 and Nvidia RTX 3090 for ultimate gaming and productivity.", image: img10, brand: "CLX" },
    { id: 41, name: "ABS Master Gaming PC", price: 1300, description: "A well-rounded gaming PC with Intel i5 and Nvidia RTX 2060, great for mainstream gamers.", image: img11, brand: "ABS" },
    { id: 42, name: "Thermaltake LCGS Glacier 370", price: 2800, description: "Advanced water-cooled gaming PC with Intel i7 and Nvidia RTX 3080 for hardcore gamers.", image: img12, brand: "Thermaltake" },
    { id: 43, name: "Acer Predator Orion 3000", price: 1600, description: "A compact but powerful gaming desktop with Intel i7 and Nvidia RTX 3060 for great performance.", image: img13, brand: "Acer" },
    { id: 44, name: "Velocity Micro Raptor Z55", price: 2700, description: "High-performance gaming desktop with Intel i9 and Nvidia RTX 3080 for superior gaming and content creation.", image: img14, brand: "Velocity Micro" },
    { id: 45, name: "Origin PC Neuron", price: 3200, description: "Custom-built gaming powerhouse with Intel i9 and Nvidia RTX 3090, ideal for extreme gaming and multitasking.", image: img15, brand: "Origin PC" }
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-center text-5xl decoration-gray-50 mb-20">PC Gaming</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GamingPCData.map((item) => (
            <div
              key={item.id}
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

export default Pc;
