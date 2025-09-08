import React, { useEffect, useState } from 'react'
import experiences from '../../json/experience.json' // Assuming you have a JSON file with the experiences data
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhyTheta = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, []);
    return (
        <div className='relative z-10'>
            <section className="text-white py-16 px-6 md:px-20">
                {/* Top Headings */}
                <div className="mb-10 max-md:mb-0 max-md:text-center">
                    <h2 className="text-[clamp(1.2rem,2.6vw,50rem)] font-bold exo">Your Strategic Partner in</h2>
                    <h2 className="text-[clamp(1.2rem,2.6vw,50rem)] font-bold mt-2 exo">Digital Transformation.</h2>
                </div>

                {/* Bottom Content */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10">
                    {/* Left Image */}
                    <div className="md:w-1/2 aspect-video w-full">
                        <img
                            src="/why1.jpg"
                            alt="Team working"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="md:w-1/2  w-full">
                        {/* Horizontal Line */}
                        <div className="w-[80%] h-px bg-gray-500 mb-3 relative md:mt-10 mt-2 self-center max-md:mx-auto" data-aos="fade-right">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                        {/* Paragraph */}
                        <p className=" text-[clamp(1rem,1.3vw,50rem)] md:text-left roboto-semi max-md:text-center">
                            At Theta, solutions are not merely provided; lasting partnerships are built.
                        </p>
                    </div>
                </div>
            </section>


            <section className="text-white py-12 px-4 md:px-0">
                <div className="w-[85%] mx-auto flex flex-col items-center text-center space-y-8">
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl font-medium text-left roboto-semi" style={{ alignSelf: 'flex-start' }}>
                        {/* At Theta Tech, We Specialize In Delivering Tailored IT Solutions Designed To Meet The Unique Needs Of Each Client.
                        With A Team Of Expert Professionals Who Bring Deep Industry Experience, */}
                        The company's strength lies in its client-first approach, crafting tailored IT strategies that go beyond the standard to meet unique business objectives and deliver measurable results.
                    </p>
                    <div className="w-full md:w-[70%] overflow-hidden rounded-md shadow-lg">
                        <img
                            src="/why2.jpg"
                            alt="Buildings"
                            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </section>



            <section className="bg-[#0c041c]  min-h-screen">
                <div className='w-[85%] mx-auto text-white py-20 px-6 xl:px-24 flex flex-col xl:flex-row items-center justify-between'>
                    {/* Left Section */}
                    <div className="text-[#a050ff]  font-bold font-orbitron uppercase leading-tight text-center md:text-left xl:w-1/2"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        <p className='roboto-semi text-[clamp(3rem,4vw,50rem)]'>What Sets</p>
                        <p className='roboto-semi  text-[clamp(3rem,4vw,50rem)]'>Us Apart ?</p>
                    </div>

                    {/* Right Section */}
                    <div className=" mt-10 xl:mt-0 text-base xl:text-lg leading-relaxed text-gray-300 text-left  roboto-semi xl:w-1/2 md:w-2/3">
                        <p>
                            Deep Industry & Cross-Industry Expertise : The team comprises seasoned professionals with decades of cross-industry experience, bringing proven strategies and innovative perspectives to every challenge.<br />
                            Custom-Tailored Solutions : Bespoke solutions are prioritised over one-size-fits-all approaches. Theta actively listens, learns, and crafts strategies precisely aligned with specific business goals, ensuring tangible impact.

                        </p>
                    </div>
                </div>
                <div className='w-[85%] mx-auto flex flex-col md:flex-row items-start justify-between'>

                    <p className='roboto-semi md:w-1/2 mr-[2%] text-gray-300 text-base md:text-lg leading-relaxed my-2 text-justify max-md:text-left'>
                        Future-Ready Technology Integration : Cutting-edge technologies like AI, cloud, and automation are integrated into workflows, ensuring clients remain ahead in a rapidly evolving digital landscape.  <br />
                        Transparent & Collaborative Partnership : A commitment to clear communication and shared goals ensures clients are always informed and empowered throughout the collaborative journey.

                    </p>


                    {/* Right image content */}
                    <div className="w-full md:w-1/2 h-96 my-2">
                        <img
                            src="why3.jpg"
                            alt="Modern Office"
                            className="w-full h-full rounded-md object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#0c041c] text-white  min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/bg-pattern.png')" }}>
                <div className="flex flex-col md:flex-row gap-12 w-[85%] mx-auto">
                    {/* Left Tabs */}
                    <div className="md:w-1/2">
                        {/* <div className="text-sm md:text-base flex justify-around gap-4 relative"> */}
                        {/* <button
                                className="text-left  text-gray-100"

                            >
                                Why Theta ?
                            </button> */}
                        <h1
                            className="text-center text-2xl  text-gray-100 exo"
                        >
                            Our Core Values
                        </h1>
                        {/* Line under active tab */}

                        {/* </div> */}
                        <div className="w-full h-px bg-gray-500 mb-3 relative mt-6 md:mt-10 self-center">
                            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Right Accordion */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        {experiences.map((item, index) => (
                            <div key={index} className="border-b border-gray-700 pb-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-bold">
                                            {openIndex === index ? "×" : "+"}
                                        </span>
                                        <span className="text-lg md:text-xl exo">{item.title}</span>
                                    </div>
                                    {/* <span className="text-white font-mono font-semibold">{index + 1}</span> */}
                                </div>
                                {openIndex === index && (
                                    <p className="text-sm text-gray-300 mt-2 pl-7 roboto-semi">{item.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='h-full w-full overflow-hidden'>
                <img
                    src="/why4.jpg"
                    className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                    alt=""
                />
            </div>

        </div>
    )
}

export default WhyTheta
