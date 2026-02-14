import React from "react";

const projects = [
  {
    id: "01",
    title: "UPI Offline Mesh Payment System",
    subtitle: "Offline-first payment system with encrypted mesh routing.",
    description:
      "Developed an offline payment system where encrypted UPI transactions propagate across simulated Bluetooth mesh nodes and settle once internet connectivity becomes available.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    image: "/UPI Mesh.png",
    live: "https://github.com/gautama-28/UPImesh",
  },

{
  id: "02",
  title: "Deep Packet Inspection (DPI) Engine",
  subtitle: "Java-based network traffic analysis and filtering system.",
  description:
    "Developed a Deep Packet Inspection engine in Java that parses raw PCAP files, extracts TLS SNI information from HTTPS handshakes, classifies network traffic, tracks connection flows, and applies rule-based packet filtering through single-threaded and multi-threaded processing pipelines.",
  tech: [
    "Java",
    "Computer Networks",
    "Multithreading",
    "TCP/IP",
    "TLS",
    "PCAP",
  ],
  image: "/DPI.jpg",
  live: "https://github.com/gautama-28/DpiEngine",
},

  {
    id: "03",
    title: "IIITBH Nexus (Paperwallah)",
    subtitle: "Academic platform for IIIT Bhagalpur students.",
    description:
      "Collaborated with two developers to build a centralized platform using Spring Boot, React, JWT authentication, and PostgreSQL, simplifying access to academic resources.",
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    image: "/pyqhub.png",
    live: "https://paperwallah.vercel.app/",
  },

  {
    id: "04",
    title: "E-Commerce Shopping App",
    subtitle: "Native Android shopping application.",
    description:
      "Developed a shopping application using Jetpack Compose and MVI architecture with authentication, wishlist, cart, checkout, Room Database, and DataStore.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "MVI",
      "Room",
      "DataStore",
    ],
    image: "/shopease.png",
    live: "https://github.com/gautama-28/ShopEaseApp",
  },

  {
    id: "05",
    title: "E-Summit Website",
    subtitle: "Official website for IIIT Bhagalpur Entrepreneurship Summit.",
    description:
      "Developed responsive React components and interactive event pages while collaborating with the design team to deliver the official E-Summit website.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    image: "/esummit.png",
    live: "https://esummit.iiitbh.ac.in",
  },

  {
    id: "06",
    title: "Medzillo",
    subtitle: "Healthcare queue management platform.",
    description:
      "Implemented role-based interfaces, reusable React components, and frontend integration with REST APIs and GraphQL for digital hospital queue management.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "React Query",
      "Axios",
    ],
    image: "/medzillo.png",
    live: "https://medzillo.com/",
  },
];

const Project = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 lg:px-20 pt-20 sm:pt-24 lg:pt-28">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl italic font-light mb-4 glow-text">
          Projects
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base glow-text">
          A curated selection of projects showcasing my approach to
          problem-solving, design, and development.
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={project.id}>
          {/* PROJECT ROW */}
          <div
            className="
              group
              grid
              grid-cols-1
              lg:grid-cols-[1.4fr_1.4fr_1fr]
              gap-10 lg:gap-16
              py-16 lg:py-20
              items-start
            "
          >
            {/* Image – FIRST on mobile */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                order-1 lg:order-3
                w-full
                max-w-md
                lg:w-96
                mx-auto
                rounded-xl
                overflow-hidden
                transition-transform duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-105
                group-hover:-translate-y-1
                group-hover:shadow-2xl
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </a>

            {/* Left – Text */}
            <div className="order-2 lg:order-1">
              <span className="text-gray-500 block mb-3 text-sm">
                {project.id}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 transition-colors duration-300 group-hover:text-white glow-text">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4 lg:mb-6">
                {project.subtitle}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-gray-300">
                {project.description}
              </p>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 mt-6 text-sm text-white
                  border-b border-transparent
                  transition-all duration-300
                  hover:border-white
                "
              >
                View Live
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Middle – Tech Stack */}
            <div className="order-3 lg:order-2 lg:pt-12">
              <h4 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-4">
                Tech Stack
              </h4>

              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="
                      px-3 py-1
                      border border-neutral-700
                      rounded-full
                      text-xs text-gray-300
                      transition-colors duration-300
                      group-hover:border-neutral-500
                    "
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          {index !== projects.length - 1 && (
            <div className="h-px bg-neutral-800" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Project;
