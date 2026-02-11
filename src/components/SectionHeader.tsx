const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{title}</h2>
      <div
        style={{
          width: "60px",
          height: "4px",
          margin: "0 auto",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
        }}
      />
    </div>
  );
};

export default SectionHeader;
