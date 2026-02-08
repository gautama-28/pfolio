import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

const internships = [
  {
    company: "Medzillo",
    role: "Frontend Developer Intern",
    duration: "May 2025 - July 2025",
    description:
      "Implemented role-based interfaces for clients, doctors, and administrators using React.js, TypeScript, and Tailwind CSS. Developed reusable UI components from Figma designs, integrated REST APIs and GraphQL with Axios and React Query, and optimized frontend performance through caching, state management, and API request optimization while maintaining a consistent user experience.",
    image: "./medzillo-logo.jpg",
  },
  {
    company: "Mittal Alliance Pvt. Ltd.",
    role: "Full Stack Intern and UI/UX Designer",
    duration: "April 2025 – May 2025",
    description:
      "Developed responsive frontend features for a Book Author website and a Trader Portfolio using React.js, integrating REST APIs into an existing codebase while implementing UI enhancements and bug fixes. Worked closely with designers and developers through Git-based workflows to deliver consistent interfaces and maintain code quality across multiple frontend modules.",
    image: "/mittal-alliance.png",
  },
];

const CARD_OFFSET = 32;
const SCALE_STEP = 0.05;
const SWIPE_THRESHOLD = 100;
const AUTO_SLIDE_DELAY = 6000;

const Internships = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((dir) => {
    setIndex((prev) => (prev + dir + internships.length) % internships.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      paginate(1);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [paginate, isHovered]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate]);

  const visibleCards = useMemo(
    () =>
      [0, 1].map((stackIndex) => ({
        stackIndex,
        internship:
          internships[(index + stackIndex) % internships.length],
      })),
    [index]
  );

  return (
    <section className="bg-black text-white py-20 sm:py-20 relative overflow-hidden">
      <div className="text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Internship <span className="italic">Experience</span>
        </h2>

        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Hands-on industry experience building real-world products
        </p>
      </div>

      <div
        className="relative h-[520px] sm:h-[460px] lg:h-[420px] flex justify-center items-center px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visibleCards.map(({ stackIndex, internship }) => (
          <motion.div
            key={`${index}-${stackIndex}`}
            drag={stackIndex === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(e, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
              if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
            }}
            animate={{
              scale: 1 - stackIndex * SCALE_STEP,
              y: stackIndex * CARD_OFFSET,
              opacity: stackIndex === 0 ? 1 : 0.65,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing"
            style={{
              zIndex: 10 - stackIndex,
              willChange: "transform, opacity",
              transform: "translate3d(0,0,0)",
            }}
          >
            <div
              className="flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-white/10"
              style={{
                background: "rgba(22,22,22,0.96)",
                boxShadow: "0 10px 24px rgba(0,0,0,.45)",
                userSelect: "none",
              }}
            >
              <div className="w-full md:w-1/3">
                <img
                  src={internship.image}
                  alt={internship.company}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl object-cover w-full h-[200px] sm:h-[240px] md:h-[280px]"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">
                  {internship.role}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 mb-4 font-medium">
                  {internship.company} • {internship.duration}
                </p>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {internship.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => paginate(-1)}
        className="hidden sm:flex absolute left-3 sm:left-6 lg:left-10 top-[60%] -translate-y-1/2 z-50 items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 active:scale-90 transition-all"
      >
        ←
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden sm:flex absolute right-3 sm:right-6 lg:right-10 top-[60%] -translate-y-1/2 z-50 items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 active:scale-90 transition-all"
      >
        →
      </button>

      <div className="sm:hidden text-center mt-10 text-xs text-gray-500 tracking-widest uppercase">
        — Swipe to navigate —
      </div>
    </section>
  );
};

export default React.memo(Internships);