import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Reveal,
  GlassCard,
  ContactRow,
  MailIcon,
  PhoneIcon,
  CheckIcon,
} from "./shared";

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

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (onShowToast) onShowToast(`${label} copied to clipboard!`);
      },
      () => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (onShowToast) onShowToast(`${label} copied to clipboard!`);
      }
    );
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
    window.location.href = `mailto:ruvethiruve74@gmail.com?subject=${mailSubject}&body=${mailBody}`;
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
            Let’s Build Something Together
          </h2>
        </div>
      </Reveal>

      {/* Direct Communication Channels */}
      <Reveal delay={80}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "24px" }}>
          
        </div>
      </Reveal>

      {/* Social and Profile Links */}
      <Reveal delay={140}>
        <GlassCard style={{ padding: "24px", marginBottom: "28px", textAlign: "left" }}>
          <div style={{ display: "grid", gap: "12px" }}>
            <ContactRow
              label="Email"
              value="ruvethiruve74@gmail.com"
              href="mailto:ruvethiruve74@gmail.com"
              onCopy={() => copyToClipboard("ruvethiruve74@gmail.com", "Email address")}
            />
            
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/ruvethikka-siree"
              href="https://www.linkedin.com/in/ruvethikka-siree/"
            />
            <ContactRow
              label="GitHub"
              value="github.com/ruvethiruve74"
              href="https://github.com/ruvethiruve74"
            />
          </div>
        </GlassCard>
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
