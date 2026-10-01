import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./shared";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const isEmailJsConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !templateId.includes("your_template_id") &&
      !publicKey.includes("your_public_key");

    if (isEmailJsConfigured) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || `Message from ${formData.name}`,
            message: formData.message,
            to_name: "Ruvethikka",
          },
          publicKey
        );
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        if (onShowToast) onShowToast("Message sent successfully!");
        return;
      } catch (err) {
        console.warn("EmailJS send failed, falling back to direct email client", err);
      }
    }

    const mailSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Colleague"}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:ruvethi@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setStatus("fallback");
    if (onShowToast) onShowToast("Opening your email client to send message...");
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "70px 24px 100px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div className="section-header">
          <span className="section-subtitle">
            Get In Touch
          </span>
          <h2 className="display-font section-heading">
            Let’s Build Something
          </h2>
          <p style={{ margin: "8px 0 0", color: "#A9A8B8", fontSize: "20px" }}>
            Let’s connect and explore ideas, opportunities, and ways to build something meaningful.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", marginTop: "14px" }}>
          {[
            ["Email", "https://mail.google.com/mail/?view=cm&fs=1&to=ruvethi@gmail.com"],
            ["GitHub", "https://github.com/ruvethiruve74"],
            ["LinkedIn", "https://www.linkedin.com/in/ruvethikka-siree/"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: "120px",
                padding: "12px 24px",
                border: "1px solid rgba(71, 196, 198, 0.45)",
                borderRadius: "22px",
                color: "#F0EFF7",
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "center",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#47C4C6";
                e.currentTarget.style.background = "rgba(71, 196, 198, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(71, 196, 198, 0.45)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </Reveal>

      

      {/* Footer */}
      <footer style={{ marginTop: "60px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div className="footer-content" style={{ fontSize: "13px", color: "#A89FD9" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#F5F3FF" }}>Ruvethikka Sireetharan</h3>
          <p>Software Engineering Student</p>
        </div>
        <a
          href="#home"
          style={{ fontSize: "13px", color: "#C9B8FF", display: "inline-flex", alignItems: "center", gap: "4px" }}
        >
          Back to Top ↑
        </a>
      </footer>
    </section>
  );
}
