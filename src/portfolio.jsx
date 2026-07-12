import React, { useState, useEffect, useRef } from "react";
import profileImg from "./assets/ruve.jpeg";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import { GlassCard } from "./components/shared";

const PROFILE_IMG = profileImg;

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["NestJS", "PHP", "REST APIs"],
  Database: ["MySQL", "SQL Server", "Database Design"],
  Tools: ["Git", "GitHub", "VS Code", "Figma"],
};

const GITHUB_URL = "https://github.com/ruvethiruve74";

const projects = [
  {
    name: "Personal Portfolio",
    date: "Dec 2025",
    desc: "A responsive portfolio experience designed to present academic work, technical skills, and achievements with a modern, high-performance UI.",
    stack: ["React", "TypeScript", "CSS", "Vite"],
  },
  {
    name: "Clothing Store",
    date: "Nov 2025",
    desc: "A complete e-commerce concept with user and admin roles, secure authentication, catalog browsing, cart management, and order flow.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Food Hub Management System",
    date: "Jul 2025",
    desc: "A desktop management solution for a food delivery business covering orders, inventory, POS, staff operations, and CRUD workflows.",
    stack: ["C#", "SQL Server", "Windows Forms"],
  },
  {
    name: "Fitness Management App",
    date: "Nov 2025",
    desc: "A responsive fitness platform with user and admin modules for bookings, trainer management, workouts, and member accounts.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'Inter', sans-serif",
        color: "#EDEBFF",
        background:
          "radial-gradient(ellipse 72% 56% at 12% 0%, rgba(121,95,255,0.38) 0%, transparent 58%), radial-gradient(ellipse 60% 44% at 92% 16%, rgba(55,177,255,0.26) 0%, transparent 55%), radial-gradient(ellipse 80% 70% at 50% 100%, rgba(214,129,255,0.24) 0%, transparent 65%), linear-gradient(135deg, #06070d 0%, #090b16 45%, #05050b 100%)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #070812; }
        #root { min-height: 100vh; }
        .display-font { font-family: 'Space Grotesk', sans-serif; }
        .nav-link { position: relative; cursor: pointer; transition: color 0.3s ease, transform 0.2s ease; }
        .nav-link:hover { color: #C9B8FF; transform: translateY(-1px); }
        .nav-link.active { color: #FFFFFF; }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          opacity: 0.95;
          mix-blend-mode: screen;
          animation: drift 18s ease-in-out infinite alternate;
        }
        .mesh {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.04) 0 1px, transparent 1px);
          background-size: 180px 180px, 240px 240px;
          opacity: 0.35;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 90%);
        }
        .bubble-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.78;
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(255,255,255,0.12) 24%, rgba(129,195,255,0.08) 55%, transparent 72%);
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: inset 0 1px 10px rgba(255,255,255,0.12), 0 0 18px rgba(120,180,255,0.1);
          filter: blur(0.4px);
          animation: bubbleFloat 12s ease-in-out infinite;
        }
        .glow-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .glow-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(139,92,246,0.45); }
        .proj-card { transition: transform 0.35s ease, border-color 0.35s ease; }
        .proj-card:hover { transform: translateY(-6px); border-color: rgba(196,158,255,0.5) !important; }
        .skill-card { position: relative; overflow: hidden; }
        .typing-cursor { display: inline-block; width: 8px; margin-left: 3px; border-right: 2px solid #F5EBFF; animation: blink 0.8s steps(1) infinite; vertical-align: middle; }
        .section-heading {
          display: inline-block;
          margin-bottom: 26px;
          font-size: clamp(1.7rem, 4vw, 2.4rem);
          font-weight: 700;
          color: #FFFFFF;
          text-shadow: 0 0 18px rgba(255,255,255,0.25), 0 0 35px rgba(139,92,246,0.28);
          letter-spacing: 0.03em;
          position: relative;
          animation: headingGlow 2.4s ease-in-out infinite alternate;
        }
        .section-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          transform: scaleX(0.7);
          opacity: 0.7;
        }
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(30px, -40px, 0) scale(1.08); }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.95); }
          50% { transform: translate3d(18px, -28px, 0) scale(1.08); }
        }
        @keyframes headingGlow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(139,92,246,0.2); }
          to { text-shadow: 0 0 22px rgba(255,255,255,0.4), 0 0 40px rgba(139,92,246,0.35); }
        }
        ::selection { background: rgba(139,92,246,0.5); }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <div className="mesh" />
      <div className="bubble-layer">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${28 + (index % 6) * 10}px`,
              height: `${28 + (index % 6) * 10}px`,
              left: `${6 + (index * 4) % 90}%`,
              top: `${8 + (index * 7) % 82}%`,
              animationDelay: `${-index * 0.8}s`,
              opacity: 0.45 + (index % 4) * 0.11,
            }}
          />
        ))}
      </div>
      <div className="orb" style={{ width: 460, height: 460, top: -150, left: -140, background: "radial-gradient(circle, rgba(142,104,255,0.56), transparent 72%)" }} />
      <div className="orb" style={{ width: 380, height: 380, top: 240, right: -180, background: "radial-gradient(circle, rgba(62,174,255,0.34), transparent 72%)", animationDelay: "-6s" }} />
      <div className="orb" style={{ width: 340, height: 340, bottom: 55, left: "34%", background: "radial-gradient(circle, rgba(220,138,255,0.28), transparent 72%)", animationDelay: "-10s" }} />

      <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "18px 20px" }}>
        <GlassCard style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 2vw, 28px)", padding: "10px 22px", borderRadius: "999px", flexWrap: "wrap", justifyContent: "center" }}>
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
              style={{ fontSize: "13.5px", fontWeight: 500, letterSpacing: "0.02em", color: activeSection === item.id ? "#D9CBFF" : "#A79FD6" }}
            >
              {item.label}
            </span>
          ))}
        </GlassCard>
      </nav>

      <div ref={(el) => (sectionsRef.current.home = el)}>
        <HomeSection profileImg={PROFILE_IMG} scrollTo={scrollTo} />
      </div>
      <div ref={(el) => (sectionsRef.current.about = el)}>
        <AboutSection />
      </div>
      <div ref={(el) => (sectionsRef.current.skills = el)}>
        <SkillsSection skills={skills} />
      </div>
      <div ref={(el) => (sectionsRef.current.projects = el)}>
        <ProjectsSection projects={projects} githubUrl={GITHUB_URL} />
      </div>
      <div ref={(el) => (sectionsRef.current.education = el)}>
        <EducationSection />
      </div>
      <div ref={(el) => (sectionsRef.current.contact = el)}>
        <ContactSection />
      </div>
    </div>
  );
}
