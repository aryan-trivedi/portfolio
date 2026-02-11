import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "6rem 1.5rem",
      }}
    >
      {/* SAME CONTAINER STRUCTURE AS PROJECTS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* ===== HEADER ===== */}
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
            Education
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

        {/* ===== GRID (FORCES HORIZONTAL ALIGNMENT) ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 👈 force 3 columns
            gap: "2rem",
          }}
        >
          <EducationCard
            year="2022 – 2026"
            institute="VIT Chennai"
            degree="B.Tech Computer Science Engineering"
            extra="Current CGPA: 8.28 / 10"
          />

          <EducationCard
            year="2022"
            institute="Colonel's Central Academy Gurgaon"
            degree="AISSCE (CBSE)"
            extra="Percentage: 90.1%"
          />

          <EducationCard
            year="2020"
            institute="Our Lady Of Fatima Senior Secondary School Gurgaon"
            degree="AISCE (CBSE)"
            extra="Percentage: 93%"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
