import type { ICardTopSeller } from '@/interface/interface'
import React from 'react'
import { motion } from 'framer-motion';
import CTA2 from '../utils/CTA2';
import truncateText from '../utils/TruncateText';

const CardTopSeller: React.FC<ICardTopSeller> = (props) => {
    return (
        <motion.div
            className='bg-foreground/5 w-fit max-w-[20rem] rounded-lg overflow-hidden p-0'
        >
            {/* Image part */}
            <div className="max-w-80 w-full border-2 border-red-500">
                <img
                    src={props.img}
                    alt={props.name}
                    loading='lazy'
                    className='w-full h-full object-contain select-none'
                />
            </div>

            {/* Content part */}
            <div className="border-2 flex flex-col gap-2 md:gap-4 px-5 md:px-8 py-8 md:py-12">
                {/* name of product section */}
                <h4 className="font-light text-lg md:text-2xl lg:text-3xl ">
                    {props.name}
                </h4>

                {/* little description */}
                <p className="text-sm font-medium text-foreground/85">
                    {
                    truncateText(props.description, 20, "words")
                    }
                </p>

                <CTA2 url={props.url} />
            </div>
        </motion.div>
    )
}

export default CardTopSeller
