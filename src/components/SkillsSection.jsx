import React, { useState } from "react";
import { Reveal, GlassCard, CodeIcon } from "./shared";

export default function SkillsSection({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...Object.keys(skills)];

  const categoryColors = {
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
          <p className="section-desc">
            Technologies and tools I leverage to build scalable, full-stack digital solutions from conception to deployment.
          </p>
        </div>
      </Reveal>

      {/* Filter Tabs & Quick Search */}
      <Reveal delay={80}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          {/* Categories */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: isActive ? "1px solid #C9B8FF" : "1px solid rgba(255, 255, 255, 0.12)",
                    background: isActive ? "linear-gradient(135deg, rgba(201, 184, 255, 0.25), rgba(139, 92, 246, 0.3))" : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "#FFFFFF" : "#A89FD9",
                    boxShadow: isActive ? "0 4px 16px rgba(139, 92, 246, 0.3)" : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div style={{ position: "relative", minWidth: "220px", flex: "1 1 220px", maxWidth: "320px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Filter skill (e.g. React)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                color: "#EDE9FE",
                fontSize: "13px",
                outline: "none",
              }}
            />
          </div>
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
                      justifyContent: "space-between",
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
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "999px",
                        background: theme.bg,
                        color: theme.text,
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      {filteredSkills.length}
                    </span>
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
