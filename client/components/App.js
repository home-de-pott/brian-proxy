import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './ProductPage';
import Products from './Products';
import Home from './Home';
import Via from './Via';
import NotFound from './NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products/" exact component={Products} />
              <Route path="/products/:id" exact component={ProductPage} />
              <Route path="/via/:id" exact component={Via} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
