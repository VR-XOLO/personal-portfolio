import React from "react";
import "./style.scss";

import { BsAwardFill } from "react-icons/bs";
import {FaUser}  from "react-icons/fa"

import hand from "../../../images/hand.png";
import gojo from "../../../images/gojo.png";
import CallToAction from "../../shared/CallToAction/CallToAction";
const IntroContent = () => {
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
                        <CallToAction text="Contact Me" />
                    </div>
                    <div className="right-col">
                        <img
                            src={gojo}
                            alt="gojo"
                        />

                        <div className="highlights horizontal">
                            <div className="icon">
                                <BsAwardFill />
                            </div>
                            <div className="text">Best Design Award</div>
                        </div>

                        <div className="highlights verticle">
                            <div className="icon">
                                <FaUser />
                            </div>
                            I
                            <div className="text">
                                <span>4k+</span>
                                Happy Customers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroContent;
