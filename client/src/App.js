import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import React, { Component } from 'react';
import Account from './components/mainComponent/main';
import SignIn from './components/signingIn/signIn';



class App extends Component {
  render() {
    return (
    <Router>      
      <div className="App">
        <Route exact path = '/' component={Account}/>
        <Route path="/SignIn" component={SignIn}/>

      </div>
    </Router>
    )
  }
}

export default App;