import React from 'react';
//import './App.scss';
//import './index.css'
import {
  // MainPage,
  Home,
} from './components/pages/index';
  
  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        user: {},
        details: {},
    }
  }
  
  render(){
    return (
      <Home />
    )
  }
};


export default App;
