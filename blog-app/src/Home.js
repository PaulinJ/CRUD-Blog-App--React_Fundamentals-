const Home = () => {
    const handleClick = () => {
        console.log('hello there!');
    }
    //function with param
    const handleClickAgain = (name) => {
        console.log("hello " + name);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click here</button>
            {/*how to reference a parameterised function: use an anonymous function and pass it in*/}
            <button onClick={() => {handleClickAgain("Junior")}}>Click here Again</button>

        </div>
     );
}
 
export default Home;