import React, { useEffect, useState } from 'react'
import awardsData from "../../json/awards.json"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Awards = () => {
     useEffect(() => {
            AOS.init({ duration: 1000 });
        }, []);
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className='relative z-10'>
            <div className="h-[90vh] text-white flex items-center justify-center px-4">
                <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
                    {/* Left - Image */}
                    <div className="w-full md:w-1/2 p-4 aspect-video">
                        <img
                            src="/awards1.jpg"
                            alt="Award Ceremony"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right - Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left p-4 space-y-6">
                        <h1 className="text-5xl font-bold text-[#B555D3] tracking-wide exo" 
                        // style={{ fontFamily: "Ethnocentric" }}
                        >AWARDS</h1>
                        <p className="text-lg tracking-widest roboto-semi">A LEGACY OF DISTINCTION</p>
                        <div className="w-[53%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-[10%]"   data-aos="fade-right">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-white px-6 md:px-20 py-12 w-[85%] mx-auto">
                {awardsData.map((award, index) => (
                    <div
                        key={index}
                        onClick={() => handleToggle(index)}
                        className=" py-6 cursor-pointer "
                    >
                        {/* Left Column */}
                        <div className='flex flex-col md:flex-row justify-between border-b border-gray-500'>
                            <div className="mb-2 md:mb-0 text-left">
                                <h2 className="font-semibold tracking-wide">{award.title}</h2>
                                <p className="text-[clamp(0.75rem,0.90vw,50rem)]">{award.year}</p>
                            </div>

                            {/* Right Column */}
                            <div className="text-sm md:text-right max-w-xl md:w-3/5">
                                <p className='text-[clamp(0.80rem,0.90vw,50rem)]'>{award.description}</p>

                            </div>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out transform flex items-center justify-center ${activeIndex === index
                                    ? 'max-h-fit opacity-100 translate-y-0 mt-2'
                                    : 'max-h-0 opacity-0 -translate-y-2'
                                }`}
                        >
                            {/* <p className="text-gray-300 text-start text-xs">{award.subDescription}</p> */}
                            <img src={award.image} alt="" />
                        </div>

                    </div>
                ))}
            </div>

            <div className='h-fit w-[85%] mx-auto'>
                <img className='h-full w-full object-cover object-center aspect-video  ' src="/awards2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Awards
