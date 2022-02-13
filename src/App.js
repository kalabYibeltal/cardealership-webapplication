
import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Create  from "./create";
import Cardetails from "./cardetail";
import Cardetailsold from "./cardetailold";
import Pagenon from "./pageunfound";
import About from "./about";


function App() {
  // const title= "welcome to the new blog";
  // const person = {age:"adf", name:"ladfa"};
  return (
    <Router>
    <div className="App">
      <Navbar />   
      <div className="content"> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/car/:id"> 
            <Cardetails/>
          </Route>
          <Route path="/carold/:id"> 
            <Cardetailsold/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path='*'>
            < Pagenon />
          </Route>

        </Switch>
        {/* <h1>{  10+5}</h1>
        <h1>{  title}</h1>
        <h1>{  Math.random()}</h1> */}
        {/* <p> humans { person}</p> */}
        </div>
    </div>
    </Router>
  );
}

export default App;
