import React from "react";
import { Reveal, GlassCard } from "./shared";

export default function EducationSection() {
  return (
    <section id="education" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}>
      <Reveal>
        <h2 className="display-font section-heading">Education</h2>
      </Reveal>
      <Reveal delay={100}>
        <GlassCard style={{ padding: "28px clamp(20px,4vw,36px)", marginBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0, color: "#F1ECFF" }}>Higher National Diploma in Computing</h3>
            <span style={{ fontSize: "12px", color: "#8B7FD9" }}>Ongoing</span>
          </div>
          <p style={{ fontSize: "14px", color: "#B9B3DE", margin: 0 }}>ESOFT Metro Campus</p>
        </GlassCard>
      </Reveal>
      <Reveal delay={180}>
        <GlassCard style={{ padding: "28px clamp(20px,4vw,36px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0, color: "#F1ECFF" }}>G.C.E. Advanced Level</h3>
            <span style={{ fontSize: "12px", color: "#8B7FD9" }}>May 2018 – Aug 2020</span>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
