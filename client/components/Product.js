import React, { Component } from 'react';

class Product extends Component {
  componentDidMount() {
    // NB do this for all microservices
    const script = document.createElement('script');
    script.src =
      'http://ec2-18-221-151-249.us-east-2.compute.amazonaws.com/bundle.js';
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        Here be the product
        <div id="product-view__container">
          <div id="product"></div>
          <div id="carousel"></div>
          <div id="reviews"></div>
        </div>
        <script src="./index.js"></script>
      </div>
    );
  }
}

export default Product;
