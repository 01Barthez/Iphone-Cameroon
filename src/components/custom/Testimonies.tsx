import React from 'react'

const Testimonies: React.FC = () => {
    return (
        <section className='container py-6 md:py-10 lg:py-12 flex flex-col gap-6 items-center'>
            <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
                Hear from our customers
            </h3>

            <p className="max-w-full md:max-w-[85%] text-center text-sm md:text-base text-foreground/90 ">
                At IPhone Cameroun, quality isn't just a word - it's our promise.
                All our iPhones, new and used, undergo strict quality control to ensure they meet the highest standards.
                We understand the importance of having a reliable device, which is why we are committed
                to supplying only products in perfect working order.
            </p>

            {/* Testimony part */}
        </section>
    )
}

export default Testimonies
