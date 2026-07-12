import React from "react";
import { Reveal, AnimatedRoleText } from "./shared";

export default function HomeSection({ profileImg, scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "70px 24px 90px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div
          style={{
            width: "138px",
            height: "138px",
            borderRadius: "50%",
            padding: "4px",
            marginBottom: "20px",
            background: "linear-gradient(135deg, rgba(201,184,255,0.8), rgba(56,189,248,0.4))",
            boxShadow: "0 10px 42px rgba(139,92,246,0.45), 0 0 0 1px rgba(255,255,255,0.15)",
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
              border: "3px solid rgba(7,8,18,0.9)",
            }}
          />
        </div>
      </Reveal>
      <Reveal delay={40}>
        <AnimatedRoleText text="Full Stack Developer · HND in Computing" />
      </Reveal>
      <Reveal delay={100}>
        <h1
          className="display-font"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.3rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            margin: "0 0 16px",
            background: "linear-gradient(135deg, #FFFFFF 0%, #C9B8FF 50%, #8FA9FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ruvethikka<br />Sireetharan
        </h1>
      </Reveal>
      <Reveal delay={180}>
        <p style={{ maxWidth: 650, fontSize: "16px", lineHeight: 1.75, color: "#C9C1EC", marginBottom: "26px" }}>
          I’m a software engineering student focused on building practical full-stack web experiences with reliable architecture, thoughtful UI, and clean implementation.
        </p>
      </Reveal>
      <Reveal delay={260}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "18px" }}>
          <span className="glow-btn" onClick={() => scrollTo("projects")} style={{ cursor: "pointer", padding: "13px 30px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", color: "#080611", background: "linear-gradient(135deg, #C9B8FF, #8FA9FF)" }}>
            View Projects
          </span>
          <span className="glow-btn" onClick={() => scrollTo("contact")} style={{ cursor: "pointer", padding: "13px 30px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", color: "#EDEBFF", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
            Get in Touch
          </span>
        </div>
      </Reveal>
      <Reveal delay={320}>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "18px" }}>
          <a href="https://github.com/ruvethiruve74" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", padding: "10px 16px", borderRadius: "999px", fontWeight: 600, fontSize: "13px", color: "#F4EEFF", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ruvethikka-siree/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", padding: "10px 16px", borderRadius: "999px", fontWeight: 600, fontSize: "13px", color: "#F4EEFF", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}>
            LinkedIn
          </a>
        </div>
      </Reveal>
      <Reveal delay={320}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {['Internship Ready', 'Full-Stack Focus', 'Database & APIs'].map((item) => (
            <span key={item} style={{ border: "1px solid rgba(196,158,255,0.26)", borderRadius: "999px", padding: "7px 12px", fontSize: "12px", color: "#D9CCFF", background: "rgba(255,255,255,0.05)" }}>{item}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
