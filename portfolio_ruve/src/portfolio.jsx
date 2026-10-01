import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/ruve.jpeg";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import {
  GlassCard,
  Toast,
  ArrowUpIcon,
  MailIcon,
  MenuIcon,
  CloseIcon,
} from "./components/shared";

const skills = {
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "PHP", "C#"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "PHP", "REST APIs", "Express.js"],
  Database: ["MySQL", "SQL Server", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Jira", "Postman"],
};

const GITHUB_URL = "https://github.com/ruvethiruve74";
const LINKEDIN_URL = "https://www.linkedin.com/in/ruvethikka-siree";
const EMAIL_ADDRESS = "ruvethi@gmail.com";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalForm, setModalForm] = useState({ name: "", email: "", message: "" });

  const sectionsRef = useRef({});

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'Inter', sans-serif",
        color: "#F5F3FF",
        background:
          "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(139, 92, 246, 0.22) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 90% 20%, rgba(56, 189, 248, 0.18) 0%, transparent 60%), radial-gradient(ellipse 90% 70% at 50% 100%, rgba(192, 132, 252, 0.16) 0%, transparent 70%), #06070E",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        .display-font { font-family: 'Space Grotesk', sans-serif; }
        
        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 36px;
          width: 100%;
        }

        .section-subtitle {
          display: block;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9B8FF;
          font-weight: 600;
          margin-bottom: 6px;
          text-align: center;
        }

        .section-heading {
          display: block;
          font-size: clamp(1.8rem, 4.5vw, 2.6rem);
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          margin: 0;
          text-align: center;
        }

        .section-desc {
          max-width: 680px;
          margin: 12px auto 0;
          color: #C4BCE6;
          font-size: 15px;
          line-height: 1.7;
          text-align: center;
        }

        .nav-pill {
          position: relative;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 999px;
          transition: all 0.2s ease;
          color: #A89FD9;
        }
        .nav-pill:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.06);
        }
        .nav-pill.active {
          color: #FFFFFF;
          background: rgba(139, 92, 246, 0.25);
          border: 1px solid rgba(196, 158, 255, 0.35);
        }

        .ambient-mesh {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 36px 36px;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 95%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 95%);
        }

        .floating-action-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(17, 16, 35, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EDE9FE;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
          transition: all 0.25s ease;
        }
        .floating-action-btn:hover {
          transform: translateY(-3px) scale(1.05);
          border-color: #C9B8FF;
          background: rgba(139, 92, 246, 0.4);
          box-shadow: 0 14px 30px rgba(139, 92, 246, 0.35);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* Top Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #C9B8FF 0%, #38BDF8 50%, #34D399 100%)",
          zIndex: 100,
          boxShadow: "0 0 10px rgba(56, 189, 248, 0.6)",
          transition: "width 0.1s ease-out",
        }}
      />

      {/* Subtle Background Mesh */}
      <div className="ambient-mesh" />

      {/* Sticky Header / Navbar */}
      <header
        style={{
          position: "sticky",
          top: "14px",
          zIndex: 60,
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
          width: "100%",
        }}
      >
        <GlassCard
          style={{
            width: "100%",
            maxWidth: "1020px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            background: "rgba(10, 11, 24, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          hoverEffect={false}
        >
          {/* Logo / Brand */}
          <div
            onClick={() => scrollTo("home")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="display-font"
              style={{
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#F5F3FF",
              }}
            >
              Ruvethikka
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <span
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-pill ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* Hire Me CTA & Mobile Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "12.5px",
                fontWeight: 600,
                background: "linear-gradient(135deg, #C9B8FF 0%, #93C5FD 100%)",
                color: "#070814",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              className="desktop-hire-btn"
            >
              Get in Touch
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: "none",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "10px",
                padding: "7px",
                color: "#EDE9FE",
                cursor: "pointer",
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </GlassCard>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "76px",
            left: "20px",
            right: "20px",
            maxWidth: "460px",
            margin: "0 auto",
            zIndex: 59,
            borderRadius: "20px",
            background: "rgba(12, 13, 28, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            padding: "18px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
            animation: "modalFadeIn 0.25s ease",
          }}
        >
          <div style={{ display: "grid", gap: "8px" }}>
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: activeSection === item.id ? "#FFFFFF" : "#C4BCE6",
                  background: activeSection === item.id ? "rgba(139, 92, 246, 0.22)" : "rgba(255, 255, 255, 0.03)",
                  border: activeSection === item.id ? "1px solid rgba(196, 158, 255, 0.4)" : "1px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9B8FF" }} />
                )}
              </div>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "14px",
                background: "linear-gradient(135deg, #C9B8FF 0%, #93C5FD 100%)",
                color: "#080614",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main>
        <div ref={(el) => (sectionsRef.current.home = el)}>
          <HomeSection profileImg={profileImg} scrollTo={scrollTo} />
        </div>
        <div ref={(el) => (sectionsRef.current.about = el)}>
          <AboutSection />
        </div>
        <div ref={(el) => (sectionsRef.current.skills = el)}>
          <SkillsSection skills={skills} />
        </div>
        <div ref={(el) => (sectionsRef.current.projects = el)}>
          <ProjectsSection githubUrl={GITHUB_URL} />
        </div>
        <div ref={(el) => (sectionsRef.current.education = el)}>
          <EducationSection />
        </div>
        <div ref={(el) => (sectionsRef.current.contact = el)}>
          <ContactSection onShowToast={triggerToast} />
        </div>
      </main>

      {/* Quick Email Popup Modal */}
      {showContactModal && (
        <div
          onClick={() => setShowContactModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 95,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(4, 6, 20, 0.78)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(92vw, 440px)",
              borderRadius: "22px",
              padding: "26px",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              background: "linear-gradient(135deg, #13122A 0%, #1A173A 100%)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(139, 92, 246, 0.2)",
              color: "#F3ECFF",
              animation: "modalFadeIn 0.25s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9B8FF", fontWeight: 600 }}>
                Quick Contact
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                aria-label="Close dialog"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "none",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#EDE9FE",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <p style={{ fontSize: "13.5px", color: "#C4BCE6", margin: "0 0 16px" }}>
              Reach out directly or send a message to{" "}
              <strong style={{ color: "#F5F3FF" }}>{EMAIL_ADDRESS}</strong>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Portfolio Message from ${modalForm.name || "Colleague"}`);
                const body = encodeURIComponent(`Name: ${modalForm.name}\nEmail: ${modalForm.email}\n\nMessage:\n${modalForm.message}`);
                window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
                setShowContactModal(false);
                triggerToast("Opening email client...");
              }}
              style={{ display: "grid", gap: "12px" }}
            >
              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "#DDD6FE", marginBottom: "4px" }}>
                  Your Name
                </label>
                <input
                  value={modalForm.name}
                  onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F3FF",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "#DDD6FE", marginBottom: "4px" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={modalForm.email}
                  onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                  placeholder="name@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F3FF",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "#DDD6FE", marginBottom: "4px" }}>
                  Message
                </label>
                <textarea
                  value={modalForm.message}
                  onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                  placeholder="Hi Ruvethikka, I'd like to discuss..."
                  rows="4"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F3FF",
                    fontSize: "13.5px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "6px" }}>
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  style={{
                    padding: "9px 16px",
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#EDE9FE",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "9px 20px",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #C9B8FF 0%, #93C5FD 100%)",
                    border: "none",
                    color: "#080614",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Controls Docked at Bottom-Right */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "24px",
          zIndex: 80,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="floating-action-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUpIcon size={18} />
          </button>
        )}

        {/* Quick Email floating trigger */}
        <button
          onClick={() => setShowContactModal(true)}
          className="floating-action-btn"
          aria-label="Open contact message modal"
          title="Send a message"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.35))",
            borderColor: "rgba(196, 158, 255, 0.4)",
          }}
        >
          <MailIcon size={18} color="#EDE9FE" />
        </button>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />

      {/* Responsive Media Query Overrides */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-hire-btn {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
}
