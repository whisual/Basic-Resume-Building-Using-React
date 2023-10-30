import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Educations';
import Skills from './components/Skills';

function App() {
  const resumeData = {
    name: "Vishal Sharma",
    title: "Web Developer",
    summary: "Fresher frontend web developer with a passion for creating elegant solutions.",
    experiences: [
      {
        title: "Frontend Developer",
        company: "Hindustan Unilever",
        date: "April 2023 - Present",
        description: "Safety Lead Electrical Engineer Executive"
      },
      // Add more experiences
    ],
    education: [
      {
        degree: "Bachelor of Technology in EEE",
        institution: "COER University",
        date: "2016 - 2020",
        certification: "Web Development",
        bootcamp: "Geekster",
        date1: "2022 - Present"
      },
      // Add more education
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "Java", "SQL"]
  };

  return (
    <div className="resume">
      <Header name={resumeData.name} title={resumeData.title} />
      <Summary summary={resumeData.summary} />
      <Experience experiences={resumeData.experiences} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
    </div>
  );
}

export default App;
