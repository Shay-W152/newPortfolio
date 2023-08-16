import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Transitions from './Transition';
import ModifiedProjects from './ModifiedProjects';
import Projects from './Projects';
import About from './About';

const Main = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setShowProjects(entry.isIntersecting);
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setShowAbout(entry.isIntersecting);
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const emailLinkStyle = {
    color: 'white',
    textDecoration: 'underline',
    textDecorationColor: 'white',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    
  };

  const mainStyle = {
    textAlign: 'center',
    color: 'aqua',
    fontFamily: 'Major Mono Display',
    marginTop: '50px',
    
    maxWidth: '800px',
    padding: '30px',
    background: '#2F3137',
    borderRadius: '15px',
  };

  const headingStyle = {
    fontFamily: 'Major Mono Display',
    
    
  };

  const paragraphStyle = {
    textAlign: 'center',
    marginTop:0,
   
  };

  const circleImageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const circleImageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '0 auto',
    border: '2px solid aqua',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'transform 0.3s',
    
  };

  const projectLinkStyle = {
    display: 'inline-block',
    padding: '90px',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    color: 'black',
    borderColor: 'aqua',
  };

  const projectLinkStyle2 = {
    ...projectLinkStyle,
    backgroundImage: 'url(https://i.imgur.com/zMWWb5Km.png)',
    color: 'white',
  };

  const projectLinkStyle3 = {
    ...projectLinkStyle,
    backgroundImage: 'url(https://i.imgur.com/hot03JIm.png)',
    color: 'white',
  };

  const navStyle = {
    marginBottom: '20px',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    color: 'white',
  };

  const navListStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  };

  const navListItemStyle = {
    marginRight: '10px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s ease',
  };

  const handleImageHover = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleImageLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <main style={mainStyle}>
        <h1 style={headingStyle}>Hi, I'm Shay</h1>
        <h2>{currentDateTime.toLocaleString()}</h2>
        <p style={paragraphStyle}>I Develop Accessible and Attractive Full Stack Web Applications</p>
        <Transitions>
          <header style={navStyle}>
            <nav style={navStyle}>
              <ul style={navListStyle}>
                <li style={navListItemStyle}></li>
                <li style={navListItemStyle}>
                  <Link
                    to="/resume"
                    style={navLinkStyle}
                    onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    Resume
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/modifiedprojects"
                    style={navLinkStyle}
                    onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    Projects
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/about"
                    style={navLinkStyle}
                    onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    Contact & About
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <h1 style={headingStyle}>OVERVIEW</h1>
          <div>
            <p style={paragraphStyle}>
              Welcome to my portfolio! I'm a skilled Full Stack software developer with expertise in React, Node.js,
              MongoDB, and Express.js. I have experience building scalable and user-friendly web applications. With a
              strong passion for problem-solving and a keen eye for design, I strive to deliver high-quality solutions
              tailored to meet client needs. Explore my projects and feel free to contact me to discuss how we collaborate in the future.
            </p>
            <div style={circleImageContainerStyle}>
              <a href="/resume" target="_blank">
                <img
                  src="https://i.imgur.com/hOnnquo.jpg"
                  alt="Profile"
                  style={circleImageStyle}
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                />
              </a>
            </div>
            <p style={paragraphStyle}>
              In addition to my technical skills, I possess excellent communication and collaboration abilities. I enjoy
              working in a team environment and thrive on challenges that allow me to expand my knowledge and expertise.
              Let's connect and bring your ideas to life!
            </p>
            <p style={paragraphStyle}>
  Visit my Projects tab above to explore them all! For more details, feel free to reach out to me via{' '}
  <a
    href="mailto:fwasil83@gmail.com"
    style={emailLinkStyle}
    onMouseEnter={(e) => (e.target.style.color = 'aqua')}
    onMouseLeave={(e) => (e.target.style.color = 'white')}
  >
    Email
  </a>
  , or connect with me on{' '}
  <a
    href="https://www.linkedin.com/in/shay-wasil-3bb889130/"
    style={emailLinkStyle}  // You can reuse the same style for consistency
    onMouseEnter={(e) => (e.target.style.color = 'aqua')}
    onMouseLeave={(e) => (e.target.style.color = 'white')}
    target="_blank"  // This will open the link in a new tab
    rel="noopener noreferrer"  // Recommended for security and performance reasons
  >
    LinkedIn
  </a>
  . I look forward to hearing from you!
</p>
          </div>
        </Transitions>
        <div className="project-links" ref={projectsRef}>
          {showProjects && <Projects />}
        </div>
         
        <div className="about-section" ref={aboutRef}>
          {showAbout && <About />}
        </div>
        
      </main>
    </div>
  );
};

export default Main;
