import React, { useState } from "react";

import Section from "../shared/section/Section";
import Filter from "./Filters/Filters";
import Showcase from "./showcase/Showcase";
import "./style.scss";

import img1 from "../../images/thumbnail/MERN.jpg";
import img2 from "../../images/thumbnail/movie.png";
import img3 from "../../images/thumbnail/e-com.jpg";
import img4 from "../../images/thumbnail/weather.jpg";
import img5 from "../../images/thumbnail/todo.jpg"
import img6 from "../../images/thumbnail/freeLance.jpg";



const projectsData = [
    {
        id: 1,
        name: "MERN Chat App",
        tags: ["MERN"],
        img: img1,
        liveLink : "https://node-talk.onrender.com/",
        sourceLink : "https://github.com/VR-XOLO/node-talk",
    },
    {
        id: 2,
        name: "MovieShare Website",
        tags: ["MovieShare"],
        img: img2,
        liveLink : "https://movieeshare.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/Cinemate",
    },
    {
        id: 3,
        name: "E-com Website",
        tags: ["Ecom"],
        img: img3,
        liveLink : "https://soccerstyle.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/e-com-soccer-style-",
    },
    {
        id: 4,
        name: "Weather Website",
        tags: ["mini"],
        img: img4,
        liveLink : "https://weathercheck-website.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/weather-app",
    },
    {
        id: 5,
        name: "todo",
        tags: ["mini"],
        img: img5,
        liveLink : "https://notes-appss.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/todoList",
    },
    {
        id: 6,
        name: "Photography Portfolio",
        tags: ["Freelance"],
        img: img6,
        liveLink : "https://aarav-films.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/Photography-Portfolio",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);
    const filterProjects = (tag) => {
        setTransition("zoomout");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin")
        }, 200);
        setTimeout(() => {
            setTransition(false);
        }, 600);
    };
    return (
        <>
            <Section
                id="portfolio"
                title="Check Our Portfolio"
                background="light"
            >
                <div className="portfolio-content-wrapper"  style={{display : "flex", flexDirection : "column" , width : "100%", overflow: "auto"}}>
                    <Filter filterProjects={(tag) => filterProjects(tag)} />
                    </div>
                    <Showcase
                        data={projects}
                        transition={transition}
                        key={projectsData.id}
                    />
               
            </Section>
        </>
    );
};

export default Portfolio;
