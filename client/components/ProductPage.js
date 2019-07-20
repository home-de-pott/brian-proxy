import React, { Component } from 'react';
import urls from '../config';
import appendScript from '../utils/appendScript';
import addUpdatePathListener from '../utils/addUpdatePathListener';
import axios from 'axios';

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    //see reroute if bad request
    const id = this.props.match.params.id;
    try {
      const response = await axios.get(
        urls.carouselUrl + '/product-data/' + id
      );
      console.log('Does this exist?', response.status);
    } catch (error) {
      console.log('invalid something');
      this.props.history.push('/oops');
    }

    addUpdatePathListener(this.props.history);
    // carousel
    // appendScript('http://localhost:3000/bundle.js');
    appendScript(urls.carouselUrl + '/bundle.js');
    //product view
    appendScript(urls.productUrl + '/bundle.js');
    // reviews
    appendScript(urls.reviewsUrl + '/bundle.js');
  }
  //this is a comment

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
