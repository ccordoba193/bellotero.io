import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation'
import Testimonial from './components/Testimonial';
import Calculator from './components/Calculator';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Switch>
            <Route
              path="/Testimonial"
              component={Testimonial} 
            />
            <Route
              path="/Configurator"
              component={Calculator}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
