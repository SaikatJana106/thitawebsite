import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { IoIosArrowForward } from "react-icons/io";
import './sass/button.scss';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const toggleSubmenu = (menu) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  return (
    <>
      <div
        className="w-[85%] max-[1387px]:w-[98%] mx-auto border-b border-gray-100/10 bg-black/10 sticky top-0 z-50 backdrop-blur-sm py-1 max-w-[1400px]"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <nav className="flex items-center justify-between text-white px-6 py-4">
          {/* Logo */}
          <Link to="/" className='h-auto w-[clamp(100px,35vw,224px)]'>
            <img className='h-full w-full object-cover object-center' src="/logomain.png" alt="" />
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden min-[1200px]:flex space-x-6 items-center border border-gray-600 rounded-full px-4 py-1 text-sm">
            <Link to="/"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-[#6927DA] cursor-pointer text-xl">Homepage</Link>
            <div className="relative group">
              <button className="text-white hover:text-[#6927DA] cursor-default text-xl">
                Discover Theta
              </button>
              <div className="absolute hidden group-hover:block bg-[#1F2348] rounded shadow-lg min-w-[120px] h-auto">
                <ul>
                  <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to={"/about"} className="hover:bg-[#6927DA] text-white px-4 py-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    About Us
                    <IoIosArrowForward />
                  </Link>
                  <li  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:bg-[#6927DA] text-white px-4 py-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    Meet The Team
                    <IoIosArrowForward />
                  </li>
                  <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/whytheta" className="hover:bg-[#6927DA] text-white px-4 py-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    Why Choose Theta
                    <IoIosArrowForward />
                  </Link>
                </ul>
              </div>
            </div>

            <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to={"/services"} className="text-white hover:text-[#6927DA] cursor-pointer text-xl">Explore Services</Link>
            <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to="/contact" className="text-white hover:text-[#6927DA] cursor-pointer text-xl">Contact Us</Link>
            <div className="relative group">
              <button className="text-white hover:text-[#6927DA] cursor-default text-xl">
                Inside Theta
              </button>
              <div className="absolute hidden group-hover:block bg-[#1F2348] rounded shadow-lg min-w-[120px] h-auto">
                <ul>
                  <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/news" className="hover:bg-[#6927DA] text-white px-4 py-2 gap-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    News At Theta
                    <IoIosArrowForward />
                  </Link>
                  <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/career" className="hover:bg-[#6927DA] text-white px-4 py-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    Careers
                    <IoIosArrowForward />
                  </Link>
                  <Link  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/award" className="hover:bg-[#6927DA] text-white px-4 py-2 cursor-pointer hover:opacity-90 flex items-center justify-between whitespace-nowrap text-xl">
                    Awards
                    <IoIosArrowForward />
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="min-[1200px]:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : (
                <>
                  <span className="block w-6 h-0.5 bg-white mb-1"></span>
                  <span className="block w-6 h-0.5 bg-white mb-1"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </>
              )}
            </button>
          </div>

          {/* Get A Quote Button - Hidden on mobile */}
          <div className='hidden min-[1200px]:flex items-center justify-center'>
            <div className="scene z-50">
              <div className="cube">
                <Link
                  to="/contact" className="side top items-center justify-center gap-2 text-white " style={{ display: "inline-flex" }}>
                  <span>Get A Quote </span>
                  <ArrowUpRight className='bg-[#6927DA] rounded-full rotate-45' />
                </Link>
                <Link
                  to="/contact" className="side front mt-[8%] items-center justify-center gap-2 text-white" style={{ display: "inline-flex" }}>
                  <span>Get A Quote</span>
                  <ArrowUpRight className='bg-[#6927DA] rounded-full' />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Hidden on desktop */}
      {isOpen && (
        <div className="min-[1200px]:hidden fixed inset-0 bg-[#09093C] z-40 pt-20 px-6 overflow-y-auto h-fit pb-5">
          <div className="flex flex-col space-y-4 text-white">
            <Link
              to="/"
              className="py-3 border-b border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Homepage
            </Link>

            <div className="py-3 border-b border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubmenu('discover')}
              >
                <span>Discover Theta</span>
                <Plus className={`transition-transform ${openSubmenu === 'discover' ? 'rotate-45' : ''}`} />
              </div>
              {openSubmenu === 'discover' && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link
                    to="/about"
                    className="block py-2 hover:text-[#6927DA]"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <div className="block py-2 hover:text-[#6927DA]">
                    Meet The Team
                  </div>
                  <Link
                    to="/whytheta"
                    className="block py-2 hover:text-[#6927DA]"
                    onClick={() => setIsOpen(false)}
                  >
                    Why Choose Theta
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className="py-3 border-b border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="py-3 border-b border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            <div className="py-3 border-b border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubmenu('inside')}
              >
                <span>Inside Theta</span>
                <Plus className={`transition-transform ${openSubmenu === 'inside' ? 'rotate-45' : ''}`} />
              </div>
              {openSubmenu === 'inside' && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link
                    to="/news"
                    className="block py-2 hover:text-[#6927DA]"
                    onClick={() => setIsOpen(false)}
                  >
                    News At Theta
                  </Link>
                  <Link
                    to="/career"
                    className="block py-2 hover:text-[#6927DA]"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/award"
                    className="block py-2 hover:text-[#6927DA]"
                    onClick={() => setIsOpen(false)}
                  >
                    Awards
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                to="/contact" className="w-full bg-[#6927DA] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2">
                Get A Quote
                <ArrowUpRight className='bg-[#6927DA] rounded-full border border-white' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;