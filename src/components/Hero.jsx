import React from 'react'
import LandingImage from '../assets/LandingImage.png'

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='home' className='text-white flex flex-col justify-center items-center p-x-10'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                        <h1 className='md:text-6xl font-bold text-3xl'>Welcome to WeConnect !</h1>
                        <p className='text-2xl mt-4'>Your Digital Marketing Partner.</p>
                        <button onClick={() => handleScroll('cards')} className='bg-[#201E1F] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
                </div>
        </div>
    )
}

export default Hero