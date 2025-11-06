import React, { useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='relative z-10'>
            <section className=" text-white  font-sans min-h-screen flex flex-col justify-center z-10">
                <div className='max-w-[85%] mx-auto'>


                    <h2 className="text-[#B555D3] text-2xl sm:text-3xl md:text-4xl font-bold mb-10 tracking-widest exo" 
                    style={{ fontFamily: "Ethnocentric" }}
                    >
                        CONTACT US
                    </h2>

                    <div className="flex max-xl:flex-col flex-row justify-between gap-12">
                        {/* Left Content */}
                        <div className="xl:w-1/2 space-y-[20%] flex flex-col justify-between">
                            <p className="text-gray-300 leading-relaxed roboto-semi text-[clamp(1rem,1.2vw,50rem)] text-justify">
                                Have a question, project idea, or just want to chat? We'd  love to hear from you.
                                Fill out the form or reach out directly  and our team will get back to you shortly.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-4" style={{ justifySelf: 'end' }}>
                                <a href="#" className="text-white text-xl">
                                    <FaTwitter className="bg-[#1DA1F2] p-1 rounded w-8 h-8" />
                                </a>
                                <a href="#" className="text-white text-xl">
                                    <FaInstagram className="bg-[#E1306C] p-1 rounded w-8 h-8" />
                                </a>
                                <a href="#" className="text-white text-xl">
                                    <FaLinkedin className="bg-[#0e76a8] p-1 rounded w-8 h-8" />
                                </a>
                            </div>
                        </div>
                        <div className='xl:border-l border-b border-gray-600' data-aos="fade-down"></div>
                        {/* Right Content */}
                        <div className="md:w-1/2 space-y-6  pl-6">
                            <div className="flex items-start gap-4">
                                <FaBuilding className="text-white bg-gray-700 p-2 rounded-full w-10 h-10" />
                                <p className="text-gray-200 text-sm">
                                    Office 305, LLJ Business Centre, Al Jazira Sports & Cultural Club, Abu Dhabi, UAE
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-white bg-gray-700 p-2 rounded-full w-10 h-10" />
                                <p className="text-gray-200 text-sm">info@thatech.ae</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-white bg-gray-700 p-2 rounded-full w-10 h-10" />
                                <p className="text-gray-200 text-sm">+971-502570371</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Line */}
                    <div className="w-[53%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-[10%]" data-aos="fade-right">
                        <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
            <section className=" text-white py-16 px-6 md:px-24 min-h-screen z-10">
                <div className='w-[85%] max-lg:w-[98%] '>
                    <h2 className="text-[#B555D3]  font-bold mb-12 tracking-widest leading-snug uppercase exo text-2xl sm:text-3xl md:text-4xl" 
                    style={{ fontFamily: "Ethnocentric" }}
                    >
                        Get In Touch <br /> 
                        <span className='text-white'>With Our Team</span>
                    </h2>

                    <form className="bg-[#14121c] p-8 rounded-md shadow-md border border-gray-700 space-y-6 w-1/2 max-xl:w-3/4 max-lg:w-5/6 max-md:w-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Write your name."
                                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white placeholder-gray-400 py-2"
                                    required
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Company <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Write the name of your company."
                                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white placeholder-gray-400 py-2"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Write your email."
                                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white placeholder-gray-400 py-2"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+971"
                                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white placeholder-gray-400 py-2"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="2"
                                placeholder="Write your message."
                                className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-white placeholder-gray-400 py-2"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}

                        <div className='w-full flex justify-end items-end'>
                            <div className="scene">
                                <div className="cube">
                                    <small className="side top text-[#B555D3] text-2xl font-thin ">Send Enquiry <span className="inline-block w-2 h-2 bg-[#FFFFFF]"></span></small>
                                    <span className="side front text-white text-2xl font-thin mt-[8%]">Send Enquiry <span className="inline-block w-2 h-2 bg-[#B555D3]"></span></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
