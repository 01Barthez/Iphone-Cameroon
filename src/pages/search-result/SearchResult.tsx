import SEO from '@/components/custom/SEO'
import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchResult: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Récupérer la valeur du paramètre "query"
  const category = searchParams.get("query");

  return (
    <>
      <SEO
        title={`Search Product of Catégory ${category} - Find Your Desired iPhone`}
        description="Browse through our search results to find the iPhones and accessories you're looking for."
      />

      Search Result
    </>
  )
}

export default SearchResult
