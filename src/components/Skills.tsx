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
    skills: ["Java", "Python","JavaScript", "TypeScript"],
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
      "Data-driven analysis, visualization, and modeling.",
    skills: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Streamlit",
      "Deep Learning"
    ],
  },
  {
    title: "GenAI & LLM Systems",
    icon: <FaBrain />,
    description:
      "Designing intelligent systems using LLMs and RAG.",
    skills: ["LangChain", "LangGraph", "LLM APIs", "Vector Databases", "RAG","N8N","LlamaIndex","DSpy","Embedding","Chunking"],
  },
  {
    title: "Databases & Cloud Infrastructure",
    icon: <FaDatabase />,
    description:
      "Designing reliable data storage and cloud-based architectures.",
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
      "Efficient workflows and collaboration tooling.",
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
    <>
      <style>
        {`
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: 1fr;
            }
          }

          .skill-card {
            background: linear-gradient(180deg, #0f172a, #020617);
            border: 1px solid rgba(148,163,184,0.15);
            border-radius: 18px;
            padding: 2rem;
            box-shadow: 0 0 40px rgba(99,102,241,0.08);
            transition: all 0.35s ease;
          }

          .skill-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 70px rgba(99,102,241,0.35);
            border: 1px solid rgba(99,102,241,0.4);
          }

          .skill-icon {
            font-size: 2rem;
            color: #818cf8;
            margin-bottom: 1rem;
          }

          .skill-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }

          .skill-desc {
            color: #94a3b8;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.2rem;
          }

          .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .chips span {
            padding: 0.4rem 0.8rem;
            border-radius: 999px;
            font-size: 0.75rem;
            color: #c7d2fe;
            background: rgba(99,102,241,0.15);
            border: 1px solid rgba(99,102,241,0.25);
          }
        `}
      </style>

      <section id="skills" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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

          <div className="skills-grid">
            {skillsData.map((block) => (
              <div key={block.title} className="skill-card">
                <div className="skill-icon">{block.icon}</div>
                <h3 className="skill-title">{block.title}</h3>
                <p className="skill-desc">{block.description}</p>

                <div className="chips">
                  {block.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
