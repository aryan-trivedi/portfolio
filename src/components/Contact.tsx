import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";
import "../styles/eliteContact.css";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  /* Cursor Glow */
  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <section id="contact" className="elite-contact">
      <div ref={glowRef} className="cursor-glow" />
      <div className="noise" />

      <div className="contact-container">
        {/* HEADER */}
        <div className="contact-header fade-up">
          <h2>Let’s Connect</h2>
          <div className="underline" />
        </div>

        {/* CARD */}
        <div className="contact-card fade-up">
          <p className="contact-description">
            Open to Gen AI, full-stack engineering,
            data-driven innovation, and meaningful collaborations.
          </p>

          {/* CONTACT ROW */}
          <div className="contact-row">
            <ContactItem
              icon={<FaEnvelope />}
              label="Email"
              value="trivediaryanmails@gmail.com"
              link="mailto:trivediaryanmails@gmail.com"
              enableCopy
            />

            <ContactItem
              icon={<FaPhone />}
              label="Phone"
              value="+91 99589 03099"
              link="tel:+919958903099"
            />
          </div>

          {/* RESUME BUTTON */}
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <FaDownload />
            Download Resume
          </a>

          {/* SOCIAL */}
          <div className="social-row">
            <SocialIcon href="https://github.com/aryan-trivedi" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/aryan-trivedi-38a7b922b/" icon={<FaLinkedin />} />
            <SocialIcon href="https://leetcode.com/u/trivediaryanmails/" icon={<SiLeetcode />} />
            <SocialIcon href="https://x.com/aryannnnnn95" icon={<SiX />} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================= */
/* CONTACT ITEM COMPONENT */
/* ============================= */

const ContactItem = ({
  icon,
  label,
  value,
  link,
  enableCopy = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  enableCopy?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await navigator.clipboard.writeText(value);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a href={link} className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-label">{label}</div>

      <div className="contact-value-row">
        <span className="contact-value">{value}</span>

        {enableCopy && (
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span className="tooltip">
              {copied ? "Copied!" : "Copy"}
            </span>
            <span className="ripple" />
          </button>
        )}
      </div>
    </a>
  );
};

/* ============================= */
/* SOCIAL ICON */
/* ============================= */

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    {icon}
  </a>
);

export default Contact;
