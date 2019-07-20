import React, { Component } from 'react';
import urls from '../config';
import appendScript from '../utils/appendScript';
import addUpdatePathListener from '../utils/addUpdatePathListener';

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    addUpdatePathListener(this.props.history);
    // carousel
    // appendScript('http://localhost:3000/bundle.js');
    appendScript(urls.carouselUrl + '/bundle.js');
    //product view
    appendScript(urls.productUrl + '/bundle.js');
    // reviews
    appendScript(urls.reviewsUrl + '/bundle.js');
  }

  render() {
    console.log('rerendering product page');
    return (
      <div>
        <div id="product-view__container">
          <div id="product">
            <div className="spinner">&#128296;</div>
          </div>
          <div id="carousel"></div>
          <div id="reviews"></div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
