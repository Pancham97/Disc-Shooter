import React from 'react';
import Heart from './Heart';


const Guidelines = () => {
    const titleText = {
        textAnchor: 'middle',
        x: 0,
        y: -640,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 80,
            fill: "#e3e3e3",
        },
    };

    const text = {
        textAnchor: 'middle',
        x: 0,
        y: -550,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 40,
            fill: "#e3e3e3",
        },
    };

    return (
        <g filter="url(#shadow)">
            <text {...titleText}>
                Note:
            </text>
            <text {...text}>
                <tspan x="0" y="-550">Point your cursor towards the spaceships and shoot them to save the earth!</tspan>
                <tspan x="0"y="-450">Take care of your lives in the process</tspan>
            </text>
        </g>
    );
};

export default Guidelines;