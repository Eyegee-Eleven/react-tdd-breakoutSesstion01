import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList.js';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      people: ['hi']
    }
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