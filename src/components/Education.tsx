import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <>
      {/* Inline responsive styles (safe, no imports needed) */}
      <style>
        {`
          .education-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .education-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <section id="education" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 700 }}>
              Education
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
          <div className="education-grid">
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
    </>
  );
};

export default Education;
