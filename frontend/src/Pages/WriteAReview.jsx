import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReviewCard from "../Cards/ReviewCard" 
const WriteAReview = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/reviewdetails");
  }
  return (
    <div>
          <div className='-mt-20'> 
         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
         <div className='mt-44 flex justify-center'>
        <h1 className='text-3xl'> Write a Review </h1>
      </div>
      <div className="max-w-md mx-auto mt-10">
        <div className="bg-white shadow-xl rounded-lg p-8 dark:bg-gray-800">
          <form className="space-y-6">
            <div>
              <label htmlFor="select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Type</label>
              <select id="select" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                <option value="">Select an option</option>
                <option value="tutor">Tutor</option>
                <option value="institute">Institute</option>
              </select>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
              <input type="text" id="city" placeholder="Enter your city" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="tutorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tutor Name</label>
              <input type="text" id="tutorName" placeholder="Name of the Tutor" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="tutorPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tutor Phone Number (optional)</label>
              <input type="text" id="tutorPhone" placeholder="Tutor Phone no (optional)" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" />
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400" onClick={clickHandler}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      {/*   Recent Reviews */}
     <div className='-mt-20'>
        <ReviewCard/>
     </div>


    </div>

  )
}

export default WriteAReview;
