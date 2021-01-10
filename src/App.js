import './App.css';
import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Account from './components/mainComponent/main';
import SignIn from './components/signingIn/signIn';
import Forum from './components/forum/forum';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' 



class App extends Component {
  render() {
    return (
    <Router>      
      <div className="App">
        <Header />
        <Route exact path = '/' component={Account}/>
        <Route exact path = '/SignIn' component={SignIn}/>
        <Route exact path = '/Forum' component={Forum}/>
      </div>
    </Router>
    )
  }
}

export default App;