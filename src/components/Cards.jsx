import React from 'react'

const Cards = () => {
  return (
    <div id='cards'className='w-full py-[11rem] bg-white justify-center items-center flex flex-col px-8'>
        <h1 className='text-5xl font-bold mb-8'>Pricing</h1>
        <div className='w-full mx-auto grid md:grid-cols-4 gap-8'>
            <div className='w-full bg-[#CD7F32] p-8 rounded-xl my-4 border hover:scale-105 duration-300 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold mb-4'>$1500</h1>
                <div>
                    <p>E-mail Campaign</p>
                    <p>E-Mail Automation</p>
                    <p>Newsletter</p>
                    <p>SEO</p>
                    <hr className='my-4  border-white w-50%'/>
                    <p className='text-3xl font-bold text-white'>Bronze</p>
                </div>
            </div>
            <div className='w-full bg-[#B5B7BB] p-8 rounded-xl my-4 border hover:scale-105 duration-300 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold mb-4'>$2500</h1>
                <div>
                    <p className='text-white text-3xl mb-4'>Bronze +</p>
                    <p>Social Media Emp.</p>
                    <p>Content Creation</p>
                    <p>Paid Campaigns</p>
                    <p>Data Analysis</p>
                    <hr className='my-4  border-white w-50%'/>
                    <p className='text-3xl font-bold text-white'>Silver</p>
                </div>
            </div>
            <div className='w-full bg-[#C1A87D] p-8 rounded-xl my-4 border hover:scale-105 duration-300 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold mb-4'>$3500</h1>
                <div>
                    <p className='text-white text-3xl mb-4'>Silver +</p>
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>Web Analytics</p>
                    <p>Visualization</p>
                    <hr className='my-4  border-white w-50%'/>
                    <p className='text-3xl font-bold text-white'>Gold</p>
                </div>
            </div>
            <div className='w-full bg-gradient-to-r from-[#000000] to-[#7F7C7A] p-8 rounded-xl my-4 border hover:scale-105 duration-300 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold mb-4 text-white'>$5000</h1>
                <div className='text-white'>
                    <p className='text-white text-3xl mb-4'>Gold +</p>
                    <p>Expert Network ++</p>
                    <p>Market Research</p>
                    <p>Consultation</p>
                    <p>Strategy and Rec ++</p>
                    <hr className='my-4  border-white w-50%'/>
                    <p className='text-3xl font-bold text-white'>Platinum</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards