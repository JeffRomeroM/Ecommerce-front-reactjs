import { useState, useEffect } from "react"

export const Categories = () => {
    const [categiries, setCategories] = useState<any[]>([]);

    const API_URL = "http://localhost:3000";
    const ENDPOINT = "categories";

    const getCategories = async () => {
        const response = await fetch(`${API_URL}/${ENDPOINT}`);
        const data = await response.json();
        setCategories(data);
        
    };
    useEffect(() => {
        getCategories();
    }, []);
    

    return (
        <div className="nav">
            <h1>Categorias</h1>
            <ul>
                { categiries.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.name}</a>
                    </li>
                ))}

            </ul> 
        
        </div>  
        
    );
};