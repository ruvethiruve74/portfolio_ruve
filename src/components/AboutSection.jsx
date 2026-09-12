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
              I am a Software Engineering student currently pursuing a Higher National Diploma in Computing at ESOFT Metro Campus. My journey began with a natural curiosity for problem-solving, which quickly evolved into a passion for architecting responsive, reliable, and user-friendly software.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#C4BCE6", margin: 0 }}>
              Whether designing clean interfaces with React & Tailwind CSS or engineering backend logic and databases with NestJS, PHP, and SQL, I focus on building maintainable solutions that deliver real-world business value.
            </p>
          </GlassCard>
        </Reveal>

      </div>

      {/* Quick Attributes Row */}
      <Reveal delay={200}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "14px",
            marginTop: "20px",
          }}
        >
          {[
            { label: "Specialization", value: "Full-Stack Web & Software" },
            { label: "Education", value: "Pearson BTEC HND (ESOFT)" },
            { label: "Location", value: "Sri Lanka" },
            { label: "Target", value: "Software Engineering Intern" },
          ].map((item) => (
            <GlassCard
              key={item.label}
              style={{
                padding: "16px 20px",
                border: "1px solid rgba(196, 158, 255, 0.18)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A89FD9", marginBottom: "4px" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#F5F3FF" }}>
                {item.value}
              </div>
            </GlassCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
