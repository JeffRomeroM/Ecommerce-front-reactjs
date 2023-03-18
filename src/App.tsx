import { useEffect, useState } from "react";
import { Nav } from "./Components/nav/Nav";
import { Countries } from "./Components/prueba/Countries";
import { Genders} from "./Components/prueba/Genders";
import { Brands } from "./Components/prueba/Brands";
import { Categories } from "./Components/prueba/Categories";


function App() {
  const [products, setProducts]  = useState([]);
  const [users, setUsers]  = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const USERS_ENDPOINT = "users";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };
  
  const getUsers = async () => {
    const response = await fetch(`${API_URL}/${USERS_ENDPOINT}`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  return (
    <div className="App">
      <Countries/>
      <Genders/>
      <Brands/>
      <Categories/>
      
      <Nav/>
      <h1>Products</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
      
      <h1>Users</h1>
      {users.map((users: any) => (
        <div key={users.id}>{users.name}</div>
      ))}
    </div>
  );
}

export default App;
