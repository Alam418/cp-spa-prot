"use client";


import React, { forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import aboutImage from '../assets/media/about.jpg';

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={ref}>
      <section className="about" id="about">
        <Container>
          <Row>
          <Col md={6}>
              <h2 className="about-title">ABOUT US</h2>
            </Col>
            <Col md={6}>
              <h2 className="agoz-title" onClick={scrollToTop}>AgoZ</h2>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Image src={aboutImage} alt="About Us Image" className="about-image" />
            </Col>
            <Col>
              <div className="about-content">
                <p>
                  Quisque sed facilisis lorem. Suspendisse turpis lacus, varius sit amet eros ac, lobortis tempor dolor.
                  Quisque eros nibh, dictum at risus quis, dapibus pulvinar enim. In dapibus mi non pharetra blandit.
                  Suspendisse mollis rutrum mattis. Nam lacinia a erat non vehicula. Etiam id tincidunt lorem.
                  Vestibulum tincidunt nec eros non rutrum.
                </p>
                <p>
                  Vestibulum consequat eros et imperdiet interdum. Integer consectetur a nisl in condimentum.
                  Proin mauris nunc, hendrerit eu mattis non, lobortis at eros. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Nulla gravida neque a augue finibus tristique.
                  Sed neque nulla, bibendum eu gravida a, consequat eget lorem.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
});

// import React from 'react'
// import { Container } from 'react-bootstrap'

// export const About = () => {

//     return (
//         <section className='banner' id='home'>
//             <div className='background'/>
//             <div className='overlay'/>
//             <Container>
//                 <h1 className='tagline'>AgoZ</h1>
//                 <h1><span className='wrap'> kami asik</span></h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel condimentum neque, id ullamcorper velit. Duis non libero id ipsum consectetur facilisis.</p>
//                 <button onClick={() => console.log('connect')}>See More</button>
//             </Container>
//         </section>
//     )


// }