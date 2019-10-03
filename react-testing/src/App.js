import React from 'react';
import './App.css';

import Display from "./components/Display"
import DashBoard from "./components/Dashboard"

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Display />
        <DashBoard />
        
      </div>
    );
  }
}

export default App;
