import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Header } from '../container';
import About from '../screens/about/About';
import Home from '../screens/home/Home';
import ShowBlog from '../screens/showBlog/ShowBlog';


const AllRoutes = () => {

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/show/:blogId" element={<ShowBlog/>} />
    </Routes>
    </Router>
  )
}

export default AllRoutes