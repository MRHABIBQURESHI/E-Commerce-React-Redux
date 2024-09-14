// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa'; // FontAwesome star icon

// function AddReviewSection() {
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     console.log('Review submitted:', { name, rating, review });
//     // Clear form after submission
//     setName('');
//     setRating(0);
//     setReview('');
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         {/* Section Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-purple-800">Add Your Review</h2>
//           <p className="text-purple-600 mt-2">We'd love to hear your feedback!</p>
//         </div>

//         {/* Review Form */}
//         <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
//           <form onSubmit={handleSubmit}>
//             {/* Name Input */}
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Rating Selection */}
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2">Rating</label>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={`h-6 w-6 cursor-pointer ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
//                     onClick={() => setRating(i + 1)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Review Textarea */}
//             <div className="mb-4">
//               <label htmlFor="review" className="block text-gray-700 text-sm font-semibold mb-2">Review</label>
//               <textarea
//                 id="review"
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//                 rows="4"
//                 className="w-full p-3 border border-gray-300 rounded"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
//             >
//               Submit Review
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddReviewSection;

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // FontAwesome star icon

function AddReviewSection() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Review submitted:', { name, rating, review , img});
    // Clear form after submission
    setName('');
    setRating(0);
    setReview('');
    setImg('');
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-800">Add Your Review</h2>
          <p className="text-purple-600 mt-2">We'd love to hear your feedback!</p>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-full mx-auto">
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

            {/* Rating Selection */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Rating</label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-8 w-8 cursor-pointer ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
            </div>

            {/* Imaage */}

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Image</label>
              <input
                type="file"
                id="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Review Textarea */}
            <div className="mb-4">
              <label htmlFor="review" className="block text-gray-700 text-sm font-semibold mb-2">Review</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
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
              Add Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddReviewSection;
