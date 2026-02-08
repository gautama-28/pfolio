import React, { memo } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
  SiRedis,
  SiGraphql,
  SiVite,
  SiFlyway,
  SiJsonwebtokens,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const skills = [
  { title: "Java", desc: "Backend development", icon: FaJava },
  { title: "Spring Boot", desc: "REST API development", icon: SiSpringboot },
  { title: "Spring Data JPA", desc: "Database persistence", icon: SiHibernate },
  { title: "Hibernate", desc: "ORM framework", icon: SiHibernate },

  { title: "PostgreSQL", desc: "Relational database", icon: SiPostgresql },
  { title: "MySQL", desc: "SQL database", icon: SiMysql },
  { title: "Redis", desc: "Caching & idempotency", icon: SiRedis },

  { title: "React.js", desc: "Frontend library", icon: FaReact },
  { title: "TypeScript", desc: "Typed JavaScript", icon: SiTypescript },
  { title: "JavaScript", desc: "Web programming", icon: FaJs },
  { title: "HTML5", desc: "Markup language", icon: FaHtml5 },
  { title: "CSS3", desc: "Web styling", icon: FaCss3Alt },
  { title: "Tailwind CSS", desc: "Utility-first CSS", icon: SiTailwindcss },
  { title: "Vite", desc: "Frontend tooling", icon: SiVite },

  { title: "GraphQL", desc: "API query language", icon: SiGraphql },
  { title: "JWT", desc: "Authentication", icon: SiJsonwebtokens },
  { title: "Docker", desc: "Containerization", icon: FaDocker },
  { title: "Flyway", desc: "Database migrations", icon: SiFlyway },

  { title: "Git", desc: "Version control", icon: FaGit },
  { title: "Postman", desc: "API testing", icon: SiPostman },
  { title: "Figma", desc: "UI/UX design", icon: SiFigma },
  { title: "Firebase", desc: "Backend services", icon: SiFirebase },

  { title: "C++", desc: "Programming language", icon: TbBrandCpp },
  { title: "DSA", desc: "Problem solving", icon: HiOutlineCode },
  { title: "UI/UX", desc: "Interface design", icon: MdOutlineDesignServices },
];

// Memoized Card Component for performance
const SkillCard = memo(({ title, desc, Icon }) => (
  <div className="group text-center p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-out will-change-transform">
    <Icon className="mx-auto mb-3 text-2xl sm:text-3xl text-gray-400 group-hover:text-white transition-colors duration-300" />
    <h4 className="text-sm sm:text-base font-semibold mb-1 text-white">
      {title}
    </h4>
    <p className="text-xs sm:text-sm text-gray-400">
      {desc}
    </p>
  </div>
));

SkillCard.displayName = "SkillCard";

const Skills = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl italic font-light">
          Skills & <span className="italic">Expertise</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Technologies and tools I use to build scalable, performant, and
          user-focused applications.
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "rgba(15, 15, 15, 0.8)",
            // Reduced blur from 20px to 8px for better scroll performance
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.05), 0 30px 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill) => (
              <SkillCard 
                key={skill.title} 
                title={skill.title} 
                desc={skill.desc} 
                Icon={skill.icon} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;