import './App.css';
import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Account from './components/mainComponent/main';
import SignIn from './components/signingIn/signIn';
import Forum from './components/forum/forum';
import Comment from './components/forum/commentBox';
import {BrowserRouter as Router, Route} from 'react-router-dom' 



class App extends Component {
  render() {
    return (
    <Router>      
      <div className="App">
        <Header />
        <Route exact path = '/' component={Account}/>
        <Route  path = '/SignIn' component={SignIn}/>
        <Route path = '/Forum' component={Forum}/>
        <Route path = '/Comment' component={Comment}/>
      </div>
    </Router>
    )
  }
}

export default App;