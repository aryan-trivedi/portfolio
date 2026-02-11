import "../styles/hero.css";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <h1 className="hero-name">
            Hi, I'm <br />
            Aryan <span>Trivedi</span>
          </h1>

          <p className="hero-description">
            Full-stack developer with strong expertise in integrating Generative AI
             into scalable applications. I combine backend engineering with machine 
             learning and data science to build intelligent, production-ready systems. 
             Experienced in designing APIs, data workflows, and LLM-powered features 
             that deliver real-world impact.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="profile-wrapper">
            <img src={profile} alt="Aryan Trivedi" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
