import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import './App.css';
import Home from '../Home/Home';
import Table from '../Table/Table';
import Nav from '../Nav/Nav';
import Record from '../Record/Record';

class App extends Component {
  componentDidMount () {
    console.log('app mounted');
  }

  render() {
    return (
      <Router>
        
        <div>
          <Nav />
          
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/standings"
              component={Table}
            />
            <Route
              exact
              path="/record"
              component={Record}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
  )}
}

export default connect()(App);

