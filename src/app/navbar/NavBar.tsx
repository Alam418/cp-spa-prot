"use client";

"use client";

import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

interface NavBarProps {
  onLinkClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    project: React.RefObject<HTMLDivElement>;
    services: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
}

export const NavBar: React.FC<NavBarProps> = ({ onLinkClick, refs }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivateLink = (value: React.SetStateAction<string>, ref: React.RefObject<HTMLDivElement>) => {
    setActiveLink(value);
    onLinkClick(ref);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} nav-mine>
      <Container>
        <Navbar.Brand href="#">AgoZ Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0 justify-content-evenly'>
          <Nav className="me-auto navbat-text">
            <Nav.Link
              href="#"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('home', refs.home)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('about', refs.about)}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('about', refs.about)}
            >
              Project
            </Nav.Link>
            <Nav.Link
              href="#"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('about', refs.about)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActivateLink('about', refs.about)}
            >
              Contact
            </Nav.Link>
            {/* Add more links similarly */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


// import React, { useState, useEffect } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';

// interface NavBarProps {
//   onLinkClick: (section: string) => void;
// }

// export const NavBar: React.FC<NavBarProps> = ({ onLinkClick }) => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActivateLink = (value: string) => {
//     setActiveLink(value);
//     onLinkClick(value);
//   };

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""} nav-mine>
//       <Container>
//         <Navbar.Brand href="#">AgoZ Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0 justify-content-evenly'>
//           <Nav className="me-auto navbat-text">
//             <Nav.Link href="#" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('home')}>Home</Nav.Link>
//             <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('about')}>About Us</Nav.Link>
//             <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('project')}>Project</Nav.Link>
//             <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('services')}>Services</Nav.Link>
//             <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('contact')}>Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };