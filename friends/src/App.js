// █████╗ ██████╗ ██████╗ 
//██╔══██╗██╔══██╗██╔══██╗
//███████║██████╔╝██████╔╝
//██╔══██║██╔═══╝ ██╔═══╝ 
//██║  ██║██║     ██║     
//╚═╝  ╚═╝╚═╝     ╚═╝     .js
//

import React, { Component } from 'react';
import './App.css';
//import actions 
import { PrivateRoute } from './components/PrivateRoute';
//import components 
import Login  from './components/Login';
import FriendList from './components/FriendList';
//import link
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="https://media.giphy.com/media/jnskQIduiEHks/giphy.gif"/>
        <div>
          <Link to="/" >Login</Link>
          <Link to="/protected">Friends List</Link>
          <Route path='/' component={ Login } />
          <PrivateRoute exact path='/protected' component={ FriendList } />
        </div>
      </div>
    );
  }
}

export default App;
