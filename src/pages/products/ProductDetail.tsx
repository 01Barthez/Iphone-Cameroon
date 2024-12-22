import SEO from '@/components/custom/SEO'
import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <SEO
        title='[Product name] Details - Discover Your Perfect iPhone'
        description='Explore detailed specifications, features, and pricing for the iPhone of your choice. Find your perfect match today.'
      />
      
      Detail of product: {id}
    </>
  )
}

export default ProductDetail
