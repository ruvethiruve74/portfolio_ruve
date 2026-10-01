import React from "react";
import { Reveal, GlassCard, SparklesIcon } from "./shared";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1040,
        margin: "0 auto",
        padding: "80px 24px 60px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div className="section-header">
          <span className="section-subtitle">
            Introduction
          </span>
          <h2 className="display-font section-heading">
            About Me
          </h2>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {/* Main Bio Card */}
        <Reveal delay={80}>
          <GlassCard style={{ padding: "32px", height: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#C9B8FF" }}>
              <SparklesIcon size={20} />
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#F5F3FF", margin: 0 }}>
                Driven by Passion & Innovation
              </h3>
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#C4BCE6", margin: 0 }}>
              I’m a Software Engineering student with a passion for full-stack development and building innovative, reliable, and user-friendly digital solutions. 
              I’m especially interested in software testing and quality assurance, and I’m constantly learning and refining my skills to grow into a well-rounded software professional.
            </p>
            
          </GlassCard>
        </Reveal>

      </div>
    </section>
  );  
}

