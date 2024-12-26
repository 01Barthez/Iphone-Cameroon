import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from "react-router";

const CTA: React.FC = () => {
    let navigate = useNavigate();

    return (
        <Button
            variant={'outline'}
            className='w-fit bg-transparent hover:bg-background/80 py-6 px-10 md:px-14'
            onClick={() => { navigate("/products"); }}
        >
            Shop Now
        </Button>
    )
}


export default CTA
