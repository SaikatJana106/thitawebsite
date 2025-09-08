import React from 'react'
import jobs from '../../json/career.json'
const Career = () => {
    return (
        <div className='relative z-10'>
            <section className="h-[90vh] flex justify-between items-center  text-white">
                <div className="w-[85%] mx-auto">
                    <h1 className="text-[clamp(3rem,5vw,50rem)] font-bold text-[#A259FF] mb-6 exo max-md:text-center"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >CAREERS</h1>
                    <div className="flex justify-between h-[30dvh] max-md:flex-col">
                        <p className="w-1/2 text-[clamp(1.25rem,1vw,50rem)] max-md:w-full max-md:text-center">
                            Careers At Theta. Discover Open Positions  Careers At Theta.
                        </p>
                        <div className="w-1/2 text-lg text-right flex flex-col items-start  justify-center max-md:w-full max-md:items-center" style={{ justifySelf: "end", alignSelf: "end" }}>
                            <p className='text-left text-[clamp(1.25rem,1vw+0.20rem,50rem)] max-md:text-center'>
                                Join A Community Of Creators,
                                Thinkers, And Doers
                            </p>
                            <div className="w-[53%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-[10%]">
                                <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen flex items-center  text-white ">
                <div className='max-w-[85%] mx-auto '>
                    <h2 className="text-[clamp(2rem,3vw+1rem,50rem)] font-bold text-white my-[5%] exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        WHY WORK<br />
                        AT THETA?
                    </h2>
                    <div className=" flex justify-between w-full min-h-[30dvh] max-xl:flex-col">

                        {/* Left Column */}
                        <div className="w-1/2 max-xl:w-full">

                            <p className="text-[clamp(0.80rem,1vw+0.15rem,50rem)] mb-4 leading-relaxed roboto-semi">
                                Our Culture Is Built On Collaboration, Curiosity, And A Shared Drive To Turn Bold Ideas Into Beautiful, Functional Digital Experiences.
                            </p>
                            <hr className="mt-6 border-t-[1.5px] border-white w-[90%]" />
                        </div>

                        {/* Right Column */}

                        <p className="w-1/2 text-[clamp(0.80rem,1vw+0.15rem,50rem)] leading-relaxed pl-8 roboto-semi max-xl:w-full max-xl:p-0" style={{ justifySelf: "end", alignSelf: "end" }}>
                            We’re Not Just Building Websites Or Platforms — We’re Building A Culture Where People Feel Proud Of The Work They Do And The <strong>Impact They Create.</strong>
                        </p>

                    </div>
                </div>
            </section>
            <div className=" flex justify-end overflow-hidden group w-[85%] max-xl:w-[90%] max-lg:m-auto">
                <div className="flex w-3/5 max-xl:w-3/4 max-lg:w-full">
                    {/* <img
                        src="/1 (3).jpg"
                        alt=""
                        className="h-full w-full object-cover transform transition-transform duration-300 group-hover:translate-y-10 aspect-video"
                    /> */}
                     <img
                        src="/career1.jpg"
                        alt=""
                        className="h-full w-full object-cover transform transition-transform duration-300 group-hover:translate-y-10 aspect-video"
                    />
                </div>
            </div>


            <div className=" min-h-screen text-white p-10 w-[85%] mx-auto max-lg:w-[95%]">
                <h1 className="text-[clamp(1.75rem,3vw+0.40rem,50rem)]  font-bold mb-10 exo max-lg:mb-0"
                // style={{ fontFamily: "Ethnocentric" }}
                >Open Positions (0{jobs.length})</h1>
                <div className='flex justify-end max-w-[85%]  mx-auto max-lg:w-[95%]'>
                    <div className="space-y-10">
                        {jobs.map((job, index) => (
                            <div key={index} className="border-b border-[#333] pt-10">
                                <h2 className=" font-semibold mb-3 text-[clamp(1.4rem,1.4vw,50rem)]">{job.title}</h2>
                                <ul className="mb-4">
                                    {job.languages.map((lang, i) => (
                                        <li key={i} className="flex items-center space-x-2">
                                            <span className="text-purple-400">●</span>
                                            <span>{lang}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-300 leading-relaxed mb-4 text-[clamp(1rem,1vw,50rem)]">{job.description}</p>
                                <span className="text-purple-400 font-medium cursor-pointer hover:underline">
                                    Apply Now
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
