import React from "react";
import "./style.scss";
import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaFacebookF
} from "react-icons/fa";
import Section from "../shared/section/Section.jsx";
import Social from "./social-icon/Social.jsx";

import { scrolltoSection } from "../utils/Helper";
import Logo from "../../images/logo/logoFinal.svg";
const Footer = () => {
    return (
        <>
            <Section
                background="light"
                className="footer"
                id="footer"
            >
                <div className="footer-content-wrapper">
                    <div className="footer-logo">
                        <img
                            src={Logo}
                            alt="logo"
                        />
                    </div>
                    <ul className="footer-menu-items">
                        <li
                            className="footer-menu-item"
                            onClick={() => {
                                scrolltoSection("Intro-section");
                            }}
                        >
                            Home
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => {
                                scrolltoSection("skills");
                            }}
                        >
                            Skills
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => {
                                scrolltoSection("portfolio");
                            }}
                        >
                            Portfolio
                        </li>

                        <li
                            className="footer-menu-item"
                            onClick={() => {
                                scrolltoSection("contact");
                            }}
                        >
                            Contact Me
                        </li>
                    </ul>
                    <div className="social-icons">
                        <Social
                            color="#E1306C"
                            icon={<FaInstagram />}
                            link="https://www.instagram.com/_sahil.exe__/"
                        />
                        <Social
                            color="#0D2636"
                            icon={<FaGithub />}
                            link="https://github.com/VR-XOLO"
                        />
                        <Social
                            color="#0A66C2"
                            icon={<FaLinkedin />}
                            link="https://www.linkedin.com/in/mohammad-sahil-a198891b3/"
                        />
                        
                        <Social
                            color="#3b5998"
                            icon={<FaFacebookF />}
                            link="https://www.facebook.com/profile.php?id=100014689531913"
                        />
                    </div>
                    <div className="bottom-bar">
                        <div className="copyright-text">
                        Copyright 2024 VR_XOLO | All Rights Reserved
                        </div>

                    </div>
                </div>
            </Section>
        </>
    );
};

export default Footer;
