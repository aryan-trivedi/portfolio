type Props = {
  year: string;
  institute: string;
  degree: string;
  extra: string;
};

const EducationCard = ({ year, institute, degree, extra }: Props) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0f172a, #020617)",
        border: "1px solid rgba(148,163,184,0.15)",
        borderRadius: "16px",
        padding: "1.8rem",
        boxShadow: "0 0 40px rgba(99,102,241,0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 0 60px rgba(99,102,241,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(99,102,241,0.08)";
      }}
    >
      {/* Year */}
      <div
        style={{
          color: "#818cf8",
          fontSize: "0.85rem",
          marginBottom: "0.4rem",
        }}
      >
        {year}
      </div>

      {/* Institute */}
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: 600,
          marginBottom: "0.6rem",
          color: "white",
        }}
      >
        {institute}
      </h3>

      {/* Degree */}
      <p
        style={{
          color: "#cbd5f5",
          fontSize: "0.95rem",
          marginBottom: "0.8rem",
        }}
      >
        {degree}
      </p>

      {/* Extra */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.9rem",
        }}
      >
        {extra}
      </p>
    </div>
  );
};

export default EducationCard;
