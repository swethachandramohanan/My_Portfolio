import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Home = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const toggleSkills = () => {
    setShowSkills(!showSkills);
    setShowAboutMe(false); 
  };

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowSkills(false); 
  };
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const navigateToGitHub = () => {
    window.location.href = "https://github.com/swethachandramohanan"; 
  };
  return (
    <>
   <Navbar expanded={expanded} onToggle={handleToggle} bg="black" variant="dark" expand="md">

        <Container>
          <Navbar.Brand href="#Home">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" onClick={handleToggle}>Home</Nav.Link>
              <Nav.Link href="#About" onClick={handleToggle}>About</Nav.Link>
              <Nav.Link href="#Services" onClick={handleToggle}>Services</Nav.Link>
              <Nav.Link href="#Work" onClick={handleToggle}>Work</Nav.Link>
              <Nav.Link href="#Skills" onClick={handleToggle}>Skills</Nav.Link>
              <Nav.Link href="#Contact" onClick={handleToggle}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className='container-fluid' id='Home'>
  <div className='row scrol'>
    <div className='grid grid-cols-1 sm:grid-cols-2 home backdrop-blur-md md:grid-cols-2 '>
      <div className='flex items-center justify-center sm:mt-10'>
        <img
          src='./img.jpg'
          alt='Portfolio Image'
          className='object-cover h-96 rounded-full filter blur-md mb-4 sm:mb-0  '
        />
      </div>
      <div className='sm:mt-44 sm:ms-8 md:mt-32 text-slate-100'>
      <h1 className='font-semibold text-2xl sm:text-3xl md:mt-28'>Hi, I Am Swetha <span className="material-symbols-outlined waving-hand">front_hand</span></h1>
        <h3 className='text-xl sm:text-2xl'>A Mern Stack Developer</h3>
        <div className=''>
          <a href="https://github.com/swethachandramohanan" className="btn btn-primary  block sm:inline-block sm:pl-2 mb-3">Github</a>
          <a href="https://www.linkedin.com/in/swetha-a-21a287251/" className="btn btn-primary  block sm:inline-block mb-3 ">LinkedIn</a>
          <a href="./Swetha A.pdf"  download="Swetha_A_Resume.pdf" className="btn btn-primary block sm:inline-block sm:pl-2 mb-3">Resume</a>
        </div>
      </div>
    </div>
  </div>
</div>


<div className='container-fluid ' id='Services'>
  <div className='row '> 
  <h1 className='text-center mb-6 sm:mb-10 mt-6 sm:mt-10 text-lg sm:text-2xl font-16  '>My  Services</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    
    <div className='service-box bg-black mb-6 sm:mb-0' onClick={toggleAboutMe}>
        <h3 className='text-white'><span className="material-symbols-outlined">note_stack</span> Web Design</h3>
        <p className='justified-paragraph font-17 text-white'>Passionate web designer with a flair for creating visually appealing and user-friendly interfaces. Proficient in industry-standard design tools, I bring creativity and a keen eye for detail to craft engaging online experiences. Committed to staying abreast of design trends and collaborating seamlessly with cross-functional teams for impactful web solutions.</p>
      </div>
      
      <div className='service-box ms-0 sm:ms-6 bg-black' onClick={toggleAboutMe}>
        <h3 className='text-white'><span className="material-symbols-outlined">view_cozy</span> UI/UX Designer</h3>
        <p className='justified-paragraph font-17 text-white'>Passionate UI/UX designer with a keen eye for aesthetic and functional design. Committed to creating intuitive and delightful user experiences through thoughtful research, creative problem-solving, and collaboration. Enthusiastic about translating user needs into visually appealing and user-friendly digital solutions.</p>
      </div> 
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-10'>

<div className='service-box bg-black mb-6 sm:mb-0 box2' onClick={toggleAboutMe}>
  <h3 className='text-white'><span className="material-symbols-outlined">cases</span> Web Development</h3>
  <p className='justified-paragraph text-white font-17'>As a web developer, I specialize in creating dynamic and user-centric websites. Proficient in front-end technologies like HTML, CSS, and JavaScript, I bring a keen eye for design and a commitment to delivering seamless and responsive web experiences. Constantly evolving with the latest industry trends, I strive to craft innovative and efficient solutions for clients.</p>
</div>

<div className='service-box ms-0 sm:ms-6 bg-black box' onClick={toggleAboutMe}>
  <h3 className='text-white'><span className="material-symbols-outlined">web_stories</span> Brand & Logo Design</h3>
  <p className='justified-paragraph text-white font-17'>Passionate brand and logo designer with a keen eye for visual storytelling. Committed to crafting unique identities that resonate and leave a lasting impression. Bringing creativity and precision to every project for a brand that stands out. I strive to leave a lasting impression that aligns with the identity and vision of the brands I work with.</p>
</div>
</div>
</div>
</div>



<div className='container' id='About'>
  <div className='row mt-20'>
    <div className='grid grid-cols-1 sm:grid-cols-4'>
      
      <div className='order-last sm:order-first col-span-3'>
        <h3 className='text-center mt-10 font-16'>About me</h3>
        <p className='mt-3 justified-paragraph font-19'>The Enthusiastic and detail-oriented Computer Science graduate with a passion for problem-solving and a solid foundation in programming languages. Eager to apply academic knowledge and embrace new challenges in the dynamic field of technology.</p>
        <p className='justified-paragraph font-19'>Feel free to explore my portfolio to get a closer look at some of the projects I've worked on. I'm excited about the prospect of contributing to innovative projects and making a meaningful impact in the world of technology.</p>
        <p className='mt-5 justified-paragraph font-19'>A quick learner with excellent problem-solving skills and a passion for staying updated with emerging technologies. Proven ability to work collaboratively in a team and effectively communicate technical concepts. Seeking opportunities to contribute to dynamic projects and leverage my skills to drive success in the field of computer science.</p>
        <p className='font-19'>Let's connect and explore how I can contribute to your team or project!</p>
      </div>

      <div className='sm:order-last sm:order-first col-span-1 mx-auto'>
        <img src='./center.png' className='h-96 mb-5 sm:mt-16 sm:mb-0' alt='Profile Image'/>
      </div>

     
      
    </div>
  </div>
</div>



<div className='container-fluid bg-black ' id='Skills'>
  <div className='row mt-10'>
    <h2 className='title text-center mt-10 font-16 text-white '>My skills</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='text-center mt-4 sm:mt-28'>
        <h3 className='font-21 text-white'>
          My creative skills & experiences.
        </h3>
        <h6 className='font-21 underline text-white'>
          What I know
        </h6>
      </div>
      <div className='ms-0 sm:ms-28'>
        <section className="skills" id="skills">
          <div className="max-w-full sm:max-w-md">
            <div className="skills-content">
              <div className="column left">
                <div className="text">.</div>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info text-white">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info text-white">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info text-white">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info text-white">
                    <span>React</span>
                    <span>70%</span>
                  </div>
                  <div className="line php"></div>
                </div>
                <div className="bars">
                  <div className="info text-white">
                    <span>Java</span>
                    <span>80%</span>
                  </div>
                  <div className="line mysql"></div>
                </div>
                <div className="bars">
                  <div className="info text-white">
                    <span>C,C++</span>
                    <span>70%</span>
                  </div>
                  <div className="line php mb-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>


<div className='container' id='Work'>
  <h2 className='text-center mb-20 mt-10 font-16'>My Latest Work</h2>
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
    </div>
  </div>
  <div className='row'>
  <div className='grid grid-cols-5'>
  <Link to="/project" className="btn btn-primary  block sm:inline-block mb-3">See More</Link>
  </div>
  </div>
</div>




<div className='container mb-40 mt-32' id='Contact'>
  <div className='row'>   
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='education-box'>
        <h2 className='mt-10 font-16 mb-12'>Education</h2>
        <div className='justify-items-center'>
          <section className="contact" id="contact">
            <div className="max-width">
              <div className="contact-content">
                <div className="column left">
                  <div className="icons">
                    <div className="row">
                      <i className="fas fa-user"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <div>
                            <h5 className='font-21'>
                              <i className="bi bi-dot"></i> Bachelor's Degree in Computer Science
                            </h5>
                            <h6 className='font-21 ms-4'>Jawahalal College of engineering and technology | 2023 passout</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <div>
                            <h5 className='font-21'>
                              <i className="bi bi-dot"></i> Higher Secondary Education
                            </h5>
                            <h6 className='font-21 ms-4'>G.H.S.S Cherpulassery | 2019 passout</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <i className="fas fa-envelope"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <div>
                            <h5 className='font-21'>
                              <i className="bi bi-dot"></i> Higher School Education
                            </h5>
                            <h6 className='font-21 ms-4'>G.H.S.S Vellinezhi | 2017 passout</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='education-box md:ms-4'> 
        <h2 className='title text-center mt-10 font-16 mb-12'>Contact Me</h2>
        <h2 className='text title text-center font-20'>Get in Touch</h2>
        <div className='justify-items-center'>
          <section className="contact" id="contact">
            <div className="max-width">
              <p className='font-21 text-center'>Get in touch with me!</p>
              <div className="contact-content">
                <div className="column left">
                  <div className="icons">
                    <div className="row">
                      <i className="fas fa-user"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <span className="material-symbols-outlined text-center md:ms-56">person</span>
                          <h6 className='font-21'>Swetha A</h6>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <span className="material-symbols-outlined md:ms-56">location_on</span>
                          <h6 className='font-21'>Vellinezhi, Palakkad, Kerala</h6>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <i className="fas fa-envelope"></i>
                      <div className="info">
                        <div className="sub-title flex items-center">
                          <span className="material-symbols-outlined md:ms-56">mail</span>
                          <h6 className='font-21'>swethamohan3725@gmail.com</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>







<footer className='footer'>
  <div className="container">
    <p className="text-center">Created By Swetha A</p>
  </div>
</footer>




        
     
    </>
  );
};

export default Home;
