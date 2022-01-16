import React from 'react';

import "./Flight.css";


const Flight = (props) => {
    const {launch_year, mission_name, mission_patch_small} = props;

    return (
        <div className="flight">
            <div width="150">
                <h3>{mission_name}</h3>
                <h5>{launch_year}</h5>
            </div>
            <div>
                <img src={mission_patch_small} alt="mission_patch_small" width="150"/>
            </div>
        </div>
    );
};

export default Flight;