import React, { Component } from 'react';

class Product extends Component {
  componentDidMount() {
    // NB do this for all microservices
    // carousel
    this.appendScript(
      'http://homedepottcarousel.us-east-2.elasticbeanstalk.com/bundle.js'
    );
    // reviews
    this.appendScript(
      'http://ec2-18-219-134-212.us-east-2.compute.amazonaws.com/bundle.js'
    );
  }
  appendScript(url) {
    const script = document.createElement('script');
    script.src = url;
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
      </div>
    );
  }
}

export default Product;
