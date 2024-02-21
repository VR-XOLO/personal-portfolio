import React from "react";
import "./style.scss";
import Arrow from "../../shared/Arrow/Arrow.jsx";
const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div 
                     key={project.name}
                    className={`showcase-item     ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            {/* <span className="text">Project Details</span> */}
                            <div className="btns">
                            <button className="text"><a href={project.sourceLink} target="_blank">Source code</a></button>
                            <button className="text"><a href={project.liveLink} target="_blank">Live Demo </a></button>
                            </div>
                            {/* <Arrow /> */}
                        </div>
                    </div>
                    <img
                        src={project.img}
                        alt="img hello"
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
