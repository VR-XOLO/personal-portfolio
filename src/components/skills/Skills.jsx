import "./style.scss";
import Section from "../shared/section/Section.jsx";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction/CallToAction.jsx";
import resume from "../../images/sahil_resume.pdf"
const Skills = () => {
    return (
        <>
            <Section
                background="dark"
                id="skills"
            >
                <div className="skills-content-wrapper">
                    <div className="left-col">
                        <img
                            src={TechIcons}
                            alt=""
                        />
                    </div>
                    <div className="right-col">
                        <h2>Skills</h2>
                        <p>
                            Highly motivated frontend fresher developer
                            proficient in HTML, CSS, JavaScript and React.js
                            committed to delivering pixel-perfect designs and
                            intuitive user interfaces. Seeking opportunities to
                            contribute to cutting-edge projects and expand
                            technical skill set.
                        </p>
                         <a href={resume} target="_blank" rel="noreferrer">
                        <CallToAction text="Download CV" />
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Skills;
