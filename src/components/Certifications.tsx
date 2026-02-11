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
    <>
      <style>
        {`
          .cert-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .cert-grid {
              grid-template-columns: 1fr;
            }
          }

          .cert-card {
            background: linear-gradient(180deg, #0f172a, #020617);
            border: 1px solid rgba(148,163,184,0.15);
            border-radius: 18px;
            padding: 2rem;
            min-height: 260px; /* match skills visual weight */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            box-shadow: 0 0 40px rgba(99,102,241,0.08);
            transition: all 0.35s ease;
          }

          .cert-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 70px rgba(99,102,241,0.35);
            border: 1px solid rgba(99,102,241,0.4);
          }

          .cert-tag {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.3rem 0.7rem;
            border-radius: 999px;
            font-size: 0.7rem;
            background: rgba(99,102,241,0.15);
            border: 1px solid rgba(99,102,241,0.3);
            color: #a5b4fc;
          }

          .cert-icon {
            font-size: 2rem;
            color: #818cf8;
            margin-bottom: 1rem;
          }

          .cert-title {
            font-size: 1.15rem;
            font-weight: 600;
            margin-bottom: 0.6rem;
          }

          .cert-issuer {
            color: #cbd5f5;
            font-size: 0.95rem;
            margin-bottom: 0.3rem;
          }

          .cert-year {
            color: #94a3b8;
            font-size: 0.85rem;
          }
        `}
      </style>

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

          {/* GRID */}
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-tag">{cert.tag}</div>

                <div>
                  <div className="cert-icon">{cert.icon}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>

                <p className="cert-year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
