type Props = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

const ExperienceCard = ({
  role,
  company,
  period,
  location,
  points,
  tech,
}: Props) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "18px",
        padding: "2.5rem",
        position: "relative",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Left accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          borderRadius: "18px 0 0 18px",
          background: "linear-gradient(180deg, #8b5cf6, #6366f1)",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.8rem",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>
            {role}
          </h3>
          <p style={{ color: "#8b5cf6", fontWeight: 500 }}>{company}</p>
        </div>

        <div style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
          {period} • {location}
        </div>
      </div>

      {/* Bullet points */}
      <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.8rem" }}>
        {points.map((point, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: "0.7rem",
              lineHeight: 1.6,
            }}
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "999px",
              background: "rgba(99,102,241,0.15)",
              color: "#c7d2fe",
              fontSize: "0.85rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
