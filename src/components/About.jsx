import React from 'react';

const About = () => {
    return (
        <div id='about' className="flex flex-col items-center w-full h-screen bg-white p-20">
            <h1 className="text-2xl md:text-4xl font-bold mb-10">About Us</h1>
            <div className="w-3/4 text-center text-sm md:text-lg leading-relaxed overflow-auto max-h-full">
                <p>
                    WeConnect Enterprises is a digital marketing and global
                    consulting agency, specializing in enhancing global digital presence and
                    strategies for information-driven industries. We empower
                    entrepreneurs worldwide through tailored solutions and collaboration.
                </p>

                <br/>
                <p>
                    We are a team of passionate individuals dedicated to creating 
                    the best possible experience for our users. 
                    Our mission is to provide high-quality services that meet the needs 
                    of our customers and exceed their expectations. We believe in 
                    the power of technology to transform lives and are committed 
                    to leveraging it to create value for our customers.
                </p>
            </div>
        </div>
    );
};

export default About;