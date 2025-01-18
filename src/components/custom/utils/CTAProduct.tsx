import type { ICTAProduct } from '@/interface/interface';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTAProduct: React.FC<ICTAProduct> = ({ url, name="Buy Now" }) => {
    const navigate = useNavigate();

    return (
        <button
            className="w-fit bg-footer hover:bg-footer/90 px-14 py-2 rounded-md text-footer-foreground/90 hover:text-footer-foreground font-semibold duration-300 whitespace-nowrap"
            onClick={() => navigate(url)}
        >
            {name}
        </button>
    )
}

export default CTAProduct
