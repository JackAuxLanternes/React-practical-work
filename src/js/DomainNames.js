import {useEffect, useState} from "react";

export default function RandomUser({someoneName})
{
    let [domains, setDomains] = useState({});
    useEffect(() => {
        const fetchSearch = () => {
            fetch(`https://api.domainsdb.info/v1/domains/search?domain=${someoneName}`)
                .then((response) => response.json())
                .then((data) => setDomains(data))
                .catch((e) => console.error(e));
        }

        fetchSearch();
    }, [someoneName]);

    return (
        <ul>
            {domains?.map(({ domains }) => (
                <li>
                    <a key={`pokemon-${domains.domain}`} href={domains.domain}>{domains.domain}</a>
                </li>
            ))}
        </ul>
    );
}