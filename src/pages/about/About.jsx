import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import teamMembers from "../../json/team.json";
import AOS from "aos";
import "aos/dist/aos.css";
import sections from "../../json/aboutsection.json";
import certificates from '../../json/certificate.json';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Bottom scroll progress animation
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const scrollStartOffset = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    scrollStartOffset.current = container.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollRelativeToStickPoint = currentScrollY - scrollStartOffset.current;
      const animationScrollLength = container.parentElement.offsetHeight - windowHeight;

      if (animationScrollLength <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress = scrollRelativeToStickPoint / animationScrollLength;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clampedProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for animated paths
  const cardRef = useRef(null);
  const cardAnimatedPathRef = useRef(null);
  const descRef = useRef(null);
  const missionAnimatedPathRef = useRef(null);
  const goalsAnimatedPathRef = useRef(null);

  const pathRef = useRef(null);
  const missionPathRef = useRef(null);
  const goalsToTeamPathRef = useRef(null);

  const missionTextRef = useRef(null);
  const stabilityCardRef = useRef(null);
  const goalsHeadingRef = useRef(null);
  const teamSectionRef = useRef(null);

  // Animation trackers
  const imageAnimated = useRef(false);
  const missionAnimated = useRef(false);
  const goalsAnimated = useRef(false);

  // Debounce function for resize events
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Draw connecting paths with scroll position
  const drawImageToTextLine = () => {
    if (!cardRef.current || !descRef.current || !pathRef.current) return;

    const card = cardRef.current.getBoundingClientRect();
    const desc = descRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    const startX = card.right - window.innerWidth * 0.1;
    const startY = card.bottom + scrollY - 100;
    const endX = desc.left + window.innerWidth * 0.2;
    const endY = desc.top + scrollY;

    const cornerRadius = 40;
    const midY1 = startY + 60;
    const midX = endX - window.innerWidth * 0.15;
    const midY2 = endY - 60;

    const d = `
      M ${startX} ${startY}
      L ${startX} ${midY1 - cornerRadius}
      Q ${startX} ${midY1}, ${startX - cornerRadius} ${midY1}
      L ${midX + cornerRadius} ${midY1}
      Q ${midX} ${midY1}, ${midX} ${midY1 + cornerRadius}
      L ${midX} ${midY2 - cornerRadius}
      Q ${midX} ${midY2}, ${midX + cornerRadius} ${midY2}
      L ${endX + window.innerWidth * 0.5 - cornerRadius} ${midY2}
      Q ${endX + window.innerWidth * 0.5} ${midY2}, ${endX + window.innerWidth * 0.5} ${midY2 + cornerRadius}
    `;

    pathRef.current.setAttribute("d", d);
    cardAnimatedPathRef.current.setAttribute("d", d);
    animatePath(cardAnimatedPathRef);
  };

  const drawMissionToStabilityLine = () => {
    if (!missionTextRef.current || !stabilityCardRef.current || !missionPathRef.current) return;

    const mission = missionTextRef.current.getBoundingClientRect();
    const stability = stabilityCardRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    const startX = mission.left + mission.width / 2;
    const startY = mission.bottom + scrollY - 80;
    const endX = stability.left + stability.width / 2;
    const endY = stability.top + scrollY;

    const cornerRadius = 40;
    const initialDrop = startY + 100;
    const horizontalExtent = endX + window.innerWidth * 0.6;
    const finalApproachHeight = endY - 100;

    const d = `
      M ${startX} ${startY}
      L ${startX} ${initialDrop - cornerRadius}
      Q ${startX} ${initialDrop}, ${startX + cornerRadius} ${initialDrop}
      L ${horizontalExtent - cornerRadius} ${initialDrop}
      Q ${horizontalExtent} ${initialDrop}, ${horizontalExtent} ${initialDrop + cornerRadius}
      L ${horizontalExtent} ${finalApproachHeight - cornerRadius}
      Q ${horizontalExtent} ${finalApproachHeight}, ${horizontalExtent - cornerRadius} ${finalApproachHeight}
      L ${endX + cornerRadius} ${finalApproachHeight}
      Q ${endX} ${finalApproachHeight}, ${endX} ${finalApproachHeight + cornerRadius}
      L ${endX} ${endY}
    `;

    missionPathRef.current.setAttribute("d", d);
    missionAnimatedPathRef.current.setAttribute("d", d);
    animatePath(missionAnimatedPathRef);
  };

  const drawGoalsToTeamLine = () => {
    if (!goalsHeadingRef.current || !teamSectionRef.current || !goalsToTeamPathRef.current) return;

    const goals = goalsHeadingRef.current.getBoundingClientRect();
    const team = teamSectionRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    const startX = goals.left + goals.width / 2;
    const startY = goals.bottom + scrollY - 80;
    const endX = team.left + team.width / 2;
    const endY = team.top + scrollY;

    const cornerRadius = 40;
    const verticalDrop = startY + 100;
    const horizontalRun = endX - window.innerWidth * 0.15;

    const d = `
      M ${startX} ${startY}
      L ${startX} ${verticalDrop - cornerRadius}
      Q ${startX} ${verticalDrop}, ${startX - cornerRadius} ${verticalDrop}
      L ${horizontalRun + cornerRadius} ${verticalDrop}
      Q ${horizontalRun} ${verticalDrop}, ${horizontalRun} ${verticalDrop + cornerRadius}
      L ${horizontalRun} ${endY - cornerRadius}
    `;

    goalsToTeamPathRef.current.setAttribute("d", d);
    goalsAnimatedPathRef.current.setAttribute("d", d);
    animatePath(goalsAnimatedPathRef);
  };

  const animatePath = (ref) => {
    const path = ref.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = 'none';
    path.getBoundingClientRect();

    requestAnimationFrame(() => {
      path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      path.style.strokeDashoffset = '0';
    });
  };

  const observeAndAnimateOnce = (targetRef, drawFn, animatedPathRef, animatedFlagRef) => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !animatedFlagRef.current) {
          drawFn();
          animatePath(animatedPathRef);
          animatedFlagRef.current = true;
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(targetRef.current);
  };

  // Handle resize and scroll events
  useEffect(() => {
    const handleResize = () => {
      drawImageToTextLine();
      drawMissionToStabilityLine();
      drawGoalsToTeamLine();
    };

    const debouncedHandleResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedHandleResize);

    // Also redraw on scroll to ensure paths stay connected
    const handleScroll = () => {
      if (imageAnimated.current) drawImageToTextLine();
      if (missionAnimated.current) drawMissionToStabilityLine();
      if (goalsAnimated.current) drawGoalsToTeamLine();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial animations
  useEffect(() => {
    observeAndAnimateOnce(descRef, drawImageToTextLine, cardAnimatedPathRef, imageAnimated);
    observeAndAnimateOnce(stabilityCardRef, drawMissionToStabilityLine, missionAnimatedPathRef, missionAnimated);
    observeAndAnimateOnce(teamSectionRef, drawGoalsToTeamLine, goalsAnimatedPathRef, goalsAnimated);
  }, []);

  return (
    <div className="relative z-10 text-white">
      {/* Animated connecting paths */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          stroke="#B555D3"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />
        <path
          ref={cardAnimatedPathRef}
          stroke="#EC4899"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />

        <path
          ref={missionPathRef}
          stroke="#B555D3"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />
        <path
          ref={missionAnimatedPathRef}
          stroke="#EC4899"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />

        <path
          ref={goalsToTeamPathRef}
          stroke="#B555D3"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />
        <path
          ref={goalsAnimatedPathRef}
          stroke="#EC4899"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="hidden md:block"
        />
      </svg>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-[clamp(1.5rem,3vw+3px,50rem)] leading-tight font-bold text-[#B555D3] tracking-wide uppercase mb-6 exo"
          // style={{ fontFamily: "Ethnocentric" }}
          >
            Know More About<br />Our Journey
          </h1>
          <h2 className="text-xl md:text-2xl mb-4">About Theta</h2>

          <div
            className="w-[80%] h-px bg-gray-500 mb-3 relative mt-6 md:mt-10"
            style={{
              animation: 'expand-from-center 1s ease-out forwards',
            }}
          >
            {/* Right end dot */}
            <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>

            {/* Left end dot */}
            <div className="w-1 h-1 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
          </div>

          <p className="text-[clamp(0.60rem,1vw+3px,50rem)] leading-relaxed text-gray-300 roboto-semi">
            Theta Tech is a UAE-based, Emirati-Owned IT Solutions provider, founded in 2019 and headquartered in Abu Dhabi. <br /> We specialise in delivering
            cutting-edge technology solutions across the GCC and beyond.

          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="min-h-screen max-w-[90%] md:max-w-[85%] mx-auto">
        <section className="py-12 md:py-20 relative z-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-[clamp(2rem,3vw+5px,50rem)] font-bold text-[#B555D3] uppercase tracking-wide mb-6 exo max-md:text-center"
              //  style={{ fontFamily: "Ethnocentric" }}
              >
                Behind the<br />Success
              </h1>
              <div
                className="w-1/2 h-px bg-gray-500 mb-3 relative mt-6 md:mt-10"
                data-aos="fade-right"
              >
                <div className="w-1 h-1 bg-white rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
              <h2 className="text-[clamp(1.2rem,1.5vw,50rem)] text-[#6927DA] font-medium mb-4">
                Founders and Expertise
              </h2>
              <p className="text-gray-300 text-[clamp(1rem,1vw,50rem)] leading-relaxed">
                <span className="font-semibold text-white roboto-semi">Founded by</span>{" "}industry veterans with over 75 years of collective experience across Asia, the GCC, and Europe, 

               Theta brings unparalleled local market understanding and global expertise to every project.
              </p>
            </div>
            <div
              ref={cardRef}
              className="order-1 md:order-2 rounded-2xl overflow-hidden border border-gray-600 w-full max-w-md mx-auto"
            >
              <img
                src="/1 (1).jpeg"
                alt="Founder's portrait"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 relative z-10">
          <div ref={descRef}>
            <div className="px-6 py-16 text-center">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
                  <p className="text-[clamp(1rem,1.2vw,50rem)]">
                    <span className="text-[#6927DA] font-medium text-[clamp(1rem,1.2vw,50rem)] roboto-semi">The company's vision</span> is to be the UAE's leading technology innovator, empowering organisations with cutting-edge solutions in AI, Cybersecurity, and Digital Transformation, aligning with the UAE's commitment to a sustainable, digitally advanced future.
                  </p>
                </div>

                <div className="w-full h-px bg-gray-600" />

                <div className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  <p className="text-[clamp(1rem,1.2vw,50rem)]" ref={missionTextRef}>
                    <span className="text-[#6927DA] font-medium text-[clamp(1rem,1.2vw,50rem)] roboto-semi">It's mission</span> deliver pioneering technology solutions, blending advanced technologies with local insights to enable clients to thrive in a dynamic, competitive world, while supporting the nation's goal of becoming a global tech hub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Goals Section */}
      <div className="px-4 md:px-6 text-white relative z-10">
        <div className="max-w-[90%] md:max-w-[80%] mx-auto">
          <h2
            ref={goalsHeadingRef}
            className="text-[clamp(1.5rem,4vw,50rem)] font-bold text-[#B555D3] uppercase tracking-wide text-left mb-8 md:mb-16 exo"
          >
            HOW WE DEFINE OUR <br />GOALS AT THETA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div
              ref={stabilityCardRef}
              className="bg-[#151533] border border-gray-700 rounded-xl p-6 h-fit w-full max-w-xs mx-auto space-y-4"
            >
              <ShieldCheck className="mx-auto text-[#6927DA]" size={32} />
              <h3 className="text-lg font-semibold exo">STABILITY</h3>
              <p className="text-base md:text-lg text-gray-300 text-start roboto-semi">
                We build robust, reliable solutions that ensure seamless operations and long-term growth, helping businesses thrive in evolving markets.
              </p>
            </div>

            <div className="bg-[#151533] border border-gray-700 rounded-xl h-fit w-full max-w-xs mx-auto p-6 space-y-4">
              <ShieldCheck className="mx-auto text-[#6927DA]" size={32} />
              <h3 className="text-lg font-semibold exo">SECURITY</h3>
              <p className="text-base md:text-lg text-gray-300 text-start roboto-semi">
                In today's interconnected world, security is paramount. At Theta Tech, we are committed to delivering cutting-edge cybersecurity.
              </p>
            </div>

            <div
              ref={goalsHeadingRef}

              className="bg-[#151533] border border-gray-700 rounded-xl p-6 h-fit w-full max-w-xs mx-auto space-y-4">
              <ShieldCheck className="mx-auto text-[#6927DA]" size={32} />
              <h3 className="text-lg font-semibold exo">CONTINUITY</h3>
              <p className="text-base md:text-lg text-gray-300 text-start roboto-semi">
                Business continuity is at the heart of our strategy. We design solutions that enable organisations to adapt, recover, and thrive during disruptions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-8 md:py-12 px-4 text-white relative z-10">
        <h2 className="text-center text-[clamp(1.2rem,2vw,50rem)] font-extrabold text-[#B555D3] tracking-wide mb-6 md:mb-10 uppercase exo">
          Our Team, Our Strength
        </h2>
        <div
          ref={teamSectionRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto px-2 pb-4 snap-x snap-mandatory"
        >
          <style>
            {`::-webkit-scrollbar { display: none; }`}
          </style>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-black rounded-lg overflow-hidden group min-w-[200px] md:min-w-[250px] max-w-[200px] md:max-w-[250px] flex-shrink-0 snap-center"
            >
              <div className="group overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[250px] md:h-[300px] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-base md:text-lg font-semibold group-hover:mb-[2%]">{member.name}</h3>
                <p className="text-xs md:text-sm text-gray-300">{member.role}</p>
              </div>
              <div className="absolute bottom-[-50px] left-0 w-full flex justify-center space-x-4 text-white bg-black/70 text-lg opacity-0 group-hover:bottom-4 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 ease-out">
                <FaFacebookF className="hover:text-[#B555D3] cursor-pointer" />
                <FaInstagram className="hover:text-[#B555D3] cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#B555D3] cursor-pointer" />
                <FaTimes className="hover:text-[#B555D3] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="h-[500vh] ">
        <div
          ref={containerRef}
          className="sticky top-0 h-screen flex items-center justify-center overflow-x-auto"
        >
          <div className="flex w-full h-[70vh] px-4 md:px-6">
            {sections.map((sec, i) => {
              const revealPoint = (i + 1) / sections.length;
              const widthPercentage =
                progress >= revealPoint
                  ? 20
                  : progress >= i / sections.length
                    ? (progress - i / sections.length) * sections.length * 20
                    : 0;

              const opacity = progress > (i + 0.3) / sections.length ? 1 : 0;
              const translateY = i % 2 === 0 ? "-10%" : "10%";

              return (
                <div
                  key={i}
                  className="transition-all duration-700 ease-in-out bg-[#262244] overflow-hidden  max-sm:min-w-[70%]  max-xl:min-w-[35%]"
                  style={{
                    width: `${widthPercentage}%`,
                    opacity: widthPercentage > 0.5 ? 1 : 0,
                    // Ensures minimum readable width

                  }}
                >
                  <div
                    className="p-6 md:p-10 h-full flex flex-col justify-center text-white transition-all duration-700"
                    style={{
                      opacity,
                      transform: `translateY(${translateY})`,
                    }}
                  >
                    <small className="bg-[#262244] border border-[#3a355c] shadow-[0_0_8px_#3a355c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {sec.alphabet}
                    </small>

                    <h2 className="text-base md:text-lg font-bold mb-2 exo">{sec.title}</h2>
                    <p className="text-xs md:text-sm roboto-semi">{sec.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <section className=" py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-[#B555D3] text-center mb-8 exo text-[clamp(2rem,4vw,50rem)]">Theta Certifications</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={index * 1000}  // Stagger the animations by 100ms each

                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="border-b-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-t-lg w-full " 
                  />
                </div>
                <div className="p-4 bg-[#262244]">
                  <h3 className="text-[#B555D3] font-semibold text-lg mb-2 text-center exo">
                    {cert.title}
                  </h3>
                  <p className="text-gray-100 text-sm text-center roboto-semi">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;