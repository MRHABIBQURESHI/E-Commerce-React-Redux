import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../../public/Objects/Watches/1.jfif';
import img2 from '../../public/Objects/Watches/2.jfif';
import img3 from '../../public/Objects/Watches/3.jfif';
import img4 from '../../public/Objects/Watches/4.jfif';
import img5 from '../../public/Objects/Watches/5.jfif';
import img6 from '../../public/Objects/Watches/6.jfif';
import img7 from '../../public/Objects/Watches/7.jfif';
import img8 from '../../public/Objects/Watches/8.jfif';
import img9 from '../../public/Objects/Watches/9.jfif';
import img10 from '../../public/Objects/Watches/10.jfif';
import img11 from '../../public/Objects/Watches/11.jfif';
import img12 from '../../public/Objects/Watches/12.jfif';
import img13 from '../../public/Objects/Watches/13.jfif';
import img14 from '../../public/Objects/Watches/14.jfif';
import img15 from '../../public/Objects/Watches/15.jfif';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/Slices/CardSlice';
import { addProduct } from '../Redux/Slices/ProductSlice';

function Watch() {

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
  const WatchesData = [
    {
      id: 61,
      name: "Rolex Submariner",
      price: 8500,
      description: "Iconic luxury dive watch with a 40mm stainless steel case and ceramic bezel.",
      image: img1,
      brand: "Rolex",
    },
    {
      id: 62,
      name: "Omega Seamaster 300M",
      price: 5200,
      description: "Diver's watch with a 42mm stainless steel case and co-axial master chronometer movement.",
      image: img2,
      brand: "Omega",
    },
    {
      id: 63,
      name: "Tag Heuer Carrera",
      price: 3500,
      description: "Elegant chronograph watch with a 41mm stainless steel case and automatic movement.",
      image: img3,
      brand: "Tag Heuer",
    },
    {
      id: 64,
      name: "Casio G-Shock GA2100",
      price: 100,
      description: "Durable and affordable digital watch with a carbon core guard structure.",
      image: img4,
      brand: "Casio",
    },
    {
      id: 65,
      name: "Apple Watch Series 8",
      price: 400,
      description: "Smartwatch with an Always-On Retina display, ECG app, and fitness tracking features.",
      image: img5,
      brand: "Apple",
    },
    {
      id: 66,
      name: "Garmin Fenix 6 Pro",
      price: 600,
      description: "Rugged multi-sport GPS smartwatch with heart rate monitor, VO2 max, and performance metrics.",
      image: img6,
      brand: "Garmin",
    },
    {
      id: 67,
      name: "Breitling Navitimer B01",
      price: 7900,
      description: "Classic pilot's watch with chronograph function, 43mm stainless steel case, and automatic movement.",
      image: img7,
      brand: "Breitling",
    },
    {
      id: 68,
      name: "Seiko Prospex Diver's Watch",
      price: 500,
      description: "Automatic diver's watch with a 44mm stainless steel case and 200m water resistance.",
      image: img8,
      brand: "Seiko",
    },
    {
      id: 69,
      name: "Tissot PRX Powermatic 80",
      price: 650,
      description: "Retro-inspired automatic watch with an 80-hour power reserve and 40mm stainless steel case.",
      image: img9,
      brand: "Tissot",
    },
    {
      id: 70,
      name: "Fossil Gen 6 Smartwatch",
      price: 300,
      description: "Smartwatch with Google Wear OS, heart rate tracking, and smartphone notifications.",
      image: img10,
      brand: "Fossil",
    },
    {
      id: 71,
      name: "Hublot Big Bang",
      price: 12000,
      description: "Luxurious chronograph watch with a 44mm ceramic and rubber case and skeleton dial.",
      image: img11,
      brand: "Hublot",
    },
    {
      id: 72,
      name: "Longines HydroConquest",
      price: 1500,
      description: "Sporty diver's watch with a 41mm stainless steel case and ceramic bezel.",
      image: img12,
      brand: "Longines",
    },
    {
      id: 73,
      name: "Citizen Eco-Drive Promaster",
      price: 250,
      description: "Eco-friendly diver's watch with a solar-powered movement and 200m water resistance.",
      image: img13,
      brand: "Citizen",
    },
    {
      id: 74,
      name: "Timex Weekender",
      price: 40,
      description: "Affordable, casual watch with an easy-to-read dial and interchangeable fabric strap.",
      image: img14,
      brand: "Timex",
    },
    {
      id: 75,
      name: "Patek Philippe Nautilus",
      price: 32000,
      description: "Ultra-luxury sports watch with a 40mm stainless steel case and automatic movement.",
      image: img15,
      brand: "Patek Philippe",
    }
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-center text-5xl decoration-gray-50 mb-20 ">
          Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {WatchesData.map((item) => (
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
    </div>
  );
}

export default Watch;
