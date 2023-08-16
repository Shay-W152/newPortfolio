import React, { useState } from 'react';
import Transitions2 from './Transitions2';

const Projects = () => {
  const projects = [
    {
      title: 'Tickit',
      imageUrl: 'https://i.imgur.com/VN6oMfA.png',
      link: 'http://tick-it.s3-website-us-west-1.amazonaws.com/',
      description: 'A ticket booking and e-commerce site built up with React bootstrap and DjangoRest.',
    },
    {
      title: 'Tatdood',
      imageUrl: 'https://i.imgur.com/hot03JIm.png',
      link: '',
      description: 'I created a database consisting of different styles and artists by state on mogno atlas then embedding it into a Google Map API.',
    },
    {
      title: '.nebulaNav',
      imageUrl: 'https://i.imgur.com/KjQvpOl.png',
      link: 'https://nebula-nav.netlify.app/',
      description: '.nebulaNav is an interactive starmap site built with three.js fiber allowing users to explore the wonders of the universe.',
    },
    
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    marginTop:0,
  };

  const projectLinkStyle = {
    display: 'inline-block',
    fontFamily: 'Georgia',
    height: '200px',
    padding: '20px',
    margin: '10px',
    marginTop:0,
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    color: 'aqua',
    width: '220px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const projectInfoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    opacity: hoveredProject !== null ? '1' : '0',
    transition: 'opacity 0.3s',
    color: 'aqua',
    marginTop:0,
  };

  const handleProjectHover = (index) => {
    setHoveredProject(index);
  };

  return (
    <div style={styles.container}>
      <Transitions2>
        <h1 style={styles.heading}>My Projects!</h1>
        <p style={styles.description}>
          I have a passion for building full stack applications that spark inspiration. Here are a few projects I've worked on:
        </p>
        <ul style={styles.list}>
          {projects.map((project, index) => (
            <li key={index} style={styles.listItem}>
              {project.title}: {project.description}
            </li>
          ))}
        </ul>
        <div style={carouselStyle}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              style={{
                ...projectLinkStyle,
                backgroundImage: `url(${project.imageUrl})`,
                filter: hoveredProject !== null && hoveredProject !== index ? 'blur(5px)' : 'blur(0)',
                transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredProject === index ? '4px 4px 4px aqua' : projectLinkStyle.boxShadow,
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              {hoveredProject === index && (
                <div style={projectInfoStyle}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              )}
            </a>
          ))}
        </div>
      </Transitions2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    minHeight: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop:0,
  
  },
  heading: {
    marginTop:0,
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'aqua',
  },
  description: {
    marginTop:0,
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
    color:'aqua',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop:0,
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
    color:'aqua',
    marginTop:0,
  },
};

export default Projects;
