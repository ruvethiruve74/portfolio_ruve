import React, { useState } from "react";
import { Reveal, GlassCard, CodeIcon } from "./shared";

export default function SkillsSection({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...Object.keys(skills)];

  const categoryColors = {
    "Programming Languages": { bg: "rgba(59, 130, 246, 0.14)", border: "rgba(59, 130, 246, 0.35)", text: "#93C5FD" },
    Frontend: { bg: "rgba(96, 165, 250, 0.14)", border: "rgba(96, 165, 250, 0.35)", text: "#93C5FD" },
    Backend: { bg: "rgba(167, 139, 250, 0.14)", border: "rgba(167, 139, 250, 0.35)", text: "#C4B5FD" },
    Database: { bg: "rgba(52, 211, 153, 0.14)", border: "rgba(52, 211, 153, 0.35)", text: "#6EE7B7" },
    Tools: { bg: "rgba(251, 146, 60, 0.14)", border: "rgba(251, 146, 60, 0.35)", text: "#FDBA74" },
  };

  return (
    <section
      id="skills"
      style={{
        maxWidth: 1060,
        margin: "0 auto",
        padding: "60px 24px 70px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div className="section-header">
          <span className="section-subtitle">
            Technical Stack
          </span>
          <h2 className="display-font section-heading">
            Skills & Technologies
          </h2>
        </div>
      </Reveal>

      

          
        

      {/* Grid of Skill Categories */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
        {Object.entries(skills)
          .filter(([cat]) => selectedCategory === "All" || selectedCategory === cat)
          .map(([cat, skillList], index) => {
            const filteredSkills = skillList.filter((s) =>
              s.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredSkills.length === 0 && searchTerm) return null;

            const theme = categoryColors[cat] || { bg: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)", text: "#E2D9F3" };

            return (
              <Reveal key={cat} delay={index * 80}>
                <GlassCard
                  style={{
                    padding: "26px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "18px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingBottom: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CodeIcon size={16} color={theme.text} />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: theme.text,
                        }}
                      >
                        {cat}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                    {filteredSkills.map((item) => (
                      <span
                        key={item}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "7px 14px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#F5F3FF",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.2s ease",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.borderColor = theme.border;
                          e.currentTarget.style.background = theme.bg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
      </div>
    </section>
  );
}
