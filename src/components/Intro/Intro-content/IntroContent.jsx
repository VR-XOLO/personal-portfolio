import React, { useState } from "react";
import "./style.scss";
import { scrolltoSection } from "../../utils/Helper";

import hand from "../../../images/hand.png";
import gojo from "../../../images/gojo.png";
import CallToAction from "../../shared/CallToAction/CallToAction";
const IntroContent = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuItemClickHandler = (section)=>{
        setMobileMenu(!mobileMenu);
        scrolltoSection(section)
    }
    return (
        <>
            <div className="intro-content">
                <div className="layout">
                    <div className="left-col">
                        <h1 className="title">
                            <span className="small-text">
                                <span className="text">Hello</span>
                                <span className="icon">
                                    <img
                                        src={hand}
                                        alt=""
                                    />
                                </span>
                                <span className="text"> ,I am</span>
                            </span>
                            <span className="big-text">  Mohammad Sahil</span>
                        </h1>
                        <p className="title">
                        Highly motivated frontend fresher developer proficient in HTML, CSS,
JavaScript and React.js committed to delivering pixel-perfect designs
and intuitive user interfaces. Seeking opportunities to contribute to
cutting-edge projects and expand technical skill set.
                        </p>
                        <CallToAction text="Contact Me"  action={() => 
                                menuItemClickHandler("contact")} />
                    </div>
                    <div className="right-col">
                        <img
                            src={gojo}
                            alt="gojo"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroContent;
