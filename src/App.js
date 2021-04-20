import React, {Component} from "react"; 
import {Route} from "react-router-dom"; 

import LandingPage from "./LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact render={()=><h1>GGG</h1>} />
      </div>
    );
  }
  
}

export default App;
