import "./styles/About.css";
import myPdf   from "../assets/Kavin_CV(4).pdf"; 

function About({ sectionRef }) {
  return (
    <section ref={sectionRef} id="about">
      <div className="section-card">
        <h2 className="section-title ">About Me</h2>

        <div className="about-content">
          {/* Education Card */}
          <div className="edu-card">
            <div className="d-inline-block">
              <h5 className="text-center">Education</h5>
              <p>
                <strong>UG:</strong> Bachelor of Science in Computer Science
                <br />
                KG College of Arts and Science, Coimbatore
                <br />
                2022–2025 — 7.6 CGPA
              </p>
              <p style={{ marginTop: "14px" }}>
                <strong>Currently:</strong> Full Stack Python - Intern
                <br />
                PUMO TECHNOVATION (Coimbatore)
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="about-text">
            <p className="">
              Hi, I'm <strong>Kavin</strong>, a passionate Full Stack Python Developer with strong
              skills in Python, SQL, and modern web technologies. I enjoy creating scalable
              applications and learning new technologies to improve problem-solving and software
              development skills.
            </p>
            <p className="">
              My goal is to contribute to innovative projects while growing as a developer and
              delivering meaningful solutions.
            </p>
            <a href={myPdf} target="_blank" rel="noreferrer" className="btn-view-cv">View CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;