import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './navigation/navBar';
import Home from './pages/home';
import Books from './pages/books';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
          </Switch>
        </Router>
      </div>
    );
  }
}