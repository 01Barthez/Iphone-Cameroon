import React from 'react'
import { useParams } from 'react-router-dom';

const ProductReviews: React.FC = () => {
    const { productID } = useParams();
  
    return (
        <div>
            Product {productID} Reviews
        </div>
    )
}

export default ProductReviews
