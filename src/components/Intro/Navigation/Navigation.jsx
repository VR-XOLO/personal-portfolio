import React, { useState } from "react";
import "./style.scss";

import {CgMenuRight} from "react-icons/cg";
import {IoMdClose} from "react-icons/io"

import logo from "../../../images/logo/logoFinal.svg";
// import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction/CallToAction";
import { scrolltoSection } from "../../utils/Helper";
const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuItemClickHandler = (section)=>{
        setMobileMenu(!mobileMenu);
        scrolltoSection(section)
    }
    return (
        <>
            <div className="top-navigation-bar">
                <div className="app-logo">
                    <img
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="mobileMenu" onClick={()=>setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? (
                        <IoMdClose  size={30} color="#fff"  style={{position : "fixed", right : "10px", top : "20px"}}/>
                    ) : (
                        <CgMenuRight  size={30} color="#fff" />
                    ) }
                </div>
                <div className={`navigation ${mobileMenu? "active" : ""}`}>
                    <span className="navigation-item"  onClick={() => {
                                menuItemClickHandler("skills");
                            }}>Skills</span>
                    <span className="navigation-item"  onClick={() => {
                                menuItemClickHandler("portfolio");
                            }}>Portfolio</span>
                    <span className="navigation-item"  onClick={() => {
                                menuItemClickHandler("footer");
                            }}>Support Links</span>
                    <CallToAction text="Contact Me" action={() => 
                                menuItemClickHandler("contact")} />
                </div>
            </div>
        </>
    );
};

export default Navigation;
