import React from "react";
import Cardss from "./Cardss";
import img1 from "../images/5301618.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const clickAddTutor = (e) => {
        navigate('/RegisterTeacher')
    }
    return (
        <>
            <section className="mt-14 mb-20">
                <div className="px-5 py-5">
                    <h1 className="text-center text-5xl font-semibold mb-10">
                        Finding the perfect tutor is easy
                    </h1>
                    <div className="flex justify-evenly">
                        <Cardss
                            title="Step 1"
                            desc="jbkjgvbes nfkvens jnkfskjn kjnsfvnes kjsnfkvnes kmenfginre kjfkvne mebijni vdsbebfve en."
                        />
                        <Cardss
                            title="Step 2"
                            desc="jbkjgvbes nfkvens jnkfskjn kjnsfvnes kjsnfkvnes kmenfginre kjfkvne mebijni vdsbebfve en."
                        />
                        <Cardss
                            title="Step 3"
                            desc="jbkjgvbes nfkvens jnkfskjn kjnsfvnes kjsnfkvnes kmenfginre kjfkvne mebijni vdsbebfve en."
                        />
                    </div>
                    <div className="mt-10 text-center">
                        <h1 className="text-2xl font-medium mb-3">The right fit, or it's free.</h1>
                        <h1 className="text-xl mb-5">We're so confident that you'll find a great match, we guarantee your first hour with any new tutor.</h1>
                        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:focus:ring-yellow-900 w-48">Sign Up Now</button>
                    </div>
                </div>
                <div className="mt-14 bg-orange-300">
                    <div>
                        <h1 className="text-3xl font-semibold ml-48 mb-1">Online Lessons</h1>
                        <h1 className="text-3xl font-semibold ml-48">Real-World Results</h1>
                    </div>
                    <div className="flex mt-10 mb-10 space-x-20 ml-72">
                        <div className="flex bg-slate-300 rounded-2xl px-4 py-4 text-xl w-52 hover:cursor-pointer transform transition-transform hover:scale-105">
                            <div>
                                <img src={img1} className="h-14 rounded-lg mr-4" />
                            </div>
                            <div>
                                <h1>12+ million</h1>
                                <h1>Lessons</h1>
                            </div>
                        </div>
                        <div className="flex bg-slate-300 rounded-2xl px-4 py-4 text-xl w-52 hover:cursor-pointer transform transition-transform hover:scale-105">
                            <div>
                                <img src={img1} className="h-14 rounded-lg mr-4" />
                            </div>
                            <div>
                                <h1>12+ million</h1>
                                <h1>Lessons</h1>
                            </div>
                        </div>
                        <div className="flex bg-slate-300 rounded-2xl px-4 py-4 text-xl w-52 hover:cursor-pointer transform transition-transform hover:scale-105">
                            <div>
                                <img src={img1} className="h-14 rounded-lg mr-4" />
                            </div>
                            <div>
                                <h1>12+ million</h1>
                                <h1>Lessons</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-center py-4"><span className="underline">The TutorFinder</span> our fully-featured live online tutoring platform.</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;