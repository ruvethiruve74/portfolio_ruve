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
          "radial-gradient(ellipse 80% 60% at 20% 0%, #241a52 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 100% 20%, #1a2a5c 0%, transparent 50%), radial-gradient(ellipse 90% 70% at 50% 100%, #2c1547 0%, transparent 60%), #070812",
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
        .orb { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; }
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
        @keyframes headingGlow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(139,92,246,0.2); }
          to { text-shadow: 0 0 22px rgba(255,255,255,0.4), 0 0 40px rgba(139,92,246,0.35); }
        }
        ::selection { background: rgba(139,92,246,0.5); }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <div className="orb" style={{ width: 420, height: 420, top: -140, left: -120, background: "radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%)" }} />
      <div className="orb" style={{ width: 380, height: 380, top: 260, right: -160, background: "radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)" }} />
      <div className="orb" style={{ width: 340, height: 340, bottom: 40, left: "35%", background: "radial-gradient(circle, rgba(192,132,252,0.30), transparent 70%)" }} />

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
