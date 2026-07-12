import React from "react";
import { Reveal, GlassCard, ContactRow } from "./shared";

export default function ContactSection() {
  return (
    <section id="contact" style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
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
      <p style={{ fontSize: "12px", color: "#5F5896", marginTop: "50px" }}>Ruvethikka Sireetharan · Built with React</p>
    </section>
  );
}
