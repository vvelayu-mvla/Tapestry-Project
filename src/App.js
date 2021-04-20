import React, {Component} from "react"; 
import {Route} from "react-router-dom"; 

import LandingPage from "./LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LandingPage} />
      </div>
    );
  }
  
}

export default App;
