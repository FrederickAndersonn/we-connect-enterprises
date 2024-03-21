import React from 'react'

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='home' className='text-white flex flex-col justify-center items-center px-10'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                        <h1 className='md:text-6xl font-bold text-2xl mb-4'>Welcome to WeConnect !</h1>
                        <p className='text-1xl mt-4 mb-4'>Your Digital Marketing and Global On-demand Knowledge Partner.</p>
                        <button onClick={() => handleScroll('cards')} className='bg-[#201E1F] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
                </div>
        </div>
    )
}

export default Hero