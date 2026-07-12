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
  const [showEmailFloat, setShowEmailFloat] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
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

    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      setShowEmailFloat(scrollTop > documentHeight * 0.5);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
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
        .email-float {
          position: fixed;
          left: 50%;
          bottom: clamp(18px, 3vw, 30px);
          transform: translateX(-50%);
          z-index: 80;
          transition: opacity 0.35s ease, transform 0.35s ease;
          transform-style: preserve-3d;
        }
        .email-float.hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(24px) scale(0.9);
        }
        .email-float.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
        }
        .email-float::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 66%);
          filter: blur(18px);
          transform: translateZ(-12px);
        }
        .email-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.24);
          background: linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06));
          box-shadow: 0 14px 28px rgba(10, 6, 40, 0.38), inset 0 1px 0 rgba(255,255,255,0.2);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          cursor: pointer;
          animation: popIn 0.6s cubic-bezier(0.22,1,0.36,1), floatPulse 2.6s ease-in-out infinite 0.6s;
          transform: rotateX(8deg) rotateY(-8deg);
        }
        .email-btn:hover {
          transform: translateY(-3px) rotateX(8deg) rotateY(-8deg) scale(1.03);
          box-shadow: 0 18px 34px rgba(10, 6, 40, 0.45), inset 0 1px 0 rgba(255,255,255,0.24);
        }
        .email-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 95;
          background: rgba(3, 6, 24, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: overlayFade 0.25s ease;
        }
        .email-modal {
          width: min(92vw, 420px);
          border-radius: 22px;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.16);
          background: linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.07));
          box-shadow: 0 24px 60px rgba(2, 6, 24, 0.45);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          color: #F3ECFF;
          animation: modalPop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .email-modal input,
        .email-modal textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 12px;
          padding: 10px 12px;
          font-size: 14px;
          color: #F3ECFF;
          background: rgba(255,255,255,0.06);
          outline: none;
          margin-top: 6px;
        }
        .email-modal textarea {
          min-height: 92px;
          resize: vertical;
        }
        .email-modal button {
          border: 0;
          border-radius: 999px;
          padding: 10px 16px;
          cursor: pointer;
          font-weight: 600;
        }
        .email-modal .send-btn {
          background: linear-gradient(135deg, #C9B8FF, #8FA9FF);
          color: #070812;
        }
        .email-modal .close-btn {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }
        @keyframes overlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.94) translateY(10px); }
          60% { opacity: 1; transform: scale(1.02) translateY(-3px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.7) rotateX(8deg) rotateY(-8deg); }
          60% { opacity: 1; transform: scale(1.06) rotateX(8deg) rotateY(-8deg); }
          100% { opacity: 1; transform: scale(1) rotateX(8deg) rotateY(-8deg); }
        }
        @keyframes floatPulse {
          0%, 100% { transform: translateY(0) rotateX(8deg) rotateY(-8deg); }
          50% { transform: translateY(-6px) rotateX(8deg) rotateY(-8deg); }
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

      {showEmailPopup && (
        <div className="email-overlay" onClick={() => setShowEmailPopup(false)}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ fontSize: "13px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#A99BEA" }}>Contact</div>
              <button className="close-btn" onClick={() => setShowEmailPopup(false)} aria-label="Close form">×</button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Portfolio Feedback from ${formData.name || "Anonymous"}`);
                const body = encodeURIComponent(`Name: ${formData.name || ""}\nEmail: ${formData.email || ""}\n\nFeedback:\n${formData.feedback || ""}`);
                window.location.href = `mailto:ruvethiruve74@gmail.com?subject=${subject}&body=${body}`;
                setShowEmailPopup(false);
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <label style={{ fontSize: "13px", color: "#D8CFFF" }}>Name</label>
                <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label style={{ fontSize: "13px", color: "#D8CFFF" }}>Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your email" required />
              </div>
              <div style={{ marginBottom: "14px" }}>
                <label style={{ fontSize: "13px", color: "#D8CFFF" }}>Feedback for my portfolio</label>
                <textarea value={formData.feedback} onChange={(e) => setFormData({ ...formData, feedback: e.target.value })} placeholder="Share your feedback..." required />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button type="button" className="close-btn" onClick={() => setShowEmailPopup(false)}>Cancel</button>
                <button type="submit" className="send-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={`email-float ${showEmailFloat ? "visible" : "hidden"}`}>
        <button
          aria-label="Email me"
          className="email-btn"
          onClick={() => setShowEmailPopup(true)}
          style={{ color: "#F5ECFF", textDecoration: "none" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 7 9-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
