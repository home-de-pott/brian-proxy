import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from './Product';
import Products from './Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          {/* navbar goes here */}
          <div>This is the nav bar</div>
          <Router>
            <Route path="/products/" exact component={Products} />
            <Route path="/products/:id" component={Product} />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
