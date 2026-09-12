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
      {/* Availability Status Badge */}
      <Reveal delay={0}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 18px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(52, 211, 153, 0.35)",
            boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)",
            marginBottom: "24px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#6EE7B7",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              boxShadow: "0 0 8px #10B981",
              display: "inline-block",
              animation: "pulseGlow 2s infinite",
            }}
          />
          Available for Internships & Full-Stack Roles
        </div>
      </Reveal>

      {/* Profile Image with Glowing Halo */}
      <Reveal delay={60}>
        <div
          style={{
            position: "relative",
            width: "148px",
            height: "148px",
            borderRadius: "50%",
            padding: "4px",
            margin: "0 auto 24px",
            background: "linear-gradient(135deg, #C9B8FF 0%, #60A5FA 50%, #C084FC 100%)",
            boxShadow: "0 12px 40px rgba(139, 92, 246, 0.45), 0 0 20px rgba(96, 165, 250, 0.3)",
          }}
        >
          <img
            src={profileImg}
            alt="Ruvethikka Sireetharan"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              border: "3px solid #070814",
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
            "React & NestJS Specialist",
            "Creative Problem Solver",
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
          A dedicated Software Engineering student pursuing a Higher National Diploma in Computing.
          Passionate about architecting responsive, high-performance web applications, robust backends,
          and scalable database architectures.
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
          <button
            onClick={() => scrollTo("projects")}
            style={{
              cursor: "pointer",
              padding: "13px 28px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              color: "#080614",
              background: "linear-gradient(135deg, #C9B8FF 0%, #93C5FD 100%)",
              border: "none",
              boxShadow: "0 8px 24px rgba(139, 92, 246, 0.35)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 14px 30px rgba(139, 92, 246, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.35)";
            }}
          >
            <SparklesIcon size={16} color="#080614" />
            Explore Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
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
          </button>

          <a
            href="mailto:ruvethiruve74@gmail.com?subject=Requesting%20Resume%20-%20Ruvethikka%20Sireetharan"
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
            Request Resume
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
            href="https://www.linkedin.com/in/ruvethikka-siree/"
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
            { label: "4+ Practical Projects", desc: "Full-Stack & Desktop" },
            { label: "HND in Computing", desc: "ESOFT Metro Campus" },
            { label: "Frontend & Backend", desc: "React · TypeScript · NestJS" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                border: "1px solid rgba(196, 158, 255, 0.2)",
                borderRadius: "14px",
                padding: "10px 18px",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(8px)",
                textAlign: "center",
                flex: "1 1 200px",
              }}
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
