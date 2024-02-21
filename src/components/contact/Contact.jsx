import React from "react";
import "./style.scss";
import Section from "../shared/section/Section.jsx"
import ContactInfo from "./contact-info/ContactInfo";
import  Form  from "./form/Form.jsx"
const Contact = () => {
    return (
        <>
            <Section
                id={"contact"}
                title={"Any Question? Feel Free To Contact"}
                background={"dark"}
            >
                <div className="contact-content-wrapper">

                <ContactInfo/>
                <Form />
                </div>
            </Section>
        </>
    );
};

export default Contact;
