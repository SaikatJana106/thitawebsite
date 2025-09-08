import React, { useEffect, useState } from 'react'
import service from '../../json/servicepage.json' // Assuming you have a JSON file with the service data
import { ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 7000 });
    }, []);

    // const texts = ["Results Driven", "Goal Oriented", "Expert Solution"];
    // const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    // const [spin, setSpin] = useState(false);

    // const handleClick = () => {
    //      Spin the image
    //     setSpin(true);

    //      Animate the text upward
    //     setIsAnimating(true);

    //     // Change the text
    //     setTimeout(() => {
    //         setIndex((prev) => (prev + 1) % texts.length);
    //         setIsAnimating(false);
    //         setSpin(false);
    //     }, 500);  Matches animation duration
    // };

    const texts = ["Empowering Your Business with ", "Goal Oriented", "Expert Solution"];
    const [index, setIndex] = useState(0);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [isAnimatingIn, setIsAnimatingIn] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleClick = () => {
        // Increase rotation by 360° each time
        setRotation((prev) => prev + 120);

        // Start text out animation
        setIsAnimatingOut(true);

        setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
            setIsAnimatingOut(false);
            setIsAnimatingIn(true);
        }, 300);

        setTimeout(() => {
            setIsAnimatingIn(false);
        }, 600);
    };


    return (
        <div className='relative  z-10'>
            {/* <section className="text-white min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6">
                <div className='w-[85%]'>
                    <div className='flex justify-start flex-col items-start'>
                        <h1
                            className={`exo text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-purple-500  transition-all duration-500 ease-in-out
          ${isAnimatingOut ? "-translate-y-5 opacity-0" : ""}
          ${isAnimatingIn ? "translate-y-5 opacity-0" : ""}
          ${!isAnimatingOut && !isAnimatingIn ? "translate-y-0 opacity-100" : ""}
        `}
                            style={{ fontFamily: "Ethnocentric" }} 
                            // font style comment it
                        >
                            {texts[index]}
                        </h1>
                        <div className='flex gap-[2%] items-center justify-center'>
                            <div className="relative w-[120px] h-[120px] mx-auto flex items-center justify-center">
                                Pulsing Radar Rings
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-0"></div>
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-500"></div>
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-1000"></div>

                                Center Image or Circle
                                <img
                                    src="/partners/circle.png"
                                    alt="circle"
                                    onClick={handleClick}
                                    style={{
                                        transform: `rotate(${rotation}deg)`,
                                        transition: "transform 0.6s ease-in-out",
                                    }}
                                    className="w-[50px] h-[50px] relative z-10"
                                />
                            </div>

                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mt-[2%] exo'
                            style={{ fontFamily: "Ethnocentric" }}
                            >Advanced Technology Solutions,</h1>
                        </div>
                    </div>
                    <div className='flex justify-end flex-col items-end'>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white exo"
                        style={{ fontFamily: "Ethnocentric" }}
                        >
                             Results-Driven for 
                        </h3>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-purple-500 mt-[2%] exo"
                        style={{ fontFamily: "Ethnocentric" }}
                        >
                          a Connected Future.
                        </h3>
                    </div>
                    <div>
                        <p className="max-w-xl mt-8 text-gray-400 text-sm sm:text-base leading-relaxed roboto-semi text-justify">
                        At Theta, technology is viewed as accessible, adaptable, and built around a client's vision. Custom solutions are created to solve real problems—faster, smarter, and more securely—across a spectrum of critical domains
                        </p>
                    </div>
                </div>
            </section> */}
            <section className="text-white min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6">
                <div className='w-[85%]'>
                    <div className='flex justify-start flex-col items-start'>
                        <h1
                            className={`exo text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-purple-500  transition-all duration-500 ease-in-out
          ${isAnimatingOut ? "-translate-y-5 opacity-0" : ""}
          ${isAnimatingIn ? "translate-y-5 opacity-0" : ""}
          ${!isAnimatingOut && !isAnimatingIn ? "translate-y-0 opacity-100" : ""}
        `}
                        // style={{ fontFamily: "Ethnocentric" }}
                        >
                            {texts[index]}
                        </h1>
                        <div className='flex gap-[2%] items-center justify-center'>
                            <div className="relative w-[120px] h-[120px] mx-auto flex items-center justify-center">
                                {/* Pulsing Radar Rings */}
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-0"></div>
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-500"></div>
                                <div className="absolute rounded-full w-[70px] h-[70px] radar-ring delay-1000"></div>

                                {/* Center Image or Circle */}
                                <img
                                    src="/partners/circle.png"
                                    alt="circle"
                                    onClick={handleClick}
                                    style={{
                                        transform: `rotate(${rotation}deg)`,
                                        transition: "transform 0.6s ease-in-out",
                                    }}
                                    className="w-[50px] h-[50px] relative z-10"
                                />
                            </div>

                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mt-[2%] exo'
                            // style={{ fontFamily: "Ethnocentric" }}
                            >Services</h1>
                        </div>
                    </div>
                    <div className='flex justify-end flex-col items-end'>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white exo"
                        // style={{ fontFamily: "Ethnocentric" }}
                        >
                            That Empowers
                        </h3>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-purple-500 mt-[2%] exo"
                        // style={{ fontFamily: "Ethnocentric" }}
                        >
                            Your Business
                        </h3>
                    </div>
                    <div>
                        <p className="max-w-xl mt-8 text-gray-400 text-sm sm:text-base leading-relaxed roboto-semi text-justify">
                            At Theta, we believe that AI should be accessible, adaptable, and built around your vision.
                            Whether you're a growing startup or a large enterprise, we create custom solutions that solve real
                            problems—faster, smarter, and more securely.
                        </p>
                    </div>
                </div>
            </section>
            <section className=" text-white min-h-screen py-10">
                <div className="w-[85%] mx-auto">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-12 leading-tight exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        ALL YOUR <br />
                        <span className="text-[#a24ff1]">TECHNOLOGICAL NEEDS</span> <br />
                        ARE COVERED RIGHT HERE
                    </h1>

                    {/* Service Items - stacked vertically below the heading */}
                    <div className='flex justify-center items-center'>
                        <div className="space-y-10">
                            {service.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 items-center  p-6 rounded-lg">
                                    {/* Left side image */}
                                    <div className='h-96 w-80  rounded-2xl'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-center rounded-2xl"
                                        />
                                    </div>

                                    {/* Right side text */}
                                    <div className="flex flex-col justify-center items-center bg-[#111124]/50 h-96 w-[clamp(20rem,25vw,96rem)] rounded-lg border border-[#9747FF] px-[2%]">
                                        <h2 className="text-[clamp(1rem,1.5vw,50rem)] font-semibold uppercase mb-4">
                                            {item.title}
                                        </h2>

                                        <div className='space-y-2'>
                                            {item.details.map((detail, i) => (
                                                <div className='flex gap-2 items-start' data-aos="zoom-in" key={i}>
                                                    <div className='bg-white h-2 w-2 rounded-full mt-2'></div>
                                                    <span className='text-[clamp(.90rem,1.1vw,50rem)] text-gray-300 text-wrap'>{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {/* <ul className="list-disc list-inside space-y-2 text-[clamp(.90rem,1.1vw,50rem)] text-gray-300">
                                            {item.details.map((detail, i) => (
                                                <li data-aos="zoom-in" key={i}>{detail}</li>
                                            ))}
                                        </ul> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className=" text-white py-12 px-4">
                <div className="w-[70%] min-w-fit m-auto">
                    <div className="bg-[#111124]/70 rounded-3xl border border-[#9747FF] min-h-fit min-w-fit  p-8 md:px-12 h-80 flex flex-col md:flex-row justify-between items-center gap-8">

                        {/* Left text section */}
                        <div className="text-left max-w-xl flex flex-col justify-around h-full">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 exo"
                            // style={{ fontFamily: "Ethnocentric" }}
                            >
                                GET A FREE <br /> CONSULTATION
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg roboto-semi">
                                Speak with our experts to discover the best solutions <br />
                                for your business – <span className="font-semibold text-white">Book Your Free Call Now</span>
                            </p>
                        </div>

                        {/* Right circle button */}
                        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative group cursor-pointer">
                            <div className="w-[clamp(200px,35vw,224px)] h-[clamp(200px,35vw,224px)] bg-gradient-to-br from-[#a24ff1] to-[#6235f5] rounded-full flex items-center justify-center text-center">
                                <div className="text-white text-sm font-semibold leading-tight flex items-center justify-between">
                                    <span className="text-2xl font-bold text-left">
                                        BOOK FREE <br />
                                        CALL</span>
                                    <ArrowUpRight className="w-12 h-12 rounded-full group-hover:rotate-45" />

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services
