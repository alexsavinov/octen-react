import React, {useEffect, useState} from 'react';

import Flight from "../Flight/Flight";


const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value.filter(val => val.launch_year !== '2020')));
    }, [])

    return (
        <div className="flights">
            <h2>Flights</h2>
            {flights.map(value => <Flight key={value.flight_number}
                                          launch_year={value.launch_year}
                                          mission_name={value.mission_name}
                                          mission_patch_small={value.links.mission_patch_small}
            />)}
        </div>
    );
};

export default Flights;