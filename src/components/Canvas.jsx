import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import PropTypes from 'prop-types';

const Canvas = (props) => {
    const style = {
        border: '1px solid #000',
    };

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];


    return(
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            onMouseMove={props.trackMouse}
            viewBox={viewBox} >
            <Sky />
            <Ground />
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            {/* <circle cx={0} cy={0} r={50} /> */}
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;