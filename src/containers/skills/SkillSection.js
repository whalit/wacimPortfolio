import { Component } from "react";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import Lottie from "lottie-react";
import dataScienceAnimation from "../../assets/images/datas.json";
import fullstackA from "../../assets/images/fullstack.json";
import cloud from "../../assets/images/cloud.json";
import uia from "../../assets/images/ui.json";

import "./Skills.css";

function GetSkillSvg(props) {
  const { fileName, theme } = props;

  // Style pour des animations plus petites
  const smallAnimationStyle = {
    height: "80%", // Réduit de 100% à 60%
    width: "80%",  // Réduit de 100% à 60%
    margin: "auto" // Centre l'animation
  };

  if (fileName === "DataScienceImg") {
    return (
      <Lottie
        animationData={dataScienceAnimation}
        loop
        autoplay
        style={smallAnimationStyle}
      />
    );
  } else if (fileName === "FullStackImg") {
    return (
      <Lottie
        animationData={fullstackA}
        loop
        autoplay
        style={smallAnimationStyle}
      />
    );
  } else if (fileName === "CloudInfraImg") {
    return (
      <Lottie
        animationData={cloud}
        loop
        autoplay
        style={smallAnimationStyle}
      />
    );
  }
  else if (fileName === "DesignImg") {
    return (
      <Lottie
        animationData={uia}
        loop
        autoplay
        style={smallAnimationStyle}
      />
    );
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((skill, i) => {
          const isEven = i % 2 === 0;

          return (
            <div key={i} className="skills-main-div">
              {isEven ? (
                <>
                  <Fade left duration={2000}>
                    <div className="skills-image-div">
                      <GetSkillSvg fileName={skill.fileName} theme={theme} />
                    </div>
                  </Fade>

                  <div className="skills-text-div">
                    <Fade right duration={1000}>
                      <h1
                        className="skills-heading"
                        style={{ color: theme.text }}
                      >
                        {skill.title}
                      </h1>
                    </Fade>
                    <Fade right duration={1500}>
                      <SoftwareSkill logos={skill.softwareSkills} />
                    </Fade>
                    <Fade right duration={2000}>
                      <div>
                        {skill.skills.map((skillSentence, j) => {
                          return (
                            <p
                              key={j}
                              className="subTitle skills-text"
                              style={{ color: theme.secondaryText }}
                            >
                              {skillSentence}
                            </p>
                          );
                        })}
                      </div>
                    </Fade>
                  </div>
                </>
              ) : (
                <>
                  <div className="skills-text-div">
                    <Fade left duration={1000}>
                      <h1
                        className="skills-heading"
                        style={{ color: theme.text }}
                      >
                        {skill.title}
                      </h1>
                    </Fade>
                    <Fade left duration={1500}>
                      <SoftwareSkill logos={skill.softwareSkills} />
                    </Fade>
                    <Fade left duration={2000}>
                      <div>
                        {skill.skills.map((skillSentence, j) => {
                          return (
                            <p
                              key={j}
                              className="subTitle skills-text"
                              style={{ color: theme.secondaryText }}
                            >
                              {skillSentence}
                            </p>
                          );
                        })}
                      </div>
                    </Fade>
                  </div>

                  <Fade right duration={2000}>
                    <div className="skills-image-div">
                      <GetSkillSvg fileName={skill.fileName} theme={theme} />
                    </div>
                  </Fade>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;