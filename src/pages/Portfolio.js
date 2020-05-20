import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import CoronaScreenshot from "../assets/images/corona-screenshot.png"
import JoyneyScreenshot from "../assets/images/joyney-screenshot.png"
import EmployeeTrackerScreenshot from "../assets/images/employee-tracker-screenshot.png"
import TemplateEngineScreenshot from "../assets/images/template-engine-screenshot.png"
import WeatherDashboardScreenshot from "../assets/images/weather-dashboard-screenshot.png"
import CodeQuizScreenshot from "../assets/images/code-quiz-screenshot.png"
import EmployeeTrackerDemo from "../assets/mp4s/employee-tracker-demo.mp4"
import TemplateEngineDemo from "../assets/mp4s/template-engine-demo.mp4"

const screenshots = {
    "Corona Crisis Center" : CoronaScreenshot,
    "Joyney" : JoyneyScreenshot,
    "Employee Tracker" : EmployeeTrackerScreenshot,
    "Template Engine" : TemplateEngineScreenshot,
    "Weather Dashboard" : WeatherDashboardScreenshot,
    "Code Quiz" : CodeQuizScreenshot
};

const mp4s = {
    "Employee Tracker" : EmployeeTrackerDemo,
    "Template Engine" : TemplateEngineDemo
};

function Portfolio() {
    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-12">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className="row">
                {projects.map(proj => 
                   <Project
                    name={proj.name}
                    screenshot={screenshots[proj.name]}
                    deployed={(proj.name === "Employee Tracker" || 
                        proj.name === "Template Engine") ?
                        mp4s[proj.name] :
                        proj.deployed}
                    repo={proj.repo}
                    key={proj.name} />
                )}
            </div>
        </div>
    );
    
}

export default Portfolio;
