import React, { useState, useEffect, useRef } from "react";
import profileImg from "./assets/ruve.jpeg";
 
 const PROFILE_IMG = profileImg;

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["NestJS", "PHP"],
  Database: ["MySQL", "SQL Server"],
  Tools: ["Git", "GitHub", "Visual Studio Code"],
};
 
const GITHUB_URL = "https://github.com/ruvethiruve74";
 
const projects = [
  {
    name: "Personal Portfolio",
    date: "Dec 2025",
    desc: "A responsive personal portfolio built to showcase academic projects, skills, and accomplishments — optimized for fast load and cross-device navigation.",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Clothing Website",
    date: "Nov 2025",
    desc: "Full e-commerce site for a clothing brand with user and admin roles: catalog browsing, secure auth, cart management, and order placement.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Food Hub Management System",
    date: "Jul 2025",
    desc: "Desktop management system for a food delivery business — order processing, inventory, POS, staff management, and full CRUD.",
    stack: ["C# (Windows Forms)", "SQL Server"],
  },
  {
    name: "Fitness Management System",
    date: "Nov 2025",
    desc: "Responsive fitness web app with admin and user modules — bookings, members, trainers, workouts, and a full authentication flow.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];
 
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
 
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
 
function GlassCard({ children, style = {}, className = "" }) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(10,6,40,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
 
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
        .display-font { font-family: 'Space Grotesk', sans-serif; }
        .nav-link { position: relative; cursor: pointer; transition: color 0.3s ease; }
        .nav-link:hover { color: #C9B8FF; }
        .orb { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; }
        .glow-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .glow-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(139,92,246,0.45); }
        .proj-card { transition: transform 0.35s ease, border-color 0.35s ease; }
        .proj-card:hover { transform: translateY(-6px); border-color: rgba(196,158,255,0.5) !important; }
        .skill-pill { transition: transform 0.2s ease, background 0.2s ease; }
        .skill-pill:hover { transform: translateY(-2px) scale(1.04); background: rgba(139,92,246,0.28) !important; }
        ::selection { background: rgba(139,92,246,0.5); }
        a { color: inherit; text-decoration: none; }
      `}</style>
 
      {/* Ambient liquid glass orbs */}
      <div className="orb" style={{ width: 420, height: 420, top: -140, left: -120, background: "radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%)" }} />
      <div className="orb" style={{ width: 380, height: 380, top: 260, right: -160, background: "radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)" }} />
      <div className="orb" style={{ width: 340, height: 340, bottom: 40, left: "35%", background: "radial-gradient(circle, rgba(192,132,252,0.30), transparent 70%)" }} />
 
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "18px 20px",
        }}
      >
        <GlassCard
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 2vw, 28px)",
            padding: "10px 22px",
            borderRadius: "999px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <span
              key={item.id}
              className="nav-link"
              onClick={() => scrollTo(item.id)}
              style={{
                fontSize: "13.5px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: activeSection === item.id ? "#D9CBFF" : "#A79FD6",
              }}
            >
              {item.label}
            </span>
          ))}
        </GlassCard>
      </nav>
 
      {/* Hero */}
      <section
        id="home"
        ref={(el) => (sectionsRef.current.home = el)}
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <div
            style={{
              width: "132px",
              height: "132px",
              borderRadius: "50%",
              padding: "4px",
              marginBottom: "26px",
              background: "linear-gradient(135deg, rgba(201,184,255,0.7), rgba(56,189,248,0.4))",
              boxShadow: "0 8px 40px rgba(139,92,246,0.45), 0 0 0 1px rgba(255,255,255,0.15)",
            }}
          >
            <img
              src={PROFILE_IMG}
              alt="Ruvethikka Sireetharan"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                border: "3px solid rgba(7,8,18,0.9)",
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={40}>
          <p style={{ fontSize: "13px", letterSpacing: "0.25em", color: "#8B7FD9", textTransform: "uppercase", marginBottom: "18px" }}>
            Full Stack Developer · HND in Computing
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className="display-font"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: "0 0 22px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #C9B8FF 50%, #8FA9FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ruvethikka<br />Sireetharan
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ maxWidth: 560, fontSize: "16px", lineHeight: 1.7, color: "#B9B3DE", marginBottom: "36px" }}>
            Software Engineering student building full stack products end to end — from
            interactive frontends to the databases underneath. Looking for an internship
            where I can ship real work.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <span
              className="glow-btn"
              onClick={() => scrollTo("projects")}
              style={{
                cursor: "pointer",
                padding: "13px 30px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#0A0716",
                background: "linear-gradient(135deg, #C9B8FF, #8FA9FF)",
              }}
            >
              View Projects
            </span>
            <span
              className="glow-btn"
              onClick={() => scrollTo("contact")}
              style={{
                cursor: "pointer",
                padding: "13px 30px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "14px",
                color: "#EDEBFF",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              Get in Touch
            </span>
          </div>
        </Reveal>
      </section>
 
      {/* About */}
      <section
        id="about"
        ref={(el) => (sectionsRef.current.about = el)}
        style={{ maxWidth: 880, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <h2 className="display-font" style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 600, marginBottom: "26px" }}>
            About
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <GlassCard style={{ padding: "34px clamp(20px,4vw,42px)" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#CFC9EE" }}>
              Motivated Software Engineering student currently pursuing a Higher National
              Diploma in Computing at ESOFT Metro Campus. Passionate about full stack
              development, with hands-on experience across frontend, backend, and database
              technologies gained through academic and personal projects. Seeking an
              internship to enhance technical skills, gain industry exposure, and
              contribute to real software development work.
            </p>
          </GlassCard>
        </Reveal>
      </section>
 
      {/* Skills */}
      <section
        id="skills"
        ref={(el) => (sectionsRef.current.skills = el)}
        style={{ maxWidth: 980, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <h2 className="display-font" style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 600, marginBottom: "26px" }}>
            Skills
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
          {Object.entries(skills).map(([category, list], i) => (
            <Reveal key={category} delay={i * 90}>
              <GlassCard style={{ padding: "24px" }}>
                <p style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C90D9", marginBottom: "14px" }}>
                  {category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                  {list.map((s) => (
                    <span
                      key={s}
                      className="skill-pill"
                      style={{
                        fontSize: "13px",
                        padding: "7px 14px",
                        borderRadius: "999px",
                        background: "rgba(139,92,246,0.15)",
                        border: "1px solid rgba(196,158,255,0.25)",
                        color: "#E4DBFF",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
 
      {/* Projects */}
      <section
        id="projects"
        ref={(el) => (sectionsRef.current.projects = el)}
        style={{ maxWidth: 1080, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <h2 className="display-font" style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 600, marginBottom: "26px" }}>
            Projects
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <GlassCard className="proj-card" style={{ padding: "26px", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px", gap: "10px" }}>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-font"
                    style={{ fontSize: "18px", fontWeight: 600, margin: 0, color: "#F1ECFF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9B8FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F1ECFF")}
                  >
                    {p.name} ↗
                  </a>
                  <span style={{ fontSize: "12px", color: "#8B7FD9", whiteSpace: "nowrap" }}>{p.date}</span>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#B9B3DE", marginBottom: "16px" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "11.5px",
                        padding: "5px 11px",
                        borderRadius: "8px",
                        background: "rgba(56,189,248,0.12)",
                        border: "1px solid rgba(56,189,248,0.25)",
                        color: "#A9E2FF",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
 
      {/* Education */}
      <section
        id="education"
        ref={(el) => (sectionsRef.current.education = el)}
        style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <h2 className="display-font" style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 600, marginBottom: "26px" }}>
            Education
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <GlassCard style={{ padding: "28px clamp(20px,4vw,36px)", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0, color: "#F1ECFF" }}>
                Higher National Diploma in Computing
              </h3>
              <span style={{ fontSize: "12px", color: "#8B7FD9" }}>Ongoing</span>
            </div>
            <p style={{ fontSize: "14px", color: "#B9B3DE", margin: 0 }}>ESOFT Metro Campus</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={180}>
          <GlassCard style={{ padding: "28px clamp(20px,4vw,36px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0, color: "#F1ECFF" }}>
                G.C.E. Advanced Level
              </h3>
              <span style={{ fontSize: "12px", color: "#8B7FD9" }}>May 2018 – Aug 2020</span>
            </div>
          </GlassCard>
        </Reveal>
      </section>
 
      {/* Contact */}
      <section
        id="contact"
        ref={(el) => (sectionsRef.current.contact = el)}
        style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 120px", textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <h2 className="display-font" style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 600, marginBottom: "18px" }}>
            Let's build something
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ fontSize: "15px", color: "#B9B3DE", marginBottom: "30px" }}>
            Open to internship opportunities. Reach out through any of the channels below.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <GlassCard style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <ContactRow label="Phone" value="+94 76 865 8332" />
            <ContactRow label="GitHub" value="View profile" href="https://github.com/ruvethiruve74" />
            <ContactRow label="LinkedIn" value="View profile" href="https://www.linkedin.com/in/ruvethikka-siree/" />
          </GlassCard>
        </Reveal>
        <p style={{ fontSize: "12px", color: "#5F5896", marginTop: "50px" }}>
          Ruvethikka Sireetharan · Built with React
        </p>
      </section>
    </div>
  );
}
 
function ContactRow({ label, value, href }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
      <span style={{ color: "#8B7FD9" }}>{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E4DBFF", fontWeight: 500, transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9B8FF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#E4DBFF")}
        >
          {value}
        </a>
      ) : (
        <span style={{ color: "#E4DBFF", fontWeight: 500 }}>{value}</span>
      )}
    </div>
  );
}
