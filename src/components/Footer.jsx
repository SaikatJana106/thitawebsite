import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <footer className=" relative z-10">
                <div className='max-w-[98%] md:max-w-[85%] text-white px-6 py-16 font-sans mx-auto'>
                    {/* Heading */}
                    {/* for footer dot go to index.css line 105 */}
                    <div className='w-full md:w-1/2'>

                        <Link to="/contact" class="mask-link text-[clamp(2rem,4vw,50rem)]" data-id="Studio" aria-label="Studio" style={{ alignSelf: 'flex-end' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span>Let's start a project</span>
                        </Link>
                        <div className="w-[85%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-10">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Zig-Zag Grid */}
                    <div className='flex flex-col mt-[5%]'>
                        <div className="flex flex-wrap justify-around min-h-fit items-start text-left max-[560px]:flex-col max-[560px]:items-center max-[560px]:text-center max-[560px]:gap-6">

                            <Link
                                to="/award"
                                className="mask-link text-[clamp(2rem,4vw,50rem)] self-end max-[560px]:self-center"
                                aria-label="Awards"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span>Awards</span>
                            </Link>

                            {/* Middle - Links */}
                            <div
                                className="flex flex-col gap-3 justify-center text-sm tracking-wide text-gray-200 md:self-center max-[560px]:items-center"
                                data-aos="fade-down"
                            >
                                <a
                                    href="/"
                                    className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >HOMEPAGE</a>
                                <a
                                    href="/about"
                                    className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >ABOUT US</a>
                                <a
                                    href="/whytheta"
                                    className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >WHY CHOOSE THETA</a>
                                <a
                                    href="/news"
                                    className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >THETA NEWS</a>
                            </div>

                            <Link
                                to="/services"
                                className="mask-link text-[clamp(2rem,4vw,50rem)] self-end max-[560px]:self-center"
                                aria-label="Services"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span>Services</span>
                            </Link>

                        </div>

                        <div className="w-full md:w-[80%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-10 self-center">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    </div>

                    <div className="flex max-[560px]:flex-col-reverse flex-row justify-around items-center gap-6 md:gap-0 mt-[5%]">
                        <p className="text-[clamp(0.75rem,1vw,0.875rem)] text-gray-300 max-w-xs text-justify">
                            Office 305, LLJ Business Centre,<br />
                            Al Jazira Sports & Cultural Club,<br />
                            Abu Dhabi, UAE
                        </p>

                        <Link
                            to="/career"
                            className="mask-link text-[clamp(2rem,4vw,50rem)] group"
                            aria-label="Careers"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <span>Careers</span>
                        </Link>
                    </div>

                    {/* Bottom Line */}
                    <div className="max-w-[90%] mx-auto mt-20 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[clamp(0.7rem,1vw,0.875rem)] text-gray-400">
                        <div className="flex flex-wrap-reverse items-center gap-3 md:gap-8 w-full md:w-1/2 justify-center">
                            <small className="text-center sm:text-left">&copy; 2025 Theta. All rights reserved.</small>
                            <div className="flex gap-4 sm:gap-6 flex-nowrap justify-center">
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                                <a href="#" className="hover:text-white">Terms of Service</a>
                                <a href="#" className="hover:text-white">Cookie Policy</a>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap justify-center">
                            <a href="#" className="hover:text-white">LinkedIn</a>
                            {/* <a href="#" className="hover:text-white">Website</a> */}
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
