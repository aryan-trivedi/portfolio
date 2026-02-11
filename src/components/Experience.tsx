import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <SectionHeader title="Professional Experience" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Oasis Infobyte */}
        <ExperienceCard
          role="Full Stack Developer"
          company="Oasis Infobyte"
          period="Aug 2025"
          location="Remote"
          points={[
  "Designed and developed RESTful APIs using Node.js and Express to support core application workflows and data exchange.",
  "Implemented backend business logic, validation, and error handling to ensure reliability, scalability, and security.",
  "Integrated databases and optimized API performance, enabling smooth frontend consumption and improved system responsiveness.",
]}

          tech={[
  "Node.js",
  "Express.js",
  "REST APIs",
  "Authentication & Authorization",
  "Scalable Backend Systems",
]}

        />

        {/* buildspace */}
        <ExperienceCard
          role="Machine Learning Engineer"
          company="Buildspace"
          period="Global Program"
          location="Remote"
          points={[
            "Built AI-first products using LLMs, vector search, and retrieval-augmented generation (RAG).",
            "Developed full-stack ML features integrating model inference with modern web stacks.",
            "Optimized prompts, embeddings, and data pipelines to improve response quality and latency.",
            "Shipped rapid prototypes weekly, focusing on real user problems and feedback loops.",
          ]}
          tech={[
  "Large Language Models (LLMs)",
  "Prompt Engineering",
  "Embeddings",
  "Retrieval-Augmented Generation (RAG)",
  "Fine-Tuning (LoRA / PEFT)",
  "Inference Optimization",
  "Hugging Face Transformers",
  "LangChain",
  "PyTorch",
  "TensorFlow",
  "NumPy",
  "Pandas",
  "scikit-learn",
  "XGBoost",
]}

        />
      </div>
    </section>
  );
};

export default Experience;
