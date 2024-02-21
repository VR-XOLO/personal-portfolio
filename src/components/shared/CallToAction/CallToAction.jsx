import React from "react";
import "./style.scss";
import Arrow from "../Arrow/Arrow";

const CallToAction = ({ text, action, icon }) => {
    return (
        <>
            <div
                className="call-to-action"
                onClick={action}
            >
                <span className="text">{text}</span>
                <span className="arrow-icon">
                    {icon ? <div className="icon">{icon}</div> : <Arrow />}
                </span>
            </div>
        </>
    );
};

export default CallToAction;
