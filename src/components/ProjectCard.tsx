import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  period?: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  category,
  github,
  period,
}: ProjectCardProps) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0f172a, #020617)",
        border: "1px solid rgba(148,163,184,0.15)",
        borderRadius: "18px",
        padding: "1.8rem",
        boxShadow: "0 0 40px rgba(99,102,241,0.08)",
        transition: "all 0.35s ease",
        position: "relative",
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
      {/* CATEGORY BADGE */}
      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          padding: "0.35rem 0.7rem",
          borderRadius: "999px",
          background: "rgba(99,102,241,0.18)",
          color: "#c7d2fe",
          fontSize: "0.7rem",
          border: "1px solid rgba(99,102,241,0.35)",
        }}
      >
        {category}
      </span>

      {period && (
        <div
          style={{
            color: "#818cf8",
            fontSize: "0.85rem",
            marginBottom: "0.4rem",
          }}
        >
          {period}
        </div>
      )}

      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 600,
          marginBottom: "0.8rem",
          color: "white",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#cbd5f5",
          fontSize: "0.95rem",
          lineHeight: 1.65,
          marginBottom: "1.4rem",
        }}
      >
        {description}
      </p>

      {/* TECH STACK */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1.3rem",
        }}
      >
        {tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "0.35rem 0.75rem",
              borderRadius: "999px",
              background: "rgba(99,102,241,0.15)",
              color: "#a5b4fc",
              fontSize: "0.75rem",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* GITHUB LINK */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#e5e7eb",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
        >
          <FaGithub size={18} />
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
