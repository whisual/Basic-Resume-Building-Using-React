import React from 'react';

function Skills(props) {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
}

export default Skills;
