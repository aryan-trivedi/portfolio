import {
  FaMicrosoft,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2023",
    icon: <FaMicrosoft />,
    tag: "Cloud • AI",
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    year: "2023",
    icon: <FaUniversity />,
    tag: "Data • SQL",
  },
  {
    title: "Data Analytics & Visualization Virtual Experience Program",
    issuer: "Accenture",
    year: "2024",
    icon: <FaBriefcase />,
    tag: "Analytics • Consulting",
  },
  {
    title: "Fullstack Engineer Virtual Experience",
    issuer: "JP Morgan & Chase",
    year: "2024",
    icon: <FaBriefcase />,
    tag: "Full-Stack • Finance",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.6rem", fontWeight: 700 }}>
            Certifications
          </h2>

          <div
            style={{
              width: "64px",
              height: "4px",
              margin: "0.75rem auto 0",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6)",
            }}
          />
        </div>

        {/* RESPONSIVE GRID */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.title}
              style={{
                background:
                  "linear-gradient(180deg, #0f172a, #020617)",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow:
                  "0 0 40px rgba(99,102,241,0.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  background:
                    "rgba(99,102,241,0.15)",
                  border:
                    "1px solid rgba(99,102,241,0.3)",
                  color: "#a5b4fc",
                }}
              >
                {cert.tag}
              </div>

              <div
                style={{
                  fontSize: "2rem",
                  color: "#818cf8",
                  marginBottom: "1rem",
                }}
              >
                {cert.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {cert.title}
              </h3>

              <p style={{ color: "#cbd5f5", fontSize: "0.9rem" }}>
                {cert.issuer}
              </p>

              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
