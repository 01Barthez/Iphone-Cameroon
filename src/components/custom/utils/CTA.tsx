import React from 'react'
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router";

const CTA: React.FC = () => {
    let navigate = useNavigate();

    return (
        <Button
            variant={'outline'}
            className='w-fit border-footer-foreground bg-background/5 text-base hover:bg-background/20 py-6 px-10 md:px-14'
            onClick={() => { navigate("/products"); }}
        >
            Shop Now
        </Button>
    )
}


export default CTA
