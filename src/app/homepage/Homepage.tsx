"use client"

import React, { useRef } from 'react';
import { NavBar } from '../navbar/NavBar';
import { Banner } from '../banner/Banner';
import { About } from '../about/About';

export default function Homepage() {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <NavBar onLinkClick={scrollToSection} refs={{ home: homeRef, about: aboutRef, project: projectRef, services: servicesRef, contact: contactRef }} />
            <div ref={homeRef}>
                <Banner />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
        </div>
    );
}

