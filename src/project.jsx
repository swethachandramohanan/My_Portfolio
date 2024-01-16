import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Project = () => {

    const navigateToGitHub = () => {
        window.location.href = "https://github.com/swethachandramohanan"; 
      };
  return (
    <div>
   <div className='container' id='Work'>
  <h2 className='text-center mb-20 mt-10 font-16'>My Works Are</h2>
  <div className='row mt-5'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      <div className='group relative overflow-hidden'>
        <img src='./ecom.jpg' className='max-w-full max-h-full object-cover img' />
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28'onClick={navigateToGitHub}>I developed a static e-commerce website with a modern and user-friendly design, incorporating responsive images, consistent spacing, and interactive hover overlays for product details.</p>
        </div>
      </div>
      <div className='group relative overflow-hidden'>
        <img src='./movie1.jpg' className='max-w-full max-h-full object-cover img1'/>
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28 'onClick={navigateToGitHub}>I designed a static version of the BookMyShow website, incorporating a user-friendly interface and seamless navigation for users to explore and book tickets for various entertainment events.</p>
        </div>
      </div>
      <div className='group relative overflow-hidden'>
        <img src='./snake.png' className='max-w-full max-h-full object-cover img'/>
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28' onClick={navigateToGitHub}>I created a simple and engaging snake game website, blending classic gameplay with modern design, offering users an enjoyable and nostalgic experience.</p>
        </div>
      </div>
     
      <div className='group relative overflow-hidden'>
        <img src='./blog.avif' className='max-w-full max-h-full object-cover img' />
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28'onClick={navigateToGitHub}>I designed and implemented a dynamic blog website featuring user authentication and registration functionalities. Users can securely create accounts, log in, and effortlessly craft and share their thoughts through personalized blogs.</p>
        </div>
      </div>

      <div className='group relative overflow-hidden'>
        <img src='./res.jpg' className='max-w-full max-h-full object-cover img' />
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-20'onClick={navigateToGitHub}>I designed and implemented a visually appealing restaurant website using HTML and CSS, showcasing my proficiency in front-end development. The website features a user-friendly interface, responsive design, and aesthetically pleasing layouts to enhance the overall dining experience for online visitors.</p>

        </div>
      </div>

      <div className='group relative overflow-hidden'>
        <img src='./tour.jpeg' className='max-w-full max-h-full object-cover img' />
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28'onClick={navigateToGitHub}>I designed and developed a captivating tourism website using HTML and CSS, showcasing my ability to create visually appealing and user-friendly online experiences for travelers and adventure seekers.</p>
        </div>
      </div>


      <div className='group relative overflow-hidden'>
        <img src='./watch.jpg' className='max-w-full max-h-full object-cover img' />
        <div className='overlay hidden group-hover:block absolute inset-0 bg-blue-500 text-white text-center  items-center justify-center' onClick={navigateToGitHub}>
          <p className='text-pretty text-lg mt-28'onClick={navigateToGitHub}>I designed and developed an elegant and user-friendly website showcasing a curated collection of luxurious watches using HTML and CSS, emphasizing a seamless blend of sophisticated aesthetics and impeccable functionality.</p>
        </div>
      </div>







    </div>
  </div>

  
 
</div>

    </div>
  );
};

export default Project;
