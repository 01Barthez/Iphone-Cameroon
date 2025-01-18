import React from 'react'
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router";
import type { ICTA2 } from '@/interface/interface';

const CTA2: React.FC<ICTA2> = ({name="More Products", url}) => {
    let navigate = useNavigate();

    return (
        <Button
            variant={'outline'}
            className='w-fit text-base py-5 px-4 md:px-6'
            onClick={() => { navigate(`${url}`) }}
        >
            {name}
        </Button>
    )
}


export default CTA2
