import React from "react";
import logoImg from "../logoSrc.png";

function AboutUsSection() {
    return (
        <section className="aboutUsSection">
            <h1 className="sectionHeading">
                <div className="aboutUsHeadingText">About Us</div>
                <div className="sectionHeadingUnderline"></div>
            </h1>
            <div className="aboutUsContent">
                <div className="aboutUsContentLogoImg">
                    <img src={logoImg} alt="Logo" draggable="false" />
                </div>
                <div className="aboutUsContentText">
                    <p>
                        Schedularizer is a simple Application made using React.
                        It helps you to maintain tasks and, in our words,
                        "schedularize" your day. This helps you to maintain
                        different lists of tasks and helps you in organisation.
                    </p>
                    <p>
                        It is simple, yet, provides the user with a
                        user-friendly interface. This web app is under development,
                        so features will be added. One of the main features of
                        this app is the emoji rain which appears when you
                        complete a task, which helps you to improve your mood
                        and instills a feel of success when a task is completed.
                    </p>
                </div>
            </div>
            <div className="featuresSection">
                <div className="sectionSubHeading">
                    <div className="aboutUsSubHeadingText">Features</div>
                    <div className="sectionHeadingUnderline"></div>
                </div>
                <div className="featuresContainer">
                    <article className="feature">
                        <div className="featureHeading">
                            The best companion for your busy life!
                        </div>
                        <p className="featureContent">
                            Our application will help you do your tasks on time,
                            when you have a lot of tasks, and remembering all
                            them is difficult.
                        </p>
                    </article>
                    <article className="feature">
                        <div className="featureHeading">
                            Decent GUI to improve mood.
                        </div>
                        <p className="featureContent">
                            A nice GUI which will win your heart. You can customize it with your favourite colour using the cutomize button, as you have to see this everyday.
                        </p>
                    </article>
                    <article className="feature">
                        <div className="featureHeading">
                            Easy and Quick Interface.
                        </div>
                        <p className="featureContent">
                            The application is very simple to use and does not need any manual. So, go ahead and use our app, as soon as possible.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default AboutUsSection;
