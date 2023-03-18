import { useState, useEffect } from "react"

export const Brands = () => {
    const [brands, setBrands] = useState<any[]>([]);

    const API_URL = "http://localhost:3000";
    const ENDPOINT = "brands";

    const getBrands = async () => {
        const response = await fetch(`${API_URL}/${ENDPOINT}`);
        const data = await response.json();
        setBrands(data);
        
    };
    useEffect(() => {
        getBrands();
    }, []);
    

    return (
        <div className="nav">
            <h1>Marca</h1>
            <ul>
                { brands.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.name}</a>
                    </li>
                ))}

            </ul> 
        
        </div>  
        
    );
};