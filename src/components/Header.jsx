import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    width: '100%',
     
    color: 'aqua',
    position: 'absolute',
    top: '0',
    left: '0',
    fontFamily: 'Major Mono Display',
    backgroundColor: '#181818',
  };

  const navStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  };

  const navListStyle = {
    backgroundColor: '#181818',
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const navListItemStyle = {
    margin: '0 10px',
    color: 'aqua',
    
  };

  const navLinkStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'white',
    color: 'white',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyle = {
    color: 'aqua',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navListItemStyle}>
            <Link
              to="/"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'aqua')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
          </li>
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
          {/* <li style={navListItemStyle}>
            <Link
              to="/articles"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = 'aqua')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >Published Articles
            </Link> */}
          {/* </li> */}
        </ul>
      </nav>
  </header>
  );
};

export default Header;
