import { BenefitsElements } from '@/core/mocks/mock-benefits'
import { motion } from 'framer-motion'
import React from 'react'
import { MagicCard } from "@/components/ui/magic-card";
import { Link } from 'react-router-dom';
import { useTheme } from "@/hooks/use-theme";
import { cardBenefitsVariants } from '@/core/variants/varaints';

const Benefits: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section className='py-6 md:py-10 lg:py-12'>
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                {
                    BenefitsElements.map((ele, index) => (
                        <motion.div
                            key={ele.id}
                            custom={index}
                            variants={cardBenefitsVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: .2}}
                            className='w-auto relative'
                        >
                            <MagicCard
                                className="flex flex-col items-center justify-center text-center  gap-4 shadow-none p-4 md:p-6"
                                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                            >
                                <Link
                                    to={ele.link}
                                    className="inline-block p-2 md:p-3 rounded-full bg-foreground/90 hover:bg-foreground text-center text-background/90 hover:text-background duration-300 text-lg md:text-xl"
                                >
                                    {ele.icon}
                                </Link>

                                <Link
                                    to={ele.link}
                                    className=""
                                >
                                    <h4 className="text-sm md:text-sm font-medium capitalize text-center text-foreground/90 hover:text-foreground duration-300">
                                        {ele.content}
                                    </h4>
                                </Link>
                            </MagicCard>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Benefits


/*
import { BenefitsElements } from '@/core/mocks/mock-benefits'
import React from 'react'
import { motion } from 'framer-motion';
import { MagicCard } from "@/components/ui/magic-card";
// import { useTheme } from "@/hooks/use-theme";
import { Link } from 'react-router-dom';

const Benefits: React.FC = () => {
    // const { theme } = useTheme();

    return (
        <section className='py-6 md:py-10 lg:py-12'>
            <div className="container flex justify-between">
                {
                    BenefitsElements.map((ele) => (
                        <motion.div
                            key={ele.id}
                        >
                            <MagicCard
                                className="flex flex-col items-center shadow-2xl"
                                // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                            >
                                <Link
                                    to={ele.link}
                                    className="inline-block p-4 rounded-full bg-foreground/80 hover:bg-foreground text-center text-background/80 hover:text-background"
                                >
                                    {ele.icon}
                                <Link>
                            </MagicCard>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}
export default Benefits

*/ 