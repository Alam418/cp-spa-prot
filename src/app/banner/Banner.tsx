"use client";

import React from 'react'
import { Container } from 'react-bootstrap'

export const Banner = () => {

    return (
        <section className='banner' id='home'>
            <div className='background'/>
            <div className='overlay'/>
            <Container>
                <h1 className='tagline'>AgoZ</h1>
                <h1><span className='wrap'> kami asik</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel condimentum neque, id ullamcorper velit. Duis non libero id ipsum consectetur facilisis.</p>
                <button onClick={() => console.log('connect')}>See More</button>
            </Container>
        </section>
    )


}