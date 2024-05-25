import React from "react";
import img from "../images/tutorimg.jpg";
import img1 from "../images/4944669.jpg";
import img2 from "../images/feed.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const clickAddTutor = (e) => {
        navigate('/RegisterTeacher')
    }
    return (
        <>
            <section>
                <div className="flex">
                    <div className="ml-20 w-full h-3/4 mt-32">
                        <img src={img} className="w-full h-full" alt="Image" />
                    </div>
                    <div className="ml-20 mr-20">
                        <h1 className="text-5xl font-bold mb-5">Expert tutors in every subject</h1>
                        <h1 className="text-2xl font-medium">Pear Deck Tutor replicates all the best parts of in-person tutoring — including the ability to connect face-to-face through opt-in audio and video.</h1>
                        <div className="flex mt-10">
                            <div>
                                <img src={img1} className="w-10 h-10" />
                            </div>
                            <div>
                                <h1 className="text-2xl ml-7 mb-5">“In-person” tutoring quality — online</h1>
                                <h1 className="text-xl ml-7 mb-10">With Pear Deck Tutor, students don't just get additional support — our expert tutors are well-versed in research-backed practices for positive outcomes.</h1>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <img src={img1} className="w-10 h-10" />
                            </div>
                            <div>
                                <h1 className="text-2xl ml-7 mb-5">Get prompt feedback from writing experts</h1>
                                <h1 className="text-xl ml-7">Our asynchronous Writing Lab delivers detailed feedback on writing assignments within hours. This helps students hone their writing skills and takes the endless pile of first-draft papers off teachers' already-full desks.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={clickAddTutor} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:focus:ring-yellow-900 w-48 mt-10 absolute left-1/2 transform -translate-x-1/2">Become a Tutor</button>
            </section>
            <div className="flex mt-48 mb-20">
                <div className="">
                    <img src={img2} className="ml-32 rounded-2xl"/>
                </div>
                <div className="ml-48 mr-20">
                    <h1 className="text-3xl font-semibold mb-3">Provide real-time student feedback</h1>
                    <h1 className="text-xl font-normal mb-5">Pair the data-driven insights, automated grading, and instant reports of Pear Assessment with personalized tutoring and real-time progress monitoring of Pear Deck Tutor.</h1>
                    <h1 className="text-xl font-normal mb-5">This combination allows educators to understand their students' progress in real-time, and provide immediate, personalized 1:1 tutoring support.</h1>
                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:focus:ring-yellow-900 w-48 mt-10 absolute left-1/2 transform -translate-x-1/2 ml-20">Explore the pairing</button>
                </div>
            </div>
        </>
    );
}

export default Services;