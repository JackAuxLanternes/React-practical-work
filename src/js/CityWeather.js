import React, {useEffect, useState} from "react";

export default function CityWeather({cityCode, setWeather}) {
    let [selectedWeather, setSelectedWeather] = useState("No city selected");

    useEffect(() => {
        const fetchSearch = () => {
            fetch(`https://www.metaweather.com/api/location/${cityCode}`)
                .then((response) => response.json())
                .then((data) => setSelectedWeather(data['consolidated_weather']))
                .catch((e) => console.error(e));
        }
        fetchSearch();
    }, [cityCode]);

    return(
        <p>Weather here is : {selectedWeather}</p>
    );
}