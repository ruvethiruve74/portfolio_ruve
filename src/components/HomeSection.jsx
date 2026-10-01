import React from "react";
import {
  Reveal,
  RotatingRoles,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
  SparklesIcon,
} from "./shared";

export default function HomeSection({ profileImg, scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 24px 70px",
        position: "relative",
        zIndex: 1,
      }}
    >

      {/* Portrait blends into the hero background without a frame. */}
      <Reveal delay={60}>
        <div
          style={{
            position: "relative",
            width: "min(68vw, 280px)",
            aspectRatio: "1",
            margin: "0 auto 24px",
            overflow: "hidden",
            borderRadius: "50%",
            border: "1px solid rgba(196, 158, 255, 0.55)",
            background: "rgba(255, 255, 255, 0.04)",
            boxShadow: "0 0 36px rgba(139, 92, 246, 0.2), 0 0 72px rgba(56, 189, 248, 0.1)",
          }}
        >
          <img
            src={profileImg}
            alt="Ruvethikka Sireetharan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
            }}
          />
        </div>
      </Reveal>

      {/* Dynamic Typing Roles */}
      <Reveal delay={120}>
        <RotatingRoles
          roles={[
            "Full-Stack Developer",
            "Software Engineering Student",
            "Aspiring Software Testing & Quality Assurance",
            
          ]}
        />
      </Reveal>

      {/* Main Name Heading */}
      <Reveal delay={180}>
        <h1
          className="display-font"
          style={{
            fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 18px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            background: "linear-gradient(135deg, #FFFFFF 0%, #E9D5FF 40%, #93C5FD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ruvethikka Sireetharan
        </h1>
      </Reveal>

      {/* Tagline / Pitch */}
      <Reveal delay={240}>
        <p
          style={{
            maxWidth: "680px",
            margin: "0 auto 32px",
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.8,
            color: "#C4BCE6",
            textAlign: "center",
          }}
        >
         Passionate about transforming ideas into innovative, scalable, and reliable software solutions that create impactful digital experiences.
        </p>
      </Reveal>

      {/* Primary Action Buttons */}
      <Reveal delay={300}>
        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          
          
           

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ruvethi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              padding: "13px 28px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              color: "#EDE9FE",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(12px)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(196, 158, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
          >
            <MailIcon size={16} color="#C9B8FF" />
            Get in Touch
          </a>

          <a
            href="/Ruvethikka_CV.pdf"
            download="Ruvethikka_CV.pdf"
            style={{
              cursor: "pointer",
              padding: "13px 26px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              color: "#C9B8FF",
              background: "rgba(139, 92, 246, 0.12)",
              border: "1px solid rgba(196, 158, 255, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "rgba(139, 92, 246, 0.22)";
              e.currentTarget.style.borderColor = "rgba(196, 158, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(139, 92, 246, 0.12)";
              e.currentTarget.style.borderColor = "rgba(196, 158, 255, 0.3)";
            }}
          >
            <DownloadIcon size={16} color="#C9B8FF" />
            Download Resume
          </a>
        </div>
      </Reveal>

      {/* Social Icons Strip */}
      <Reveal delay={340}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <a
            href="https://github.com/ruvethiruve74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 18px",
              borderRadius: "999px",
              fontWeight: 500,
              fontSize: "13px",
              color: "#E2D9F3",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#C9B8FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            <GithubIcon size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ruvethikka-siree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 18px",
              borderRadius: "999px",
              fontWeight: 500,
              fontSize: "13px",
              color: "#E2D9F3",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#60A5FA";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            <LinkedinIcon size={16} color="#60A5FA" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      {/* Highlights / Quick Stats */}
      <Reveal delay={380}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "840px",
            margin: "0 auto",
          }}
        >
          {[
            
          ].map((item) => (
            <div
              key={item.label}
              
            >
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#EDE9FE" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "11.5px", color: "#A89FD9" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
