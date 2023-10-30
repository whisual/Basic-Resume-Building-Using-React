import React from 'react';

function Experience(props) {
    return (
        <div className="experience">
            <h2>Experience</h2>
            {props.experiences.map((experience, index) => (
                <div key={index}>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}, {experience.date}</p>
                    <p>{experience.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Experience;
