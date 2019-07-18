import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import axios from 'axios';

import urls from '../config';

class ProductThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: props.productData,
      avgRating: 0,
      numberOfRatings: 0,
    };
    const price = props.productData.price.split('.');
    const dollars = price[0];
    let cents = price[1] || '00';
    if (cents.length === 1) {
      cents += '0';
    }
    this.state.price = price;
    this.state.dollars = dollars;
    this.state.cents = cents;
  }

  async componentDidMount() {
    const response = await axios.get(
      urls.reviewsUrl + '/reviews/' + this.state.productData.ID
    );
    const reviews = response.data;
    console.log('Reviews', reviews);
    const avgRating = this.getAvgRating(reviews);
    this.setState({ avgRating, numberOfRatings: reviews.length });
  }

  handleProductSelect(id) {
    console.log('Selected', id);
    window.dispatchEvent(new CustomEvent('getProduct', { detail: { id } }));
  }

  getAvgRating(reviews) {
    let totalRating = 0;
    for (let review of reviews) {
      totalRating += review.rating;
    }
    return Math.round((totalRating / reviews.length) * 10) / 10;
  }

  render() {
    let { ID, name, brand, photo } = this.state.productData;
    return (
      <div
        className="products__product"
        onClick={() => this.handleProductSelect(ID)}
      >
        <Link to={'/products/' + ID}>
          <div className="products__product-image">
            <img src={photo} alt={name} />
          </div>
          <div className="products__product-name">
            {name}
            <div>
              by <strong>{brand}</strong>
            </div>
          </div>
          <div className="products__product-rating">
            <Rating
              initialRating={this.state.avgRating}
              readonly={true}
              emptySymbol={<span style={{ color: '#f96302' }}>&#9734;</span>}
              fullSymbol={<span style={{ color: '#f96302' }}>&#9733;</span>}
              fractions={2}
            />
            <span className="ratings"> ({this.state.numberOfRatings})</span>
          </div>
          <div className="products__product-price">
            <span className="bling">$</span>
            <span className="dollars">{this.state.dollars}</span>
            <span className="cents price">{this.state.cents}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductThumbnail;
