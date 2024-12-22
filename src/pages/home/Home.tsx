import CardProduct from '@/components/custom/cards/CardProduct'
import SEO from '@/components/custom/SEO'
import React from 'react'

const Home: React.FC = () => {
    const product = {
        name: "iPhone 14 Pro",
        price: "$999",
        description: "The ultimate smartphone experience with high resolution.",
        discount: "20",
        modelPath: "/models/iphone.glb",
    };

    return (
        <>
            <SEO
                title='Welcome to iPhone Store Cameroon - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <CardProduct product={product} />
            </div>
        </>
    )
}

export default Home
