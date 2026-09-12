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
          <p className="section-desc">
            I am actively seeking software engineering internships and entry-level opportunities. Whether you have a project idea, question, or job opening, feel free to reach out!
          </p>
        </div>
      </Reveal>

      {/* Direct Communication Channels */}
      <Reveal delay={80}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "24px" }}>
          <GlassCard
            style={{ padding: "18px 20px", textAlign: "left", cursor: "pointer" }}
            onClick={() => copyToClipboard("ruvethiruve74@gmail.com", "Email address")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C9B8FF" }}>
                <MailIcon size={18} />
                <span style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Email
                </span>
              </div>
              <span style={{ fontSize: "11px", color: "#93C5FD", background: "rgba(147, 197, 253, 0.12)", padding: "2px 6px", borderRadius: "4px" }}>
                Click to copy
              </span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#F5F3FF", wordBreak: "break-all" }}>
              ruvethiruve74@gmail.com
            </div>
          </GlassCard>

          <GlassCard
            style={{ padding: "18px 20px", textAlign: "left", cursor: "pointer" }}
            onClick={() => copyToClipboard("+94768658332", "Phone number")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#34D399" }}>
                <PhoneIcon size={18} />
                <span style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Phone / WhatsApp
                </span>
              </div>
              <span style={{ fontSize: "11px", color: "#34D399", background: "rgba(52, 211, 153, 0.12)", padding: "2px 6px", borderRadius: "4px" }}>
                Click to copy
              </span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#F5F3FF" }}>
              +94 76 865 8332
            </div>
          </GlassCard>
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
              label="Phone"
              value="+94 76 865 8332"
              href="tel:+94768658332"
              onCopy={() => copyToClipboard("+94768658332", "Phone number")}
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

      {/* Interactive Contact Form */}
      <Reveal delay={200}>
        <GlassCard style={{ padding: "32px", textAlign: "left" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#F5F3FF", margin: "0 0 8px" }}>
            Send a Direct Message
          </h3>
          <p style={{ fontSize: "13.5px", color: "#A89FD9", margin: "0 0 20px" }}>
            Have a question or role inquiry? Fill out the form and I will respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#DDD6FE", marginBottom: "6px" }}>
                  Your Name <span style={{ color: "#F472B6" }}>*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F3FF",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#DDD6FE", marginBottom: "6px" }}>
                  Your Email <span style={{ color: "#F472B6" }}>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#F5F3FF",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#DDD6FE", marginBottom: "6px" }}>
                Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Internship opportunity / Project collaboration"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#F5F3FF",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#DDD6FE", marginBottom: "6px" }}>
                Message <span style={{ color: "#F472B6" }}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#F5F3FF",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "6px" }}>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  padding: "13px 28px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: status === "loading" ? "wait" : "pointer",
                  background: "linear-gradient(135deg, #C9B8FF 0%, #93C5FD 100%)",
                  color: "#080614",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 8px 24px rgba(139, 92, 246, 0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <MailIcon size={16} color="#080614" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#34D399", fontSize: "14px", fontWeight: 500, marginTop: "8px" }}>
                <CheckIcon size={16} color="#34D399" />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "fallback" && (
              <div style={{ color: "#93C5FD", fontSize: "13px", marginTop: "8px" }}>
                Opening your email client to complete transmission. You can also email directly to{" "}
                <a href="mailto:ruvethiruve74@gmail.com" style={{ color: "#C9B8FF", textDecoration: "underline" }}>
                  ruvethiruve74@gmail.com
                </a>.
              </div>
            )}
          </form>
        </GlassCard>
      </Reveal>

      {/* Footer */}
      <footer style={{ marginTop: "60px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontSize: "13px", color: "#A89FD9" }}>
          © {new Date().getFullYear()} Ruvethikka Sireetharan · Built with React & Vite
        </span>
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
