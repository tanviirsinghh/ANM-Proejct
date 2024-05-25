import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = ({ id, name, Qualification, Address, Contact, imageUrl }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-transform duration-350 hover:scale-105 flex">
      <div className="w-1/3 p-4 flex items-center">
        <img src={imageUrl} className="w-full h-auto" alt={name} />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700 mb-2">{Qualification}</p>
        <p className="text-gray-700 mb-2">{Address}</p>
        <p className="text-gray-700 mb-2">{Contact}</p>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="text-yellow-400"
            >
              ★
            </span>
          ))}
        </div>
        <Link to={`/detailsview/${id}`} className="focus:outline-none">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Teacher;
