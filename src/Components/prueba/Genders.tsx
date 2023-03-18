import { useState, useEffect } from "react"
export const Genders = () => {
    const [genders, setGenders] = useState<any[]>([]);

    const API_URL = "http://localhost:3000";
    const ENDPOINT = "genders";

    const getGenders = async () => {
        const response = await fetch(`${API_URL}/${ENDPOINT}`);
        const data = await response.json();
        setGenders(data);
        
    };
    useEffect(() => {
        getGenders();
    }, []);
    

    return (
        <div className="nav">
            <h1>Genero</h1>
            <ul>
                { genders.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.name}</a>
                    </li>
                ))}

            </ul> 
        
        </div>  
        
    );
};