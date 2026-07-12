import React from "react";
import { Reveal, GlassCard } from "./shared";

export default function AboutSection() {
  return (
    <section id="about" style={{ maxWidth: 950, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>
      <Reveal>
        <h2 className="display-font section-heading">About</h2>
      </Reveal>
      <Reveal delay={100}>
        <GlassCard style={{ padding: "34px clamp(20px,4vw,42px)" }}>
          <div style={{ display: "grid", gap: "20px", alignItems: "start" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#D9D2F4", margin: 0 }}>
              I’m a software engineering student pursuing a Higher National Diploma in Computing at ESOFT Metro Campus, with a strong interest in building polished, practical web applications. My focus lies in turning ideas into reliable experiences through clean design, structured code, and careful product thinking.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              {[
                ["Specialization", "Full-Stack Development"],
                ["Approach", "User-Centered Design"],
                ["Focus", "Scalable Web Apps"],
                ["Goal", "Professional Internship"],
              ].map(([label, value]) => (
                <div key={label} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "12px 14px", background: "rgba(255,255,255,0.04)" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8C80D7", marginBottom: "6px" }}>{label}</div>
                  <div style={{ fontSize: "14px", color: "#F2ECFF" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
