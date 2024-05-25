import React, { useState } from 'react';

const ReviewDetails = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleDoubleClick = () => {
    setRating(0); // Deselect all stars on double-click
  };
  return (
    <div>
      <div className='w-1/2 mx-auto h-[500px] bg-white shadow-lg border-2  mt-48 flex flex-col  items-center gap-10'>

          <h2>Submit your Review</h2>
          <div>
         <p>Your rating</p>
          </div>
          <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            onClick={() => handleRating(star)}
            onDoubleClick={handleDoubleClick}
            className={`text-4xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            ★
          </span>
          ))}
        </div>
          <div>
                 <input type="text" placeholder='Describe Your Experience'  className='h-[100px] w-[400px]  border-2 flex items-center justify-center' />
          </div>
          <button className='border bg-blue-400 p-2 w-44 rounded-md'>
            Continue
          </button>
       </div>
    </div>
  )
}

export default ReviewDetails
