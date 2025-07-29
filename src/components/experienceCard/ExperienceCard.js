import { Component } from "react";
import { Fade, Flip } from "react-reveal";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const sectionTitle = this.props.sectionTitle; // New prop for section title
    const isFirstInSection = this.props.isFirstInSection; // New prop to know if this is first card in section

    return (
      <div>
        {/* Display section title only for the first card in each section */}
        {isFirstInSection && sectionTitle && (
          <div className="experience-section-title">
            <h2 style={{ 
              color: theme.text, 
              textAlign: 'center', 
              fontSize: '32px',
              fontFamily: 'Google Sans Medium',
              margin: '40px 0 20px 0'
            }}>
              {sectionTitle}
            </h2>
          </div>
        )}
        
        <div className="experience-degree-card">
          {experience.logo_path && (
            <Flip left duration={2000}>
              <div className="experience-card-img">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    transform: "scale(0.9)",
                  }}
                  src={require(`../../assets/images/${experience["logo_path"]}`)}
                  alt={experience["company"]}
                />
              </div>
            </Flip>
          )}
          <Fade right duration={2000} distance="40px">
            <div
              className="experience-card-body"
              style={{ width: experience.logo_path ? "90%" : "100%" }}
            >
              <div
                className="experience-body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="experience-body-header-title">
                  <h2 className="experience-card-title" style={{ color: theme.text }}>
                    {experience["title"]}
                  </h2>
                  <h3 className="experience-card-subtitle" style={{ color: theme.text }}>
                    {experience["company_url"] ? (
                      <a
                        href={experience["company_url"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: theme.text, textDecoration: 'none' }}
                      >
                        {experience["company"]}
                      </a>
                    ) : (
                      experience["company"]
                    )}
                    {experience["location"] && ` • ${experience["location"]}`}
                  </h3>
                </div>
                <div className="experience-body-header-duration">
                  <h3 className="experience-duration" style={{ color: theme.text }}>
                    {experience["duration"]}
                  </h3>
                </div>
              </div>
              <div className="experience-body-content">
                {/* Handle both 'description' (string) and 'descriptions' (array) */}
                {experience.descriptions ? (
                  // If descriptions array exists, map through it
                  experience.descriptions.map((sentence, i) => (
                    <p key={i} className="experience-content-list" style={{ color: theme.text }}>
                      {sentence}
                    </p>
                  ))
                ) : experience.description ? (
                  // If single description string exists, display it
                  <p className="experience-content-list" style={{ color: theme.text }}>
                    {experience.description}
                  </p>
                ) : null}
                {experience.website_link && (
                  <a
                    href={experience.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;