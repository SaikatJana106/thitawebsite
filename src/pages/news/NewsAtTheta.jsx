import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import blogData from "../../json/blog.json";
const NewsAtTheta = () => {
    // Refs for sliders
    const popularRef = useRef(null);
    const recentRef = useRef(null);
    const allArticlesRef1 = useRef(null);
    const allArticlesRef2 = useRef(null);

    // Function to scroll slider
   const scrollSlider = (ref, direction) => {
  if (!ref.current) return;

  // Find one of the child elements to get its width
  const item = ref.current.querySelector('div'); // Adjust selector if needed
  if (!item) return;

  const itemWidth = item.offsetWidth + parseInt(getComputedStyle(item).marginRight); // Include margin if any
  const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;

  ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};



    return (
        <div className='relative z-10'>
            <section className=" text-white flex justify-between items-center min-h-screen px-8 py-12 font-sans">
                <div className='w-[85%] mx-auto h-fit'>
                    {/* Header */}
                    <h1 className="text-5xl md:text-6xl font-bold text-[#B555D3] mb-10 tracking-wide text-center exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >

                        NEWS AT THETA

                    </h1>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-start justify-around gap-10">
                        {/* Left - Label */}
                        <div className="text-gray-300 text-sm">Featured</div>

                        {/* Right - Image Card */}
                        <div className="relative rounded-xl overflow-hidden w-2/4 h-96 max-md:w-full"> {/* short height */}
                            <img
                                src="/1 (13).jpg"
                                alt="AI"
                                className="w-full h-full object-cover object-center" // fills container
                            />
                            <div className="absolute bottom-4 right-4 text-right text-white">
                                <p className="text-lg font-semibold">Blog Title</p>
                                <p className="text-sm text-gray-300">Author</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" text-white px-6 md:px-16 py-16 font-sans relative overflow-hidden">
                <div className="w-[85%] mx-auto h-fit">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#B555D3] mb-4 exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        Popular Now
                    </h2>
                    <p className="text-sm text-gray-300 mb-12 max-w-2xl roboto-semi">
                        We share common trends, strategies ideas, opinions, short & long stories
                        from the team behind company.
                    </p>

                    {/* Blog Cards */}
                    <div className="relative">
                        <button
                            onClick={() => scrollSlider(popularRef, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        <div
                            ref={popularRef}
                            className="flex overflow-x-auto scrollbar-hide justify-around gap-4 md:gap-8 items-center"
                        >
                            {blogData.popular.slice(0, 2).map((blog, index) => (
                                <div key={index} className='flex flex-col items-start justify-between w-fit group'>
                                    <div className='h-80 w-80 rounded aspect-square'>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="rounded-md mb-4 h-full w-full object-center object-cover"
                                        />
                                    </div>
                                    <h3
                                        className={'text-lg font-bold mb-2 text-white group-hover:text-[#6927DA]'}
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-2 max-w-64">{blog.description}</p>
                                    <div className='flex justify-start w-full'>
                                        <button className='opacity-0 group-hover:opacity-[100%] text-[#6927DA]'>readmore</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => scrollSlider(popularRef, 'right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className=" text-white px-6 md:px-16 py-16 font-sans relative overflow-hidden">
                <div className="w-[85%] mx-auto h-fit">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#B555D3] mb-4 exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        Resent Articles
                    </h2>
                    <p className="text-sm text-gray-300 mb-12 max-w-2xl roboto-semi">
                        Here's what we've been up to recently
                    </p>

                    {/* Blog Cards */}
                    <div className="relative">
                        <button
                            onClick={() => scrollSlider(recentRef, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        <div
                            ref={recentRef}
                            className="flex overflow-x-auto gap-4 md:gap-8 pb-4 scrollbar-hide justify-between items-center"
                        >
                            {blogData.popular.map((blog, index) => (
                                <div key={index} className='flex flex-col items-start justify-between w-fit group'>
                                    <div className="group h-72 w-64 rounded aspect-square overflow-hidden relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="rounded-md h-full w-full object-center object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        />
                                    </div>

                                    <h3
                                        className={'text-lg font-bold mb-2 group-hover:text-[#6927DA]'}
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-2 max-w-64">{blog.description}</p>
                                    <div className='flex justify-start w-full'>
                                        <button className='opacity-0 group-hover:opacity-[100%] text-[#6927DA]'>readmore</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => scrollSlider(recentRef, 'right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className=" text-white px-6 md:px-16 py-16 font-sans relative overflow-hidden">
                <div className="w-[85%] mx-auto h-fit">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#B555D3] mb-4 exo"
                    // style={{ fontFamily: "Ethnocentric" }}
                    >
                        Case Studies
                    </h2>
                    <p className="text-sm text-gray-300 mb-12 max-w-2xl roboto-semi">
                        We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
                    </p>

                    {/* Blog Layout */}
                    {blogData.caseStudies.map((blog, index) => (
                        <div key={index} className="flex flex-col xl:flex-row justify-between items-center gap-6 group">
                            {/* Image */}
                            <div className="group xl:w-1/2 overflow-hidden rounded-md">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full object-cover rounded-md transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>


                            {/* Content */}
                            <div className="xl:w-1/2 h-[60vh] max-xl:h-fit flex justify-around flex-col max-xl:justify-start ">
                                <h1 className="text-[clamp(1.3rem,1.3vw,50rem)] font-bold text-[#6927DA] mb-2">
                                    {blog.title}
                                </h1>
                                <div className='justify-self-center'>
                                    <p className="text-gray-300 text-[clamp(0.80rem,0.80vw,50rem)] mb-2">{blog.description}</p>

                                    <span className="text-sm text-[#6927DA] hover:underline cursor-pointer opacity-0 group-hover:opacity-[100%]">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='min-h-screen w-[85%] mx-auto'>
                <h1 className='text-[#B555D3] text-6xl exo'
                // style={{ fontFamily: "Ethnocentric" }}
                >All Articals</h1>
                <p className='text-white roboto-semi'>We share common trands, opinions, short and long story from the team behimd company</p>
                <div className='my-[5%]'>
                    <div className="relative mb-8 md:mb-12">
                        <button
                            onClick={() => scrollSlider(allArticlesRef1, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronLeft size={24} />
                        </button>
                        <div
                            ref={allArticlesRef1}
                            className="flex overflow-x-auto gap-4 md:gap-8 justify-around items-center mb-[5%]"
                        >
                            {blogData.articales.slice(0, 2).map((blog, index) => (
                                <div key={index} className='flex flex-col items-start justify-between w-fit group'>
                                    <div className="group h-80 w-80 rounded aspect-square overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-full w-full object-cover object-center rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                                        />
                                    </div>

                                    <h3
                                        className={'text-lg font-bold mb-2 text-white group-hover:text-[#6927DA]'}
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-2 max-w-64">{blog.description}</p>
                                    <div className='flex justify-start w-full'>
                                        <button className='opacity-0 group-hover:opacity-[100%] text-[#6927DA]'>readmore</button>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => scrollSlider(allArticlesRef1, 'right')}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                            >
                                <FaChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => scrollSlider(allArticlesRef2, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        <div
                            ref={allArticlesRef2}
                            className='flex overflow-x-auto  justify-around gap-4 md:gap-8 items-center'
                        >
                            {blogData.articales.slice(2, 5).map((blog, index) => (
                                <div key={index} className='flex flex-col items-start justify-around w-fit group'>
                                    <div className="h-52 w-64 rounded aspect-square overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-full w-full object-cover object-center rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                                        />
                                    </div>

                                    <h3
                                        className={'text-lg font-bold mb-2 group-hover:text-[#6927DA] text-white'}
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-2 max-w-64">{blog.description}</p>
                                    <div className='flex justify-start w-full'>
                                        <button className='opacity-0 group-hover:opacity-[100%] hover:border-b hover:border-purple-500 border-b border-transparent text-[#6927DA]'>readmore</button>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => scrollSlider(allArticlesRef2, 'right')}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#6927DA] bg-opacity-50 rounded-full p-1 max-md:block hidden text-white  transition-colors "
                            >
                                <FaChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsAtTheta
