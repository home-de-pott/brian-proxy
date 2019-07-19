import React, { Component } from 'react';
import axios from 'axios';
import Product from 'hd-thumbnail';
import addUpdatePathListener from '../utils/addUpdatePathListener';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    addUpdatePathListener(this.props.history);
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
          {this.state.products.map(product =>
            product ? <Product key={product.ID} product={product} /> : null
          )}
        </div>
      </div>
    );
  }
}

export default Products;
