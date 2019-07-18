import React, { Component } from 'react';
import axios from 'axios';

import ProductThumbnail from './ProductThumbnail';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      'http://homedepottcarousel.us-east-2.elasticbeanstalk.com/product-data'
    );
    const products = response.data;
    console.log('component did mount; got products', products);
    this.setState({ products });
  }
  render() {
    return (
      <div id="home">
        <div id="products__container">
          {this.state.products.map(product => (
            <ProductThumbnail key={product.ID} productData={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
