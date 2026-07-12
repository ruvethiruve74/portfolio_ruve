import React, { useState, useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedRoleText({ text, className = "", style = {} }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let active = true;
    const timer = window.setInterval(() => {
      if (!active) return;
      index += 1;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, 45);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [text]);

  return (
    <p
      className={`typing-text ${className}`.trim()}
      style={{
        display: "inline-block",
        minHeight: "1.7em",
        fontSize: "13px",
        letterSpacing: "0.25em",
        lineHeight: 1.6,
        color: "#8B7FD9",
        textTransform: "uppercase",
        marginBottom: "18px",
        ...style,
      }}
    >
      <span
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #C9B8FF 50%, #8FA9FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 600,
        }}
      >
        {displayedText}
      </span>
      {!isComplete && <span className="typing-cursor" />}
    </p>
  );
}

export function GlassCard({ children, style = {}, className = "" }) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(10,6,40,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ContactRow({ label, value, href }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
      <span style={{ color: "#8B7FD9" }}>{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E4DBFF", fontWeight: 500, transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9B8FF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#E4DBFF")}
        >
          {value}
        </a>
      ) : (
        <span style={{ color: "#E4DBFF", fontWeight: 500 }}>{value}</span>
      )}
    </div>
  );
}
