import {useEffect, useState} from "react";

export default function RandomUser({setSomeoneName})
{
    let [someone, setSomeone] = useState({});
    useEffect(() => {
        const fetchSearch = () => {
            fetch(`https://randomuser.me/api/`)
                .then((response) => response.json())
                .then((data) => setSomeone(data))
                .catch((e) => console.error(e));
        }
        fetchSearch();
    }, []);

    setSomeoneName = someone.name;

    return (
        <p>
            {someone.name}
        </p>
    );
}