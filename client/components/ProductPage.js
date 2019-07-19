import React, { Component } from 'react';
import urls from '../config';
import appendScript from '../utils/appendScript';

class ProductPage extends Component {
  componentDidMount() {
    window.addEventListener('getProduct', event => {
      console.log('pushing history');
      this.props.history.push('/products/' + event.detail.id);
    });

    //product view
    // appendScript(urls.productUrl + '/bundle.js');
    // carousel
    appendScript('http://localhost:3000/bundle.js');
    // appendScript(urls.carouselUrl + '/bundle.js');
    // reviews
    appendScript(urls.reviewsUrl + '/bundle.js');
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

export default ProductPage;
