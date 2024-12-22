import SEO from '@/components/custom/SEO'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductCategory: React.FC = () => {
    const { categoryID } = useParams();

    return (
        <>
            <SEO
                title={`${categoryID} Category - Discover Your Perfect iPhone`}
                description={`Discover our collection of iPhones in the ${categoryID} category. Find the perfect device that matches your style and needs.`}
            />

            ProductCategory : {categoryID}
        </>
    )
}

export default ProductCategory
