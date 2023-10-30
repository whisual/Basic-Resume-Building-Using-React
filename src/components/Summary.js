import React from 'react';

function Summary(props) {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <p>{props.summary}</p>
            <hr />
        </div>
    );
}

export default Summary;
