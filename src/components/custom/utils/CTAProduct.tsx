import type { ICTAProduct } from '@/interface/interface';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTAProduct: React.FC<ICTAProduct> = ({ url, name="Buy Now" }) => {
    const navigate = useNavigate();

    return (
        <button
            className="w-fit bg-foreground/95 hover:bg-foreground px-8 md:px-10 lg:px-14 py-1.5 md:py-2 rounded-lg border-none text-background/95 hover:text-background font-medium duration-300 whitespace-nowrap backdrop-blur-md"
            onClick={() => navigate(url)}
        >
            {name}
        </button>
    )
}

export default CTAProduct
