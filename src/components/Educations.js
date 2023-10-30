import React from 'react';

function Education(props) {
    return (
        <div className="education">
            <h2>Education</h2>
            {props.education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}, {edu.date}</p>
                    <h3>{edu.certification}</h3>
                    <p>{edu.bootcamp}, {edu.date1}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Education;
