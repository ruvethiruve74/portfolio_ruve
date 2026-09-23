import React, { useState } from "react";
import { Reveal, GlassCard, GithubIcon, ExternalLinkIcon } from "./shared";

const enrichedProjects = [
  {
    name: "Personal Portfolio",
    category: "Full-Stack",
    date: "Dec 2025",
    desc: "A modern, highly responsive developer portfolio built to showcase technical proficiency, academic accomplishments, and practical software engineering capabilities.",
    features: [
      "Responsive Glassmorphism UI with smooth CSS transitions",
      "Dynamic multi-role typing animation & interactive filters",
      "Direct email dispatch integration and clipboard utilities",
    ],
    stack: ["React", "TypeScript", "Vite", "CSS3"],
    github: "https://github.com/ruvethiruve74/portfolio_ruve",
    demo: null,
  },
  {
    name: "Clothing Store Platform",
    category: "E-Commerce",
    date: "Nov 2025",
    desc: "A full-featured e-commerce web platform engineered with role-based access for store administrators and customers.",
    features: [
      "Secure user authentication with Admin/Customer role segregation",
      "Dynamic catalog browsing, product filtering, and search",
      "Persistent cart management, checkout flow, and order logs",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/ruvethiruve74",
    demo: null,
  },
  {
    name: "Food Hub Management System",
    category: "Desktop & POS",
    date: "Jul 2025",
    desc: "A comprehensive point-of-sale and operational desktop application engineered for food delivery and restaurant businesses.",
    features: [
      "Fast POS checkout module with receipt calculation",
      "Real-time menu inventory tracking and low-stock alerts",
      "Staff operations management with SQL Server ACID guarantees",
    ],
    stack: ["C#", "SQL Server", ".NET", "Windows Forms"],
    github: "https://github.com/ruvethiruve74",
    demo: null,
  },
  {
    name: "Fitness Management Platform",
    category: "Full-Stack",
    date: "Nov 2025",
    desc: "A responsive health and workout management web application with multi-tier membership and trainer appointment coordination.",
    features: [
      "Member portal for tracking customized workout and diet plans",
      "Trainer booking and schedule coordination system",
      "Admin analytics dashboard for member subscriptions & retention",
    ],
    stack: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
    github: "https://github.com/ruvethiruve74",
    demo: null,
  },
];

export default function ProjectsSection({ githubUrl }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full-Stack", "E-Commerce", "Desktop & POS"];

  const filteredProjects = enrichedProjects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <section
      id="projects"
      style={{
        maxWidth: 1140,
        margin: "0 auto",
        padding: "70px 24px 80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div className="section-header">
          <span className="section-subtitle">
            Portfolio Showcase
          </span>
          <h2 className="display-font section-heading">
            Featured Projects
          </h2>
        </div>
      </Reveal>

    
      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {filteredProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <GlassCard
              className="proj-card"
              style={{
                padding: "28px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                position: "relative",
              }}
            >
              {/* Header: Title + Category & Date */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#93C5FD",
                      background: "rgba(59, 130, 246, 0.15)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      display: "inline-block",
                      marginBottom: "8px",
                    }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="display-font"
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#F5F3FF",
                      margin: 0,
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#A89FD9",
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.date}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#C4BCE6", margin: "0 0 16px" }}>
                {p.desc}
              </p>

              {/* Key Features */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#A89FD9", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                  Key Highlights:
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "6px" }}>
                  {p.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "13px",
                        color: "#DDD6FE",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#38BDF8", marginTop: "2px" }}>▹</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "auto", marginBottom: "20px" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      background: "rgba(139, 92, 246, 0.12)",
                      border: "1px solid rgba(196, 158, 255, 0.25)",
                      color: "#E2D9F3",
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
                <a
                  href={p.github || githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "9px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#F5F3FF",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(139, 92, 246, 0.25)";
                    e.currentTarget.style.borderColor = "#C9B8FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  }}
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>

                <a
                  href={p.github || githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    background: "rgba(96, 165, 250, 0.12)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    fontSize: "13px",
                    color: "#93C5FD",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(96, 165, 250, 0.25)";
                    e.currentTarget.style.borderColor = "#93C5FD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(96, 165, 250, 0.12)";
                    e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.3)";
                  }}
                  title="View Repository"
                >
                  <ExternalLinkIcon size={15} />
                </a>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
