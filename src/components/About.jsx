import React from 'react';
import Transitions from './Transition';

const About = () => {
  const emailLinkStyle = {
    color: 'white',
    textDecoration: 'underline',
    transition: 'color 0.3s ease',
  };

  const hoverEmailLinkStyle = {
    ...emailLinkStyle,
    color: 'aqua',
    textDecoration: 'underline',
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <Transitions>
          <h1>Lets Connect and Collaborate</h1>
          <div style={styles.contact}>
            <p>Sheikh-Saad Wasil</p>
            <p>Jersey City, NJ</p>
            <p>
              Welcome to my website! If you have any questions or inquiries, feel free to contact me at{' '}
              <a
                href="mailto:fwasil83@gmail.com"
                style={emailLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                fwasil83@gmail.com
              </a>
              .
            </p>
            {/* LinkedIn and GitHub links */}
            <p>
              Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/shay-wasil-3bb889130/" target="_blank" style={emailLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'aqua')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}>LinkedIn</a>
            </p>
            <p>
              Check out my GitHub: <a href="https://github.com/Shay-W152" target="_blank" style={emailLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'aqua')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
              >GitHub</a>
            </p>
          </div>

          <div style={styles.aboutSection}>
            <h3>About</h3>
            <p>
              As a highly skilled software engineer specializing in front-end development, I bring a unique blend of technical
              expertise, creativity, and problem-solving abilities. With a degree in psychology and sociology, I offer a
              user-centered perspective and the ability to understand and address complex human behaviors.
            </p>
            <p>
              I thrive on overcoming challenges and finding innovative solutions, drawing from my experience as a researcher
              and my transition to front-end development. My focus is on collaborating with your team, streamlining workflows,
              and delivering efficient and aesthetically pleasing solutions. By leveraging my diverse skill set, which includes
              proficiency in JavaScript, React, Python, and HTML/CSS, I am confident in my ability to make valuable contributions
              to your organization's success.
            </p>
          </div>
          </Transitions>
        </div>
      
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Major Mono Display',
    minHeight: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color:'aqua'
  },
  contentWrapper: {
    background: '#2F3137',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '50px',  
    marginBottom: '30px',  
  },
  contact: {
    marginBottom: '30px',
  },
  aboutSection: {
    marginBottom: '30px',
  },
};


export default About;
