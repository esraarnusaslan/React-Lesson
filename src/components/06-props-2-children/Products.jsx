import React from 'react';
import ProductCards from './ProductCards';
import "./ProductCard.scss"

const Products = () => {
    return (
        <div>
            <ProductCards>
                <h2>Sony TV</h2>
                <p>lorem</p>
                <button>Add Product</button>
            </ProductCards>

            <ProductCards>
                <h2>Philips TV</h2>
                <p>lorem</p>
                <button >Add Product</button>
            </ProductCards>
        </div>
    );
};

export default Products;
