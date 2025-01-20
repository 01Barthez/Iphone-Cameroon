import BestProducts from '@/components/custom/BestProducts'
import BrowseByCategory from '@/components/custom/BrowseCategory'
import DiscountProduct from '@/components/custom/DiscountProduct'
import Hero from '@/components/custom/Hero'
import HomeBanner from '@/components/custom/HomeBanner'
import SEO from '@/components/custom/SEO'
import SomeProducts from '@/components/custom/SomeProducts'
// import TopSeller from '@/components/custom/TopSeller'
import React from 'react'

const Home: React.FC = () => {
    return (
        <>
            {/* Seo compoments */}
            <SEO
                title='Welcome to iPhone Store Cameroon - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            {/* App Comoments */}
            <>
                <Hero />
                <BestProducts />
                <BrowseByCategory />
                <SomeProducts />
                {/* <TopSeller /> */}
                <DiscountProduct />
                <HomeBanner />
            </>
        </>
    )
}

export default Home
