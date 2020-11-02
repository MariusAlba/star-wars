import "./App.css";
import FetchMovies from './FetchMovies';
import FetchActors from './FetchActors';
import { Component } from "react";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchMovies />
        <FetchActors />
      </div>
    );
  }
}

export default App;