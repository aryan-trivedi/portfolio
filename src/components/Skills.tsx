import {
  FaCode,
  FaServer,
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Programming & Core Languages",
    icon: <FaCode />,
    description:
      "Strong foundation in core programming languages with problem-solving, OOP, and performance-oriented thinking.",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Full-Stack & Backend Engineering",
    icon: <FaServer />,
    description:
      "Building scalable, production-ready web applications with modern frontend and backend frameworks.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: <FaChartLine />,
    description:
      "Data-driven analysis, visualization, and modeling to extract insights and support decision-making.",
    skills: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Streamlit",
    ],
  },
  {
    title: "GenAI & LLM Systems",
    icon: <FaBrain />,
    description:
      "Designing intelligent systems using LLMs, retrieval-augmented generation, and modern GenAI frameworks.",
    skills: ["LangChain", "LangGraph", "LLM APIs", "Vector Databases", "RAG"],
  },
  {
    title: "Databases & Cloud Infrastructure",
    icon: <FaDatabase />,
    description:
      "Designing reliable data storage and cloud-based architectures for scalable applications.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle SQL",
      "Prisma ORM",
      "Redis",
      "AWS (S3, EC2, Lambda, Redshift)",
    ],
  },
  {
    title: "DevOps, Tools & Collaboration",
    icon: <FaTools />,
    description:
      "Efficient development workflows, version control, automation, and collaborative tooling.",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Jupyter",
      "Google Colab",
      "VS Code",
      "Excel Automation",
      "Team Collaboration",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.6rem", fontWeight: 700 }}>
            Skills
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
          {skillsData.map((block) => (
            <div
              key={block.title}
              style={{
                background:
                  "linear-gradient(180deg, #0f172a, #020617)",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: "18px",
                padding: "2rem",
                boxShadow:
                  "0 0 40px rgba(99,102,241,0.08)",
                transition: "all 0.35s ease",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "#818cf8",
                  marginBottom: "1rem",
                }}
              >
                {block.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                {block.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "1.2rem",
                }}
              >
                {block.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {block.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.4rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      color: "#c7d2fe",
                      background:
                        "rgba(99,102,241,0.15)",
                      border:
                        "1px solid rgba(99,102,241,0.25)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
