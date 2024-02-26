import React from 'react';
import products from '../../assets/data/products.js';

const Products = () => {
    
    const productList = products.map((item) => (
        <li key={item.id}>{item.name}</li>
    ));

    return <ol>{productList}</ol>;
};

export default Products;
