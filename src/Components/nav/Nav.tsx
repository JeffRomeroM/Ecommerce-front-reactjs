import { useState, useEffect } from "react"
export const Nav = () => {
    const [menu, setMenu] = useState([]);

    const API_URL = "http://localhost:3000";
    const ENDPOINT = "menu";

    const getMenu = async () => {
        //funcion asincrona
        const response = await fetch(`${API_URL}/${ENDPOINT}`);
        //espera que la funcion se realice
        const data = await response.json();
        //se guardan los datos en el state
        setMenu(data);
        
    };
    //ejecuta el menu en automatico
    useEffect(() => {
        getMenu();
    }, []);
    

    return (
        <div className="nav">
            <h1>nav</h1>
            <ul>
                { menu.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.name}</a>
                    </li>
                ))}

            </ul> 
        
        </div>  
        
    );
};