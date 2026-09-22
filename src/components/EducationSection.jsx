import React from "react";
import { Reveal, GlassCard, GraduationIcon, CalendarIcon } from "./shared";

export default function EducationSection() {
  const educationData = [
    {
      title: "Pearson BTEC Higher National Diploma in Computing",
      institution: "ESOFT Metro Campus",
      period: "Ongoing · Final Year",
      status: "In Progress",
      statusColor: "#34D399",
      
    },
    {
      title: "G.C.E. Advanced Level",
      institution: "Secondary Education",
      period: "Completed · 2020",
      status: "Completed",
      statusColor: "#93C5FD",
    },
  ];

  return (
    <section
      id="education"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "60px 24px 80px",
        position: "relative",
        zIndex: 1,
      }}
    
    >
      <Reveal>
        <div className="section-header">
          <span className="section-subtitle">
            Academic Background
          </span>
          <h2 className="display-font section-heading">
            Education & Qualifications
          </h2>
        </div>
      </Reveal>

      {/* Timeline Container */}
      <div style={{ position: "relative", display: "grid", gap: "24px" }}>
        {educationData.map((item, index) => (
          <Reveal key={item.title} delay={index * 120}>
            <GlassCard
              style={{
                padding: "30px clamp(20px, 4vw, 36px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                position: "relative",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(139, 92, 246, 0.15)",
                      border: "1px solid rgba(196, 158, 255, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#C9B8FF",
                    }}
                  >
                    <GraduationIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "#F5F3FF" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "#93C5FD", margin: "2px 0 0" }}>
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: `${item.statusColor}18`,
                      border: `1px solid ${item.statusColor}40`,
                      color: item.statusColor,
                    }}
                  >
                    {item.status}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#A89FD9",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <CalendarIcon size={14} />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p style={{ fontSize: "14.5px", lineHeight: 1.75, color: "#C4BCE6", margin: "14px 0 16px" }}>
                  {item.description}
                </p>
              )}

              {/* Coursework Modules */}
              {item.modules && item.modules.length > 0 && (
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#A89FD9",
                      marginBottom: "8px",
                    }}
                  >
                    Key Coursework & Competencies:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {item.modules.map((m) => (
                      <span
                        key={m}
                        style={{
                          fontSize: "12px",
                          padding: "5px 12px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#DDD6FE",
                          fontWeight: 500,
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
