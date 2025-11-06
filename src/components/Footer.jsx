import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (

        <>
            {/* <footer className=" relative z-10">
                <div className='max-w-[98%] md:max-w-[85%] text-white px-6 py-16 font-sans mx-auto'>
                    <div className='w-full md:w-1/2'>

                        <Link to="/contact" class="mask-link text-[clamp(2rem,4vw,50rem)]" data-id="Studio" aria-label="Studio" style={{ alignSelf: 'flex-end' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span>Let's start a project</span>
                        </Link>
                        <div className="w-[85%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-10">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    </div>

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
                    <div className="max-w-[90%] mx-auto mt-20 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[clamp(0.7rem,1vw,0.875rem)] text-gray-400">
                        <div className="flex flex-wrap-reverse items-center gap-3 md:gap-8 w-full md:w-1/2 justify-center">
                            <small className="text-center sm:text-left">&copy; 2025 Theta. All rights reserved.</small>
                            <div className="flex gap-4 sm:gap-6 flex-nowrap justify-center">
                                <a href="#" className="hover:text-[#6927DA]">Privacy Policy</a>
                                <a href="#" className="hover:text-[#6927DA]">Terms of Service</a>
                                <a href="#" className="hover:text-[#6927DA]">Cookie Policy</a>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap justify-center">
                            <a href="#" className="hover:text-[#6927DA]">LinkedIn</a>
                            <a href="#" className="hover:text-[#6927DA]">Facebook</a>
                            <a href="#" className="hover:text-[#6927DA]">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer> */}
            <footer className="bg-white/5 text-gray-300 p-6 relative z-10">
                <div className="w-[90%] mx-auto flex justify-between items-start flex-wrap gap-10">
                    {/* ---------- Left section ---------- */}
                    <div>
                        <Link to="/" className="block w-[120px] mb-4">
                            <img
                                src="/logomain.png"
                                alt="Logo"
                                className="w-full object-contain"
                            />
                        </Link>
                        <p className="text-[15px] leading-relaxed text-gray-300 mb-6">
                            We’re the tech partner for first movers,
                            <br />
                            visionaries, & industry pioneers.
                        </p>
                        <p className="text-[14px] text-gray-400">
                            © 2025 Theta Pvt Ltd.
                        </p>
                    </div>

                    {/* ---------- Learn More ---------- */}
                    <div>
                        <h3 className="font-semibold text-white text-[16px] mb-4 uppercase">
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-2 text-gray-300">
                            <Link
                                to="/"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >Homepage</Link>
                            <Link
                                to="/services"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >Services</Link>


                            <Link
                                to="/award"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >Awards</Link>
                            <Link
                                to="/career"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >Careers</Link>
                            <Link
                                to="/news"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >News At Theta</Link>
                        </div>
                    </div>

                    {/* ---------- Company ---------- */}
                    <div >
                        <h3 className="font-semibold text-white text-[16px] mb-4 uppercase">
                            Company
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/about" className="hover:text-[#6927DA]">About Us</Link></li>
                            <li><Link to="/career" className="hover:text-[#6927DA]">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-[#6927DA]">Contact</Link></li>
                            <li><Link to="/contact" className="hover:text-[#6927DA]">Meet the team</Link></li>
                            <Link
                                to="/whytheta"
                                className="hover:text-[#6927DA] text-[clamp(0.80rem,1vw,1rem)]"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >Why Choose Theta</Link>
                        </ul>
                    </div>

                    <div>
                        <p className="max-w-xs">Office 305, LLJ Business Centre,
                            Al Jazira Sports & Cultural Club,
                            Abu Dhabi, UAE</p>
                    </div>
                </div>
                <div className="max-w-[90%] mx-auto pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[clamp(0.7rem,1vw,0.875rem)] text-gray-400">
                    <div className="flex flex-wrap-reverse items-center justify-start gap-3 md:gap-8 w-full md:w-1/2">
                        <small className="text-center sm:text-left">&copy; 2025 Theta. All rights reserved.</small>
                        <div className="flex gap-4 sm:gap-6 flex-nowrap justify-center">
                            <a href="#" className="hover:text-[#6927DA]">Privacy Policy</a>
                            <a href="#" className="hover:text-[#6927DA]">Terms of Service</a>
                            <a href="#" className="hover:text-[#6927DA]">Cookie Policy</a>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <a href="#" className="hover:text-[#6927DA]">LinkedIn</a>
                        {/* <a href="#" className="hover:text-[#6927DA]">Facebook</a>
                        <a href="#" className="hover:text-[#6927DA]">Instagram</a> */}
                    </div>
                </div>
            </footer>

        </>

    );
};

export default Footer;
