import React, { useEffect, useRef, useState } from 'react';
import './home.css'; // Import your custom styles
import partners from "../../json/partners.json"
import servicedata from "../../json/service.json"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const textRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = textRef.current;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    };

    //    partners
    // const [ourpartners, setOurPartners] = useState(partners)
    // const [scrollY, setScrollY] = useState(0);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const section = document.getElementById('partners-section');
    //         if (!section) return;

    //         const { top } = section.getBoundingClientRect();
    //         const windowHeight = window.innerHeight;
    //         const sectionHeight = section.offsetHeight;

    //         const scrollProgress = Math.min(Math.max((windowHeight - top) / sectionHeight, 0), 1);
    //         setScrollY(scrollProgress);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    const [ourpartners] = useState(partners);
    const [scrollY, setScrollY] = useState(0);
    const [sectionScrollHeight, setSectionScrollHeight] = useState(3000);

    const partnersSectionRef = useRef(null);
    const topRowRef = useRef(null);

    // --- Configuration ---
    // The fixed pixel distance you want the rows to be OFFSET at the start (scrollY=0).
    const INITIAL_GAP_OFFSET = 800;
    // Multiplier for vertical scroll length
    const SCROLL_MULTIPLIER = 2.5;
    // ----------------------

    // --- EFFECT 1: Calculate the Dynamic Section Height ---
    useEffect(() => {
        if (topRowRef.current) {
            const totalRowWidth = topRowRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;

            // 1. Calculate the distance needed just to scroll the row completely out of sight (no initial gap).
            const scrollOutDistance = Math.max(totalRowWidth - viewportWidth, 0);

            // 2. The total horizontal distance the row must travel from start to end.
            // Travel = (Initial Gap) + (Scroll Out Distance).
            const totalHorizontalMovement = INITIAL_GAP_OFFSET + scrollOutDistance;

            // 3. Calculate the total vertical height needed for the animation.
            const animationHeight = totalHorizontalMovement * SCROLL_MULTIPLIER;

            // 4. Set final height: 100vh (sticky start) + animationHeight + 100vh (scroll-out)
            const finalHeight = window.innerHeight + animationHeight + window.innerHeight;

            // Use a function to ensure recalculation on window resize
            setSectionScrollHeight(Math.max(finalHeight, window.innerHeight * 3));
        }

        const handleResize = () => {
            // Setting a temporary value forces the effect to re-run and recalculate
            setSectionScrollHeight(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ourpartners, sectionScrollHeight]);


    // --- EFFECT 2: Handle Scroll and Update scrollY ---
    useEffect(() => {
        const handleScroll = () => {
            const section = partnersSectionRef.current;
            if (!section) return;

            const { top } = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;

            const scrollAreaLength = sectionHeight - windowHeight;

            const scrollProgress = Math.min(
                Math.max((windowHeight - top) / scrollAreaLength, 0),
                1
            );

            setScrollY(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // This variable represents the TOTAL distance (in + out) the rows must travel.
    const totalMoveDistance = partnersSectionRef.current
        ? Math.max(topRowRef.current.scrollWidth - window.innerWidth, 0) + INITIAL_GAP_OFFSET
        : INITIAL_GAP_OFFSET + 800; // Fallback
    //    partners

    // clients review
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const clienthandleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    // clients review


    // service


    const [serviceScrollProgress, setServiceScrollProgress] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const cardContainerRef = useRef(null);
    const [activeLetters, setActiveLetters] = useState(Array(8).fill(false));
    const letterRefs = useRef([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const [letterAnimationProgress, setLetterAnimationProgress] = useState(0);

    useEffect(() => {
        let scrollTimeout;

        const handleServiceScroll = () => {
            const section = document.getElementById('service-scroll-section');
            if (!section || !cardContainerRef.current) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScroll = section.offsetHeight - windowHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
            const progress = scrolled / totalScroll;

            setServiceScrollProgress(progress);

            // --- Define Animation Ranges ---
            const TEXT_INTRO_START = 0;
            const TEXT_INTRO_END = 0.2;
            const CARDS_SCROLL_START = TEXT_INTRO_END;
            const CARDS_SCROLL_END = 0.8;
            const TEXT_OUTRO_START = CARDS_SCROLL_END;
            const TEXT_OUTRO_END = 1;

            // Calculate letter animation progress
            const letterIntroProgress = Math.min(Math.max((progress - TEXT_INTRO_START) / (TEXT_INTRO_END - TEXT_INTRO_START), 0), 1);
            setLetterAnimationProgress(letterIntroProgress);

            // Calculate cards scroll progress
            const cardsScrollEffectiveProgress = Math.min(Math.max((progress - CARDS_SCROLL_START) / (CARDS_SCROLL_END - CARDS_SCROLL_START), 0), 1);

            const screenWidth = window.innerWidth;
            const cardContainerWidth = cardContainerRef.current.scrollWidth;
            const totalCardsTravelDistance = cardContainerWidth + screenWidth;
            const newTranslateX = screenWidth - (cardsScrollEffectiveProgress * totalCardsTravelDistance);
            setTranslateX(newTranslateX);

            // Replace the activeLetters logic with this:
            if (progress > TEXT_INTRO_END && progress < TEXT_OUTRO_START) {
                const cards = cardContainerRef.current.children;
                const updatedLetters = Array(8).fill(false); // Boolean: true = purple, false = white

                letterRefs.current.forEach((letterEl, i) => {
                    if (!letterEl) return;
                    const letterRect = letterEl.getBoundingClientRect();

                    for (let card of cards) {
                        if (!card) continue;
                        const cardRect = card.getBoundingClientRect();

                        // Check if the letter is overlapped by the card (even partially)
                        const isOverlapping =
                            letterRect.left < cardRect.right &&
                            letterRect.right > cardRect.left &&
                            letterRect.top < cardRect.bottom &&
                            letterRect.bottom > cardRect.top;

                        if (isOverlapping) {
                            updatedLetters[i] = true; // Instant purple
                            break; // No need to check other cards
                        }
                    }
                });
                setActiveLetters(updatedLetters);
            } else {
                setActiveLetters(Array(8).fill(false)); // Reset to white
            }
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        };

        window.addEventListener('scroll', handleServiceScroll);
        handleServiceScroll();
        return () => window.removeEventListener('scroll', handleServiceScroll);
    }, [servicedata]);
    // service
    const testimonials = [
        {
            name: "Matt Smith",
            role: "CEO, Infinix Technologies",
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Sarah Johnson",
            role: "CTO, TechHive",
            message:
                "Lorem Ipsum is simply dummy text of the printing industry. It has survived not only five centuries.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Daniel Brown",
            role: "Lead Designer, PixelPerfect",
            message:
                "Printing and typesetting text, ever since the 1500s. It has survived.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            name: "Emily Carter",
            role: "Marketing Manager, BrightMedia",
            message:
                "This team delivers incredible results. I’ve seen our metrics grow steadily since we partnered with them.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "James Lee",
            role: "Founder, CodeCraft",
            message:
                "Professional, creative, and efficient. Their attention to detail really impressed us.",
            image: "https://randomuser.me/api/portraits/men/71.jpg",
        },
        {
            name: "Ava Martinez",
            role: "Product Manager, NextGen Apps",
            message:
                "They understood our vision and brought it to life beautifully. Highly recommend their services!",
            image: "https://randomuser.me/api/portraits/women/50.jpg",
        },
    ];

    return (

        <div className=" ">

            {/* home start  */}
            <section className="text-white relative z-10  w-[75%]  mx-auto h-[85vh] flex flex-col justify-center">
                {/* Main Heading */}
                <h1
                    ref={textRef}
                    onMouseMove={handleMouseMove}
                    className="text-[clamp(1.5rem,5vw,50rem)] font-semibold text-[#FFFFFF] leading-tight hover-gradient-text cursor-default exo"
                    data-text={`The \nTechnology \nAdvisors`}
                    style={{ fontFamily: "Ethnocentric" }}

                >
                    The <br />
                    Technology <br />
                    Advisors
                </h1>


                {/* Horizontal Line animated by width */}
                <div
                    className="w-1/2 max-sm:w-full h-px bg-gray-500 mb-3 relative mt-6 md:mt-10"
                    data-aos="fade-right"
                >
                    <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>

                {/* Subtext */}
                <p
                    className="text-gray-300 text-[clamp(1rem,1vw,50rem)] mb-10 roboto-semi"
                    data-aos="fade-up"
                >
                    Custom AI, built around your vision. <br />
                    Fuel your business with code that thinks.
                </p>

                {/* Learn More Button */}
                <Link to="/services" className="scene mt-5">
                    <div className="cube">
                        <small className="side top font-light text-[#B555D3] text-[clamp(2rem,2.5vw,50rem)]">Learn More <span className="inline-block w-1.5 h-1.5 bg-[#FFFFFF]"></span></small>
                        <span className="side front font-light text-white text-[clamp(2rem,2.5vw,50rem)]">Learn More <span className="inline-block w-1.5 h-1.5 bg-[#B555D3]"></span></span>
                    </div>
                </Link>
            </section>
            {/* home end */}

            {/* about start */}
            <section className='max-w-[90%] md:max-w-[80%] mx-auto h-[70dvh] mt-[30px]  relative z-10'>
                <h2 className="text-[clamp(3rem,5vw,50rem)]  text-[#B555D3] exo"
                style={{ fontFamily: "Ethnocentric" }}
                >
                    About <span className="font-bold">Us</span>
                    {/* <span className="inline-block rounded-full w-4 h-4 bg-[#7D86D7]"></span> */}
                </h2>
                <div className='flex flex-col md:flex-row justify-around flex-wrap gap-10 md:gap-0'>
                    <div className="w-full md:w-1/2 text-left flex flex-col space-y-[3%]" style={{ alignSelf: 'flex-start' }}>
                        <p className="text-[clamp(1rem,1vw,50rem)] text-gray-300 leading-relaxed roboto-semi">
                            {/* Theta is a <span className="text-[#8744f7]">UAE-based</span>, Emirati-Owned IT Solutions provider, founded in <span className="text-[#8744f7]">2019</span> and headquartered in Abu Dhabi.
                            We specialize in delivering cutting-edge technology solutions across the GCC and beyond. */}
                            The Technology Advisors - Theta is a pioneering Emirati-owned IT Solutions provider, headquartered in Abu Dhabi, UAE. Since 2019, the company has specialised in delivering cutting-edge technology solutions across the GCC and beyond, empowering businesses to thrive in the digital era.
                        </p>
                        <div className="mt-4 md:mt-10">
                            <div className="w-full h-px bg-gray-500 mb-3 relative" data-aos="fade-right">
                                <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scene mt-[5%]">
                                <div className="cube">
                                    <small className="side top font-light text-[#B555D3] text-4xl">Read More <span className="inline-block w-1.5 h-1.5 bg-[#FFFFFF]"></span></small>
                                    <span className="side front font-light text-white text-4xl">Read More <span className="inline-block w-1.5 h-1.5 bg-[#B555D3]"></span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Right Section */}
                    {/* <div className="w-full md:w-1/2 text-right flex flex-col items-center justify-around pt-[2%] md:pt-0" style={{ alignSelf: 'flex-end' }}>
                        <div className='h-60 w-[clamp(1rem,25vw,50rem)] mx-auto'>
                            <img
                                className='h-fit w-fit object-center object-contain'
                                src="/logomain.png"
                                alt="Theta Logo"
                            />
                        </div>
                        <div className='w-fit'>
                            <div className="w-full h-px bg-gray-500 mb-3 relative" data-aos="fade-right">
                                <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <p className="text-[clamp(1rem,1vw,50rem)] text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-left roboto-semi" data-aos="fade-up" data-aos-delay="700" >
                                At Theta, we believe that AI should be accessible, adaptable, and built around your vision. Whether you're a growing startup or a large enterprise, we create custom solutions that solve real problems — faster, smarter, and more securely.
                            </p>
                        </div>
                    </div> */}


                    <div className="w-full md:w-1/2  flex flex-col items-center justify-around pt-[2%] md:pt-0">
                        <div className='h-40 w-48 md:h-60 md:w-80 mx-auto'>
                            <img
                                className='h-full w-full object-contain'
                                src="/logomain.png"
                                alt="Theta Logo"
                            />
                        </div>
                        <div className="w-fit">
                            <div className="w-full h-px bg-gray-500 mb-3 relative" data-aos="fade-right">
                                <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <p className="text-[clamp(1rem,1vw,50rem)] text-gray-300 leading-relaxed text-left" data-aos="fade-up" data-aos-delay="700">
                                {/* At Theta, we believe that AI should be accessible, adaptable, and built around your vision. Whether you're a growing startup or a large enterprise, we create custom solutions that solve real problems — faster, smarter, and more securely. */}
                                At Theta, we champion accessible, flexible AI tailored to your vision. Whether you're a scaling startup or a Fortune 500 company, we deliver bespoke solutions that address real business challenges—more quickly, intelligently, and securely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end  */}

            {/* service */}
            {/* <section
                id="service-scroll-section"
                className="h-[300vh] md:h-[400vh] relative text-white z-10 w-full mx-auto"
            >
                <div className="sticky top-0 h-screen overflow-hidden flex justify-center items-center">
                    <h1 className="text-[clamp(3rem,18vw,50rem)] font-black z-0 pointer-events-none select-none flex gap-1 md:gap-2">
                        {"SERVICES".split("").map((char, index) => {
                            const delay = index * 0.05;
                            let introTransform = "translateY(100vh)";
                            let introOpacity = "0";

                            if (letterAnimationProgress > delay) {
                                const letterProgress = (letterAnimationProgress - delay) / 0.3;
                                introTransform = `translateY(${(1 - Math.min(letterProgress, 1)) * 100}vh)`;
                                introOpacity = `${Math.min(letterProgress, 1)}`;
                            }

                            let outroTransform = "translateY(0)";
                            let outroOpacity = "1";

                            if (serviceScrollProgress > 0.8) {
                                const outroDelay = (7 - index) * 0.05;
                                const outroProgress = Math.min((serviceScrollProgress - 0.8) / 0.2, 1);
                                if (outroProgress > outroDelay) {
                                    const letterOutroProgress = (outroProgress - outroDelay) / 0.3;
                                    outroTransform = `translateY(${-Math.min(letterOutroProgress, 1) * 100}vh)`;
                                    outroOpacity = `${1 - Math.min(letterOutroProgress, 1)}`;
                                }
                            }

                            const combinedTransform = serviceScrollProgress > 0.8 ?
                                `${outroTransform}` :
                                `${introTransform} ${outroTransform}`;

                            const combinedOpacity = serviceScrollProgress > 0.8 ?
                                outroOpacity :
                                (serviceScrollProgress > 0.2 ? introOpacity : introOpacity);

                            return (
                                <span
                                    key={index}
                                    ref={(el) => (letterRefs.current[index] = el)}
                                    className="transition-all duration-300 ease-out"
                                    style={{
                                        transform: combinedTransform,
                                        opacity: combinedOpacity,
                                        color: activeLetters[index] ? "#B555D3" : "white",
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </h1>

                    <div
                        ref={cardContainerRef}
                        className="absolute top-1/2 left-0 -translate-y-1/2 flex gap-5 px-4 md:px-10 z-10 transition-transform duration-100"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {servicedata.map((item, i) => (
                            <div
                                key={i}
                                className={`w-[clamp(12rem,25vw,20rem)] h-[clamp(8rem,18vw,15rem)] min-h-fit relative p-6 bg-[#09093C] flex justify-center items-start flex-col rounded-xl transition-all duration-100 ease-in-out
                                ${i % 2 === 0 ? 'mb-10' : 'mt-10'}
                                ${isScrolling ? 'scale-[0.97] shadow-md shadow-transparent' : 'scale-100 shadow-xl shadow-black/60'}`}
                            >
                                <div className='flex gap-1 self-end absolute top-[10%]'>
                                    <div className='border border-[#B555D3] rounded-full p-2'>
                                        <div className='bg-[#B555D3] h-1 w-1 rounded-full'></div>
                                    </div>
                                    <small>#{i + 1}</small>
                                </div>
                                <h3 className="text-[clamp(1rem,1.5vw,50rem)] font-bold">{item.title}</h3>
                                <p className="text-[clamp(0.70rem,0.90vw,50rem)] text-gray-300 mt-2">{item.des}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <section
                id="service-scroll-section"
                className="h-[300vh] md:h-[400vh] relative text-white z-10 w-full mx-auto"
            >
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">
                    <div className='relative h-[100vh] flex justify-center items-center w-full'>
                        <h1 className="text-[clamp(3rem,18vw,50rem)] font-black z-0 pointer-events-none select-none flex gap-1 md:gap-2">
                            {"SERVICES".split("").map((char, index) => {
                                const delay = index * 0.05;
                                let introTransform = "translateY(100vh)";
                                let introOpacity = "0";

                                if (letterAnimationProgress > delay) {
                                    const letterProgress = (letterAnimationProgress - delay) / 0.3;
                                    introTransform = `translateY(${(1 - Math.min(letterProgress, 1)) * 100}vh)`;
                                    introOpacity = `${Math.min(letterProgress, 1)}`;
                                }

                                let outroTransform = "translateY(0)";
                                let outroOpacity = "1";

                                if (serviceScrollProgress > 0.8) {
                                    const outroDelay = (7 - index) * 0.05;
                                    const outroProgress = Math.min((serviceScrollProgress - 0.8) / 0.2, 1);
                                    if (outroProgress > outroDelay) {
                                        const letterOutroProgress = (outroProgress - outroDelay) / 0.3;
                                        outroTransform = `translateY(${-Math.min(letterOutroProgress, 1) * 100}vh)`;
                                        outroOpacity = `${1 - Math.min(letterOutroProgress, 1)}`;
                                    }
                                }

                                const combinedTransform = serviceScrollProgress > 0.8 ?
                                    `${outroTransform}` :
                                    `${introTransform} ${outroTransform}`;

                                const combinedOpacity = serviceScrollProgress > 0.8 ?
                                    outroOpacity :
                                    (serviceScrollProgress > 0.2 ? introOpacity : introOpacity);

                                return (
                                    <span
                                        key={index}
                                        ref={(el) => (letterRefs.current[index] = el)}
                                        className="transition-all duration-300 ease-out min-h-screen"
                                        style={{
                                            transform: combinedTransform,
                                            opacity: combinedOpacity,
                                            color: activeLetters[index] ? "#B555D3" : "white",

                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </h1>

                        <div
                            ref={cardContainerRef}
                            className="mt-[-30px]  flex gap-5 px-4 md:px-10 z-10 transition-transform duration-100 absolute bottom-0 left-0 "
                            style={{ transform: `translateX(${translateX}px)` }}
                        >
                            {servicedata.map((item, i) => (
                                <div
                                    key={i}
                                    className={`w-[320px] h-[clamp(8rem,18vw,15rem)] min-h-fit relative p-6 bg-[#09093C] flex justify-center items-start flex-col rounded-xl transition-all duration-100 ease-in-out
                                ${i % 2 === 0 ? 'mb-15' : 'mt-5'}
                                ${isScrolling ? 'scale-[0.97] shadow-md shadow-transparent' : 'scale-100 shadow-xl shadow-black/60'}`}
                                >
                                    <div className='flex gap-1 self-end absolute top-[10%]'>
                                        <div className='border border-[#B555D3] rounded-full p-2'>
                                            <div className='bg-[#B555D3] h-1 w-1 rounded-full'></div>
                                        </div>
                                        <small>#{i + 1}</small>
                                    </div>
                                    <h3 className="text-[clamp(1rem,1.5vw,50rem)] font-bold">{item.title}</h3>
                                    <p className="text-[clamp(0.70rem,0.90vw,50rem)] text-gray-300 mt-2">{item.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            {/* service */}
            {/* service */}

            {/* why Theta start #B555D3*/}
            <section className='relative z-10 text-white px-4 md:px-10 py-20'>
                <div className='max-w-[90%] md:max-w-[85%] mx-auto'>
                    <h1 className="text-[clamp(3rem,5vw,4rem)] font-light text-[#B555D3]" style={{ fontFamily: "Ethnocentric" }} data-aos="zoom-out">
                        Why Choose <br />
                        <span className="font-bold" 
                        style={{ fontFamily: "Ethnocentric" }}>Theta</span>
                        <span className='text-[#B555D3]' style={{ fontFamily: "Ethnocentric" }}> ?</span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-10 w-fit">
                        <div className="text-sm md:text-base leading-relaxed">
                            EXPERT
                            PROFESSIONALS WITH<br />
                            DEEP INDUSTRY
                            EXPERIENCE.
                        </div>
                        <div className="text-sm md:text-base leading-relaxed">
                            BUILDING LONG TERM,<br />
                            TRANSPARENT
                            PARTNERSHIPS.
                        </div>

                        <div className="text-sm md:text-base leading-relaxed">
                            COMMITTED TO
                            EXCEEDING <br /> CLIENT'S
                            EXPECTATIONS.
                        </div>

                        <div className="text-sm md:text-base leading-relaxed">
                            LEVERAGING
                            ADVANCED <br />
                            TECHNOLOGIES  FOR
                            OPTIMAL RESULTS.
                        </div>
                        <div className="text-sm md:text-base leading-relaxed">
                            DELIVERING TAILORED
                            IT <br />
                            SOLUTIONS  TO
                            MEET CLIENT'S NEEDS.
                        </div>



                        <div className="text-sm md:text-base leading-relaxed">
                            DEDICATED TO
                            UNDERSTANDING<br />
                            EACH CLIENT'S
                            UNIQUE CHALLENGES.
                        </div>
                    </div>


                    <div className="w-full md:w-[40%] h-px bg-gray-500 mb-3 relative mt-10" data-aos="fade-right">
                        <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
            {/* why Theta end  */}

            {/* our partners */}
            <section
                id="partners-section"
                ref={partnersSectionRef}
                style={{ height: `${sectionScrollHeight}px` }}
                className="relative text-white"
            >
                <div className="sticky top-[5%] h-screen flex flex-col justify-end overflow-hidden">
                    <div className="relative h-[629px]">
                        <h1 className="text-[clamp(3rem,5vw,50rem)] text-[#B555D3] text-left max-w-[85%] mx-auto exo">
                            Our <span className="font-bold exo">Partners</span>
                        </h1>
                        <div className=" inset-0">

                            {/* Top Row - Starts with gap on the left, moves left */}
                            <div
                                ref={topRowRef}
                                className="absolute top-[20%] w-full flex space-x-10"
                                style={{
                                    // Start (scrollY=0): translateX(INITIAL_GAP_OFFSET) -> Pushed right, leaving a gap on the left.
                                    // End (scrollY=1): translateX(INITIAL_GAP_OFFSET - totalMoveDistance) -> Pushed far left (off-screen).

                                    // Formula: Start Position - (Progress * Total Distance)
                                    transform: `translateX(${INITIAL_GAP_OFFSET - scrollY * totalMoveDistance}px)`,
                                    transition: 'none',
                                }}
                            >
                                {ourpartners.map((item, i) => (
                                    <div
                                        key={`top-${i}`}
                                        className="min-w-[247px] min-h-[157px] w-fit h-fit bg-[#09093C] rounded-xl flex justify-center items-center flex-shrink-0"
                                    >
                                        <img src={item.image} alt={`top-${i}`} className="h-[130px] object-contain object-center" />
                                    </div>
                                ))}
                            </div>

                            {/* Circle - Rotates */}
                            <div
                                className="absolute top-[50%] left-[50%] z-50"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${scrollY * 360 * 3}deg)`,
                                    transition: 'none',
                                }}
                            >
                                <img src="/partners/circle.png" alt="circle" className="w-[100px]" />
                            </div>

                            {/* Bottom Row - Starts with gap on the right, moves right */}
                            <div
                                className="absolute bottom-[20%] w-full flex space-x-10 justify-end"
                                style={{
                                    // Start (scrollY=0): translateX(-INITIAL_GAP_OFFSET) -> Pushed left, leaving a gap on the right.
                                    // End (scrollY=1): translateX(-INITIAL_GAP_OFFSET + totalMoveDistance) -> Pushed far right (off-screen).

                                    // Formula: Start Position + (Progress * Total Distance)
                                    transform: `translateX(${-INITIAL_GAP_OFFSET + scrollY * totalMoveDistance}px)`,
                                    transition: 'none',
                                }}
                            >
                                {ourpartners.map((item, i) => (
                                    <div
                                        key={`bottom-${i}`}
                                        className="min-w-[247px] min-h-[157px] w-fit h-fit bg-[#09093C] rounded-xl flex justify-center items-center flex-shrink-0"
                                    >
                                        <img src={item.image} alt={`bottom-${i}`} className="h-[130px] object-contain object-center" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our partners */}

            {/* client review */}
            {/* remove this div it is hidding this section review testimonial  */}
            <div className='hidden'>
                <section className="min-h-screen flex   items-center  text-white ">
                    <div className="flex flex-col justify-around h-[60dvh] max-w-full mx-auto relative">

                        {/* Title at top-left */}
                        <div className="text-[clamp(2.5rem,4vw,50rem)] text-[#B555D3] ml-[5%] exo"
                        style={{ fontFamily: "Ethnocentric" }}
                        >
                            <div className=' gap-2'>
                                <span data-aos="fade-up">What</span> <span data-aos="fade-up">Are</span><span data-aos="fade-up">They</span><br />
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <h1 className='font-bold text-[#B555D3] text-[clamp(2.5rem,4vw,50rem)] exo' data-aos="fade-up"
                                style={{ fontFamily: "Ethnocentric" }}
                                >Saying</h1> <span className="inline-block w-2 h-2 rounded-full bg-[#7D86D7] self-end mb-[1%]"></span>

                            </div>
                        </div>


                        {/* Cards container at bottom-right */}

                        <div className="self-center overflow-hidden w-full">
                            <div className="flex gap-6 pb-4 animate-infinite-scroll hover:animation-pause"
                                style={{
                                    minWidth: '900px',
                                }}>
                                {[...testimonials, ...testimonials].map((t, i) => (
                                    <div key={i} className="bg-[#0e0b29] p-6 rounded-xl min-w-[300px] max-w-[300px] min-h-fit flex-shrink-0 shadow-md">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg">{t.name}</h3>
                                                <p className="text-sm text-gray-400">{t.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300">{t.message}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* client review */}
        </div>
    );
};

export default Home;
