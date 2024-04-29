import React, { useState } from "react";
import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "MERN-Chat-App",
        id: "MERN",
    },
    {
        name: "MovieShare Website",
        id: "MovieShare",
    },
    {
        name: "E-com Website",
        id: "Ecom",
    },
    {
        name: "Freelance Project",
        id: "Freelance",
    },
];

const Filter = ({ filterProjects }) => {
    const [active, setActive] = useState("");
    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };
    return (
        <>
            <ul className="filter-menu-items">
                {filtersData.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={`filter-menu-item  ${
                                active === item.id ? "active" : ""
                            }`}
                            onClick={() => clickHandler(item.id)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Filter;
