import React from "react";
import { Reveal, GlassCard } from "./shared";

export default function ProjectsSection({ projects, githubUrl }) {
  return (
    <section id="projects" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}>
      <Reveal>
        <h2 className="display-font section-heading">Projects</h2>
      </Reveal>
      <Reveal delay={60}>
        <p style={{ maxWidth: 720, color: "#C9C1EC", lineHeight: 1.75, marginBottom: "24px" }}>
          Selected work that demonstrates practical implementation across web, database, and business workflow systems.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <GlassCard className="proj-card" style={{ padding: "26px", height: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px" }}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="display-font" style={{ fontSize: "18px", fontWeight: 600, color: "#F1ECFF" }}>
                  {p.name} ↗
                </a>
                <span style={{ fontSize: "12px", color: "#8B7FD9", whiteSpace: "nowrap" }}>{p.date}</span>
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#B9B3DE", margin: 0 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "auto" }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ fontSize: "11.5px", padding: "5px 11px", borderRadius: "8px", background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)", color: "#A9E2FF" }}>{s}</span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
