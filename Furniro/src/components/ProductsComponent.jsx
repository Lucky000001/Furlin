// import React from 'react';
import ProductsData from './ProductsData ';
import './product.css';

const ProductsComponent = () => {
  return (
    <div className="d-flex justify-content-center px-3 py-4">
      <div className="container ">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-4 ">
        {ProductsData.map(product => (
          <div key={product.id} className="col d-flex justify-content-center">
            <div className="product-box p-3 position-relative" style={{ maxWidth: '285px' }}>
              <img
                src={product.image}
                className="product-image img-fluid"
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure images fill their container
              />
              {product.isNew && (
                <div className="new-label bg-danger text-white rounded-circle d-flex align-items-center justify-content-center position-absolute" style={{ width: '35px', height: '35px', top: '30px', right: '30px' }}>
                  New
                </div>
              )}
              <div className="product-details p-1" style={{ backgroundColor: 'rgb(245, 246, 247)' }}>
                <h5 className="fw-bold prodet">{product.name}</h5>
                <p className="prodetsm">{product.description}</p>
                <div className="pricebox d-flex justify-content-between align-items-center">
                  <p className="mb-1 prodet">
                    <strong>Rp {product.price.toLocaleString()}</strong>
                  </p>
                  {product.originalPrice && (
                    <p className="text-muted mb-0 prodetsm text-end">
                      <del>Rp {product.originalPrice.toLocaleString()}</del>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductsComponent;
