import { Component } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { experience } from "../../portfolio.js";
import "./Experience.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    const internshipExperiences = experience.sections.find(
      (section) => section.title === "Internships"
    )?.experiences.slice(0, 2) || [];

    const workExperiences = experience.sections.find(
      (section) => section.title === "Work"
    )?.experiences.slice(0, 3) || [];

    const extraActivitiesExperiences = experience.sections.find(
      (section) => section.title === "Extra Activities"
    )?.experiences.slice(0, 4) || [];

    return (
      <div className="experience-main">
        <Header theme={this.props.theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  {experience.title}
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  {experience.subtitle}
                </h3>
              </div>
            </div>
          </Fade>

          {/* Internships Section */}
          {internshipExperiences.length > 0 && (
            <div className="experience-section">
              <Fade bottom duration={1000} distance="20px">
                <h2 className="section-title" style={{ color: theme.text }}>
                  Internships
                </h2>
              </Fade>
              <div className="experience-cards">
                {internshipExperiences.map((exp, expIndex) => (
                  <ExperienceCard key={`internship-${expIndex}`} experience={exp} theme={theme} />
                ))}
              </div>
            </div>
          )}

          {/* Work Section */}
          {workExperiences.length > 0 && (
            <div className="experience-section">
              <Fade bottom duration={1000} distance="20px">
                <h2 className="section-title" style={{ color: theme.text }}>
                  Work Experience
                </h2>
              </Fade>
              <div className="experience-cards">
                {workExperiences.map((exp, expIndex) => (
                  <ExperienceCard key={`work-${expIndex}`} experience={exp} theme={theme} />
                ))}
              </div>
            </div>
          )}

          {/* Extra Activities Section */}
          {extraActivitiesExperiences.length > 0 && (
            <div className="experience-section">
              <Fade bottom duration={1000} distance="20px">
                <h2 className="section-title" style={{ color: theme.text }}>
                  Extra Activities
                </h2>
              </Fade>
              <div className="experience-cards">
                {extraActivitiesExperiences.map((exp, expIndex) => (
                  <ExperienceCard key={`extra-${expIndex}`} experience={exp} theme={theme} />
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;