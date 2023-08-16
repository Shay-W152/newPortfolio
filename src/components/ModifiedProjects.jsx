import React, { useState } from 'react';
import Transitions from './Transition';
import Transitions2 from './Transitions2';

const ModifiedProjects = () => {
  const projects = [
    {
      title: 'Tickit',
      imageUrl: 'https://i.imgur.com/VN6oMfA.png',
      link: 'http://tick-it.s3-website-us-west-1.amazonaws.com/',
      description: 'A ticket booking and e-commerce site built up with React bootstrap and DjangoRest.',
    },
    {
      title: 'Forgotten Horrors',
      imageUrl: 'https://i.imgur.com/zMWWb5Km.png',
      link: 'http://space-dude.surge.sh/',
      description: 'A space-themed game built with HTML, CSS, and JavaScript.',
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
    {
      title: 'LensAcademia',
      imageUrl: 'https://i.imgur.com/HEeZ8JC.png',
      link: 'http://space-dude.surge.sh/',
      description: 'LensAcademia is an app that lets users delve into research papers. With easy browsing, search, and detailed insights, researchers can find the information they need. Powered by React.js, Bootstrap, and Pyton APIs',
    },
    // {
    //   title: 'Tatdood',
    //   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVy_a-7_ihJxAqgEX-TX2kSrNdRu5z_dfhig&usqp=CAU',
    //   link: '',
    //   description: 'I created a database consisting of different styles and artists by state on mogno atlas then embedding it into a Google Map API.',
    // },
    // {
    //   title: '.nebulaNav',
    //   imageUrl: 'https://wallpapercave.com/wp/wp6819375.jpg',
    //   link: 'https://nebula-nav.netlify.app/',
    //   description: '.nebulaNav is an interactive starmap site built with three.js fiber allowing users to explore the wonders of the universe.',
    // },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const containerStyle = {
    fontFamily: 'Major Mono Display',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'aqua',
  };

  const contentContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '1vmin',
    maxWidth: '800px',
    padding: '40px',
    margin: '40px',
    alignItems: 'flex-start',
    justifyItems: 'end',
  };

  const projectLinkStyle = {
    display: 'inline-block',
    fontFamily: 'Georgia',
    height: '250px',
    width: '250px',
    padding: '20px',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    color: 'aqua',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    gap: '20vmin',
    position: 'relative',
    overflow: 'hidden',
    transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const projectInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    opacity: hoveredProject !== null ? '1' : '0',
    transition: 'opacity 0.5s',
    background: '#2F3137',
    padding: '10px',
    borderRadius: '8px',
    color: 'aqua',
    textAlign: 'left',
    height: '280px',
    width: '280px',
  };

  const handleProjectHover = (index) => {
    setHoveredProject(index);
  };

  return (
    <div style={containerStyle}>
      <Transitions>
        <div style={contentContainerStyle}>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={() => handleProjectHover(null)}
              style={{ position: 'relative' }}
            >
              <a
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
              />
              {hoveredProject === index && (
                <div style={projectInfoStyle}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Transitions>
      <Transitions2>
      <h1>Check out my Projects!</h1>
      </Transitions2>
    </div>
  );
};

export default ModifiedProjects;
