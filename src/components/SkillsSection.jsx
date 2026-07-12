import React from "react";
import { Reveal, GlassCard } from "./shared";

export default function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      style={{ maxWidth: 1050, margin: "0 auto", padding: "40px 24px 80px", position: "relative", zIndex: 1 }}
    >
      <style>{`
        .section-heading {
          display: inline-block;
          margin-bottom: 26px;
          font-size: clamp(1.7rem, 4vw, 2.4rem);
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 0 18px rgba(255,255,255,0.25), 0 0 35px rgba(139,92,246,0.28);
          letter-spacing: 0.03em;
          position: relative;
          animation: headingGlow 2.4s ease-in-out infinite alternate;
        }
        .section-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          transform: scaleX(0.7);
          opacity: 0.7;
        }
        @keyframes headingGlow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(139,92,246,0.2); }
          to { text-shadow: 0 0 22px rgba(255,255,255,0.4), 0 0 40px rgba(139,92,246,0.35); }
        }
        .skill-card {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .skill-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 30%, rgba(139,92,246,0.14));
          pointer-events: none;
          transform: translateZ(-1px);
        }
        .skill-card:hover {
          transform: translateY(-8px) rotateX(3deg) rotateY(-3deg) scale(1.01);
          box-shadow: 0 20px 50px rgba(10, 6, 40, 0.45), 0 0 0 1px rgba(255,255,255,0.12);
          border-color: rgba(196,158,255,0.45) !important;
        }
        .skill-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(139,92,246,0.22), rgba(56,189,248,0.16));
          border: 1px solid rgba(196,158,255,0.32);
          color: #F0EAFE;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 16px rgba(7,8,18,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          transform: translateZ(0);
        }
        .skill-chip:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.16), 0 12px 24px rgba(73, 45, 140, 0.35);
          background: linear-gradient(135deg, rgba(164,120,255,0.28), rgba(86,198,255,0.2));
        }
      `}</style>
      <Reveal>
        <h2 className="display-font section-heading">
          Skills
        </h2>
      </Reveal>
      <Reveal delay={60}>
        <p style={{ maxWidth: 720, color: "#C9C1EC", lineHeight: 1.75, marginBottom: "24px" }}>
          I enjoy building across the stack, with experience in modern frontend work, backend services, and database-driven applications.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
        {Object.entries(skills).map(([category, list], i) => (
          <Reveal key={category} delay={i * 90}>
            <GlassCard className="skill-card" style={{ padding: "24px" }}>
              <p style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C90D9", marginBottom: "14px" }}>
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                {list.map((s) => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
