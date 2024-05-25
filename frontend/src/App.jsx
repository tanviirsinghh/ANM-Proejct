import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login';
import Signup from './Pages/Signup';
import WriteAReview from './Pages/WriteAReview';
import FAQ from './Pages/FAQ';
import Blogsdata from './Data/Blogsdata'; 
import AskanExpert from './Pages/AskanExpert';
import { useState } from 'react';
import Teachers from './components/Teachers';
import Teacher from './components/Teacher';
import data from './Data/Teachersdata';
import DetailsView from './components/DetailsView';
import ContactUs from './Pages/ContactUs';
import RegisterTeacher from './components/RegisterTeacher';
import SingleBlog from './Pages/SingleBlog';
import Blogs from './Pages/Blogs';  // Import Blogs component
import AskanQues from './Pages/AskanQues';
import SearchQuesCard from "./Cards/SearchQuesCard";
import SingleBlogCard from './Cards/SingleBlogCard';
import ReviewDetails from './Pages/ReviewDetails';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tutor, setTutor] = useState(data);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [blogData, setBlogData] = useState(Blogsdata);  // Update state to use blogData

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AskanExpert" element={<AskanExpert />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs blogs={blogData} />} />  {/* Pass blogData */}
          <Route path="/WriteAReview" element={<WriteAReview />} />
          <Route path="/teachers" element={<Teachers tutor={tutor} />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/detailsview/:id" element={<DetailsView teachers={tutor} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/RegisterTeacher" element={<RegisterTeacher />} />
          <Route path="/SingleBlog/:id" element={<SingleBlog blogsdata={blogData} />} /> {/* Pass blogData */}
          <Route path = "/AskanQues" element = {<AskanQues/>}/>
          <Route path = "/SearchQuesCard" element = {<SearchQuesCard/>}/>
          <Route path = "/SingleBlogCard" element = {<SingleBlogCard blogsdata={blogData}/>}/>
          <Route path="/ReviewDetails" element={<ReviewDetails />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
