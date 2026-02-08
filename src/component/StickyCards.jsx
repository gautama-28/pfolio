import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
  const cardContainerRef = useRef(null);
  const stickyHeaderRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Lighter Lenis Setup
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Simple ScrollTrigger Sync
    lenis.on("scroll", ScrollTrigger.update);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 0.5, // Slightly higher for smoothness
          pin: true,
          anticipatePin: 1,
        },
      });

      /* Restoring your exact animation sequence */
      
      // Header Fade In
      tl.fromTo(
        stickyHeaderRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25 }
      );

      // Container Scale (Using scale is much faster than width)
      tl.fromTo(
        cardContainerRef.current,
        { scale: 1 },
        { scale: 0.8, duration: 0.5, transformOrigin: "center" },
        0
      );

      // Your Fake GAP using translateX
      tl.to(
        ".card",
        {
          x: (i) => [-35, 0, 35][i], // Slightly increased for clarity
          duration: 0.4,
          ease: "power2.out",
        },
        0.3
      );

      // Your Card Flips
      tl.to(
        ".card",
        {
          rotationY: 180,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.inOut",
        },
        0.6
      );

      // Your Side Tilt
      tl.to(
        ["#card-1", "#card-3"],
        {
          y: 20,
          rotationZ: (i) => [-12, 12][i],
          duration: 0.5,
          ease: "power2.out",
        },
        0.6
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <section ref={sectionRef} className="sticky-section h-screen flex items-center justify-center relative">
        <h1
          ref={stickyHeaderRef}
          className="absolute top-[18%] text-6xl italic font-light opacity-0 glow-text"
        >
          Achievements & Recognition
        </h1>

        <div
          ref={cardContainerRef}
          className="cards flex w-[75%] translate-y-24"
          style={{ 
            perspective: "1200px", 
            willChange: "transform" 
          }}
        >
          <Card
            id="card-1"
            img="/PrimaryLeft.png"
            title="National UI/UX Hackathon"
            desc="Secured 2nd place at the National UI/UX Hackathon hosted by IIITDM Kancheepuram by designing a research-backed user experience for a real-world problem statement."
            color="bg-neutral-300 text-black"
          />

          <Card
            id="card-2"
            img="/PrimaryC.png"
            title="Unnati Welfare Society"
            desc="Led digital literacy workshops for 500+ students across multiple government schools, promoting technology education and coordinating outreach activities with volunteers."
            color="bg-red-700 text-white"
          />

          <Card
            id="card-3"
            img="/primaryR.png"
            title="Competitive Programming"
            desc="CodeChef 2-Star programmer (1408) and Codeforces rating of 1105, regularly solving data structures and algorithms problems in Java to strengthen problem-solving skills."
            color="bg-neutral-900 text-white"
          />
</div>
      </section>
    </main>
  );
}

function Card({ id, img, title, desc, color }) {
  return (
    <div
      id={id}
      className="card flex-1 aspect-[5/7] relative"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        backfaceVisibility: "hidden"
      }}
    >
      {/* FRONT */}
      <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "translateZ(1px)" }}>
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>

      {/* BACK */}
      <div
        className={`absolute inset-0 flex flex-col justify-center p-8 ${color}`}
        style={{ 
          backfaceVisibility: "hidden", 
          transform: "rotateY(180deg) translateZ(1px)" 
        }}
      >
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="text-base opacity-80">{desc}</p>
      </div>
    </div>
  );
}