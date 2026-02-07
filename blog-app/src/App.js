import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>

            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>

      </div>

    </Router>

    
  );
}

export default App;
