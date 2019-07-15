import React from 'react';
import { Link } from 'react-router-dom';

const ProductThumbnail = ({ productData }) => {
  const handleProductSelect = function(id) {
    console.log('Selected', id);
    window.dispatchEvent(new CustomEvent('getProduct', { detail: { id } }));
  };
  return (
    <div
      className="products__product"
      onClick={() => handleProductSelect(productData.ID)}
    >
      <Link to={'/products/' + productData.ID}>
        <div className="products__product-image">
          <img src={productData.photo} alt={productData.brand} />
        </div>
        <div className="products__product-name">{productData.name}</div>
      </Link>
    </div>
  );
};

export default ProductThumbnail;
