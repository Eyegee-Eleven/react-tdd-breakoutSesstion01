import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList.js';
import { Component } from 'react';

class App extends Component {
  state = {
    people: []
  }
  
  render() {
    return (
      <div className="App">
                    
        <PersonList people={this.state.people} />
      </div>
    );
  }
}

export default App;