import { useState } from "react";
   
const Home = () => {
    const [name, setName] = useState("Paul");

    const handleClick = () => {
        if(name === "Paul"){
            setName("Junior");
        }
        else {
            setName("Paul");
        }
        
    }
   

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click here</button>



        </div>
     );
}
 
export default Home;