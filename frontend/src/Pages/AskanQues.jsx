import React from 'react';
const AskanQues = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 bg-white border border-solid border-black rounded-lg mt-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ask a Question</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 " >Tittle</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="What's your question ? Be Specific and Unique..." />
                </div>
                <div className="mb-4">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">Discription(optional)</label>
                    <textarea id="question" name="question" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder='Add more details to get best answer'></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Topics: Start typing to search for matching topics. (Required)</label>
                    <input type="text" id="subject" name="subject" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder='Add Atleast one Topic' />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400 ">Submit Question</button>
                <footer className='mt-10'>   You'll receive an email when someone answers or comments on your question.</footer>
            </form>
        </div>
    );
};

export default AskanQues;
