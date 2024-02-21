import React, { useState } from "react";
import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "E-com website",
        id: "Ecom",
    },
    {
        name: "Word Counter",
        id: "wordCounter",
    },
    {
        name: "Weather Website",
        id: "weather",
    },
    {
        name: "Todo-List",
        id: "todo",
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
