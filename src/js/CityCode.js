import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

export default function CityCode({cityName, setCityCode}) {
    let [selectedCityCode, setSelectedCityCode] = useState(null);

    useEffect(() => {
        const fetchSearch = () => {
            fetch(`https://www.metaweather.com/api/location/search/?query=${cityName}`)
                .then((response) => response.json())
                .then((data) => setSelectedCityCode(data['0']))
                .catch((e) => console.error(e));
        }

        console.log(selectedCityCode);

        fetchSearch();
    }, []);

    const handleClick = (e) => {
        setCityCode(e.target.value);
        setSelectedCityCode(e.target.value);
    }

    return (
        <Button
            onClick={handleClick}
            key={`city-${cityName}`}
        >
            {cityName}
        </Button>

    );
}