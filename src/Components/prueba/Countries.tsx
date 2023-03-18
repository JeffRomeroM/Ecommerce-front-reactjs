import { useState, useEffect } from "react"
export const Countries = () => {
    const [countries, setCountries] = useState<any[]>([]);

    const API_URL = "http://localhost:3000";
    const ENDPOINT = "countries";

    const getCountries = async () => {
        const response = await fetch(`${API_URL}/${ENDPOINT}`);
        const data = await response.json();
        setCountries(data);
        
    };
    useEffect(() => {
        getCountries();
    }, []);
    

    return (
        <div className="nav">
            <h1>Paises</h1>
            <ul>
                { countries.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.name}</a>
                    </li>
                ))}

            </ul> 
        
        </div>  
        
    );
};