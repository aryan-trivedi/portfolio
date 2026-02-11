type SectionCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  points?: string[];
};

const SectionCard = ({ title, subtitle, meta, points }: SectionCardProps) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "1.5rem",
        maxWidth: "700px",
      }}
    >
      <h3 style={{ marginBottom: "0.25rem" }}>{title}</h3>

      {subtitle && (
        <p style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>
          {subtitle}
        </p>
      )}

      {meta && (
        <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "0.75rem" }}>
          {meta}
        </p>
      )}

      {points && (
        <ul style={{ paddingLeft: "1.2rem" }}>
          {points.map((p, i) => (
            <li key={i} style={{ marginBottom: "0.4rem" }}>
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SectionCard;
