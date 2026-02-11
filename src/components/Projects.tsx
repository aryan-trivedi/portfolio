import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1.5rem",
      }}
    >
      {/* SHARED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* ===== SECTION HEADER ===== */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Projects
          </h2>

          <div
            style={{
              width: "64px",
              height: "4px",
              margin: "0 auto",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6)",
            }}
          />
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* 1️⃣ PharmaFlow */}
          <ProjectCard
            title="PharmaFlow"
            category="Full-Stack · Healthcare"
            description="A centralized platform to streamline drug procurement and distribution across medical institutions with real-time monitoring, vendor tracking, quality control, and analytics-driven dashboards."
            tech={[
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Mongoose",
              "REST APIs",
            ]}
            github="https://github.com/aryan-trivedi/PharmaFlow"
          />

          {/* 2️⃣ MinuteMind */}
          <ProjectCard
            title="MinuteMind"
            category="AI · NLP"
            description="An AI-powered meeting intelligence system that converts raw audio into structured, actionable summaries using Deepgram ASR and Google Gemini."
            tech={[
              "Python",
              "FastAPI",
              "Deepgram",
              "Gemini",
              "AWS S3",
              "React",
            ]}
            github="https://github.com/aryan-trivedi/MinuteMind"
          />

          {/* 3️⃣ GemmaRAG-Engine */}
          <ProjectCard
            title="GemmaRAG-Engine"
            category="LLMs · RAG"
            description="A privacy-first, fully local Retrieval-Augmented Generation system built on Gemma-3, enabling document ingestion, vector search, and conversational querying."
            tech={[
              "Gemma-3",
              "LangChain",
              "FAISS",
              "FastAPI",
              "Streamlit",
              "Ollama",
            ]}
            github="https://github.com/aryan-trivedi/GemmaRAG-Engine"
          />

          {/* 4️⃣ AI Product Recommender */}
          <ProjectCard
            title="AI Product Recommender"
            category="Machine Learning"
            description="A scalable e-commerce recommendation engine using collaborative, content-based, and hybrid filtering techniques to deliver personalized product suggestions."
            tech={[
              "Python",
              "Pandas",
              "Scikit-learn",
              "Collaborative Filtering",
              "Hybrid Models",
            ]}
            github="https://github.com/aryan-trivedi/AI-Product-Recommender"
          />

          {/* 5️⃣ My-DevConnect */}
          <ProjectCard
            title="My-DevConnect"
            category="MERN Stack"
            description="A full-featured developer social network enabling profile creation, experience sharing, posts, authentication, and GitHub integration."
            tech={[
              "React",
              "Redux Toolkit",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Axios",
            ]}
            github="https://github.com/aryan-trivedi/my-devconnect"
          />

          {/* 6️⃣ Arrhythmia Detection */}
          <ProjectCard
            title="Arrhythmia Detection"
            category="Deep Learning · Healthcare"
            description="A hybrid deep learning system combining Transformer encoders, channel attention, and 1D CNNs for real-time ECG arrhythmia detection with 92.4% accuracy."
            tech={[
              "Transformers",
              "Channel Attention",
              "1D CNN",
              "ECG Processing",
              "Deep Learning",
              "MIT-BIH Dataset",
            ]}
            github="https://github.com/aryan-trivedi/ARRHYTHMIA-DETECTTION-"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
