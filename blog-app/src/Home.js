const Home = () => {
    const handleClick = () => {
        console.log('hello there!');
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click here</button>

        </div>
     );
}
 
export default Home;