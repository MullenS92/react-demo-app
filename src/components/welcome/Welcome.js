import React from 'react';

function Welcome(props) {
     let nameVar = props.match.params.name || props.name
    return (
        <div>
            <h1>Hello, {nameVar}!</h1>
        </div>
    );
}

export default Welcome;