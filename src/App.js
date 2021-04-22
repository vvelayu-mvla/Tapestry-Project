import React, {Component} from "react"; 
import {Route} from "react-router-dom"; 

import LandingPage from "./LandingPage/LandingPage";
import HomePage from "./HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/tapestry" exact component={()=><HomePage />} />
      </div>
    );
  }
  
}

export default App;
