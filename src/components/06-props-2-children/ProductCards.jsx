import React from 'react'

const ProductCards = (props) => {
  return (
    <div className='product-card'>
        {
            props.children
        }
    </div>
  )
}

export default ProductCards