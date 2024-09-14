import React from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement , removeproduct } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";

const Cart = () => {

const dispatch = useDispatch()
const items = useSelector(state => state.product.items)



  return (
   <>
   <Header />

   <div className="container mx-auto p-4">
     <h2 className="text-center text-5xl decoration-gray-50 mt-10 mb-10 ">
        Add to Cart
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Quntity</th>
              <th className="py-3 px-6 text-left">Action</th>

            </tr>
          </thead>
          <tbody>
            {items.map((item , index) =>(
              <tr
                // key={index}
                className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">
                    <img className="rounded-full" height={80} width={80} src={item.image} alt= {item.name} />
                </td>
                <td className="py-3 px-6 text-left">${item.price}</td>
                
                <td className="py-3 px-6 text-left">
      <div className="flex items-center space-x-2">
          <button 
          onClick={() => dispatch(decrement(item.id))}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 ease-in-out">
            -
          </button>
          <h6 className="text-lg font-semibold">{item.quantity}</h6>
          <button 
          
        onClick={() => dispatch(increment(item.id))}
          
          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
            +
          </button>
        </div>
      </td>
                <td className="py-3 px-6 text-left"><button 
                onClick={() => dispatch(removeproduct(item.id))}
                 className="bg-red-500 text-white p-2 rounded-md">Delete</button></td>
              </tr>
             ))}  
          </tbody>
        </table>
      </div>
      <Link to = "/total">
      <button
     
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 w-1/2 items-center flex justify-center mx-auto mt-10 rounded-3xl">Procced Checkout</button>
      </Link>
    </div>
   </>
  );
};

export default Cart;
