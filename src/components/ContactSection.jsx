import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal, GlassCard, ContactRow } from "./shared";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ruvethikka",
        },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Email send failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
      <Reveal>
        <h2 className="display-font section-heading">Let’s Build Something</h2>
      </Reveal>
      <Reveal delay={100}>
        <p style={{ fontSize: "15px", color: "#B9B3DE", marginBottom: "30px", lineHeight: 1.8 }}>
          I’m open to internships and collaborative opportunities where I can contribute to meaningful products and keep learning.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <GlassCard style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "14px", textAlign: "left" }}>
          <ContactRow label="Phone" value="+94 76 865 8332" />
          <ContactRow label="Email" value="ruvethiruve74@gmail.com" />
          <ContactRow label="GitHub" value="View profile" href="https://github.com/ruvethiruve74" />
          <ContactRow label="LinkedIn" value="View profile" href="https://www.linkedin.com/in/ruvethikka-siree/" />
        </GlassCard>
      </Reveal>
      <Reveal delay={220}>
        <GlassCard style={{ padding: "26px", marginTop: "20px", textAlign: "left" }}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)", color: "#F4EEFF" }} />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)", color: "#F4EEFF" }} />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message" rows="5" required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)", color: "#F4EEFF", resize: "vertical" }} />
            <button type="submit" disabled={loading} style={{ padding: "12px 16px", borderRadius: "999px", border: "none", cursor: loading ? "wait" : "pointer", background: "linear-gradient(135deg, #C9B8FF, #8FA9FF)", color: "#06070d", fontWeight: 700 }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p style={{ color: "#89F0B2", margin: 0 }}>Message sent successfully.</p>}
            {status === "error" && <p style={{ color: "#FF9E9E", margin: 0 }}>Something went wrong. Please try again.</p>}
          </form>
        </GlassCard>
      </Reveal>
      <p style={{ fontSize: "12px", color: "#5F5896", marginTop: "50px" }}>Ruvethikka Sireetharan · Built with React</p>
    </section>
  );
}
