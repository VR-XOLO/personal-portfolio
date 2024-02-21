import React, { useState } from "react";

import Section from "../shared/section/Section";
import Filter from "./Filters/Filters";
import Showcase from "./showcase/Showcase";
// import "./style.scss";
// import img1 from "../../images/thumbnail/food-order.jpg";
// import img2 from "../../images/thumbnail/nature-1.jpg";
// import img3 from "../../images/thumbnail/todo.jpg";
// import img4 from "../../images/thumbnail/weather.jpg";
// import img5 from "../../images/thumbnail/Ecom.jpg";
// import img6 from "../../images/thumbnail/wr.jpg";
import img1 from "../../images/portfolio/thumb-1.jpg";
import img2 from "../../images/portfolio/thumb-2.jpg";
import img3 from "../../images/portfolio/thumb-3.jpg";
import img4 from "../../images/portfolio/thumb-4.jpg";
import img5 from "../../images/portfolio/thumb-5.jpg";
import img6 from "../../images/portfolio/thumb-6.jpg";



const projectsData = [
    {
        id: 1,
        name: "food ordering website",
        tags: ["Ecom"],
        img: img1,
        liveLink : "https://phenomenal-flan-3b1523.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/food-website",
    },
    {
        id: 2,
        name: "Nature Website",
        tags: ["Ecom"],
        img: img2,
        liveLink : "https://naturee-web.netlify.app",
        sourceLink : "https://github.com/VR-XOLO/nature_project",
    },
    {
        id: 3,
        name: "Todo List",
        tags: ["todo"],
        img: img3,
        liveLink : "https://notes-appss.netlify.app",
        sourceLink : "https://github.com/VR-XOLO/todoList",
    },
    {
        id: 4,
        name: "Weather Website",
        tags: ["weather"],
        img: img4,
        liveLink : "https://weathercheck-website.netlify.app/",
        sourceLink : "https://github.com/VR-XOLO/weather-app",
    },
    {
        id: 5,
        name: "Ecom Website",
        tags: ["Ecom"],
        img: img5,
        liveLink : "https://soccerstyle.netlify.app",
        sourceLink : "https://github.com/VR-XOLO/e-com-soccer-style-",
    },
    {
        id: 6,
        name: "Word Counter",
        tags: ["wordCounter"],
        img: img6,
        liveLink : "https://wordss-counter.netlify.app",
        sourceLink : "https://github.com/VR-XOLO/word_counter",
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
                <div className="portfolio-content-wrapper">
                    <Filter filterProjects={(tag) => filterProjects(tag)} />
                    <Showcase
                        data={projects}
                        transition={transition}
                        key={projectsData.id}
                    />
                </div>
            </Section>
        </>
    );
};

export default Portfolio;
