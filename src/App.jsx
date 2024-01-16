import { useState } from 'react'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  useEffect } from 'react';
import Home from './home.jsx'
import axios from 'axios';
import Project from './project.jsx';
function App() {
 

  return (
    <>
     <BrowserRouter>
    
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project" element={<Project />} />
   </Routes>
   </BrowserRouter>
  
    </>
  )
}
  

export default App
