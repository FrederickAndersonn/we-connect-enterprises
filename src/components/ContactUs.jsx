import React from 'react';

const ContactUs = () => {
    return (
        <div id= "contact" className="flex flex-col items-center justify-center w-full h-screen">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <form className="w-full max-w-md">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message..." />
                    </div>
                </div>
                <button className="bg-[#201E1F] text-white font-bold py-2 px-4 rounded" type="button">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactUs;