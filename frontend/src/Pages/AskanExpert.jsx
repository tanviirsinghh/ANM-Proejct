import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AskExpCard from '../Cards/AskExpCard';

const AskanExpert = () => {

  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/AskanQues"); // Navigate to "/AskanQues" when clicked
  };

  const searchclickHandler = (e) => {
   
    e.preventDefault();
    navigate("/SearchQuesCard");
  }
  return (
    <div>
      {/* askandexpert  */}
      <div className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10  bg-gray-200">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"> Ask Learn Excel. Expert answers you can trust</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Seek guidance from our trusted experts</p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={clickHandler}>
            <div className="text-left rtl:text-right">
              <div className="  font-sans text-sm  font-semibold">Ask a Question</div>
            </div>
          </a>
          <a href="#" onClick={searchclickHandler} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left rtl:text-right" >
              <div className=" font-sans text-sm font-semibold h-5 " > Search a Question</div>    
            </div>
          </a>
        </div>
      </div>

      <AskExpCard />
    </div>
  );
};
export default AskanExpert;
