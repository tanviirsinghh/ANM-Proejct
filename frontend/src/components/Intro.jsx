import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cities = [
    'Jalandhar', 'Amritsar', 'Mohali', 'Ludhiana', 'Patiala', 'Gurdaspur', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad'
];

const Intro = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navigate to the teachers page
        navigate('/teachers'); // Use the navigate function with the desired route path
    };
    return (
        <section>
            <div className="mt-4">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-full px-2 flex items-center justify-center rounded-lg max-w-screen-xl mx-auto">
                        <div className="max-w-xl">
                            <img className="w-full rounded-xl px-6 -ml-10 mt-5" src='https://assets-global.website-files.com/64fb1ecdb172d34a9b9f0cd5/65a54afc5dbdc35e287d48e7_pear-deck-tutor-hero.webp' alt="Tutor Hero" />
                        </div>
                        <div className="w-full">
                            <div className="mb-4 text-center mt-2 text-2xl">
                                Every student has the potential to shine. Let us help you reach your brightest. Ready to take the next step?
                            </div>
                            <div className="bg-slate-600 rounded-xl py-5 px-5 mt-10">
                                <h1 className="text-3xl text-center font-medium mb-8">Find online teachers and home tutors for free</h1>
                                <div className="flex px-6 space-x-10">
                                    <input type="text"
                                        placeholder="Subject/Skill"
                                        className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4">
                                    </input>
                                    <input type="text"
                                        placeholder="Location"
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4">
                                    </input>
                                    {/* <select
                                        id="city"
                                        name="city"
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                                    >
                                        <option value="">Select a city...</option>
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    */}
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-48 px-4 py-2 rounded-lg texl-xl mb-4"
                                        onClick={handleButtonClick}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;