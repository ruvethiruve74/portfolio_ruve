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
             I’m a passionate and motivated Software Engineering student and aspiring Full-Stack Developer with a strong interest in creating innovative and reliable software solutions. I enjoy turning ideas into practical digital experiences and solving problems through creative and logical thinking.
             I’m also developing a strong interest in Software Testing and Quality Assurance, with a focus on building applications that are reliable, user-friendly, and maintain high standards of quality.
             I’m always eager to learn, explore new challenges, and continuously improve my skills. My goal is to grow as a well-rounded software professional and contribute to meaningful projects that create real value.
            </p>
            
          </GlassCard>
        </Reveal>

      </div>
    </section>
  );
}

