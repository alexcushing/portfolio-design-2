import React from "react";
import Card from "./Card";


const ExpCont = () => (
    <div className = 'experience-container-outer'>
        <div className="header-title">
            <div>Professional <span className="bold">Experience</span></div>
        </div>
        <div className="exp-cards">
            <Card
            cardWhite={false}
            name="Putnam Investments"
            desc = "Worked in web and software development creating interfaces for data manipulation, python cycles for automating work tasks, ETL jobs, and more."
            photoLink="https://i.imgur.com/Bhsk273.png"
            color="blue"
            subtitle="Software Engineering Co-op"
            otherInfo={{tech : ['JavaScript', 'Python/Django', 'JQuery' , 'SCSS', 'SQL', 'HTML']}}
            hover={false}
            other={{location: 'Andover, MA', link:''}}
            />
            <Card
            cardWhite={false}
            name="Putnam Investments"
            desc = "Worked on the mobile team developing internal applications. Built a framework or reusable components and a testing application for this framework."
            photoLink="https://i.imgur.com/Bhsk273.png"
            color="blue"
            subtitle="Mobile Developer Internship"
            otherInfo={{tech : ['Swift', 'Objective C']}}
            hover={false}
            other={{location: 'Boston, MA', link:''}}
            />
        </div>
    </div>
)

export default ExpCont;