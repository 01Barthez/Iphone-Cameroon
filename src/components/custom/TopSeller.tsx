import React from 'react'
import CardTopSeller from './cards/CardTopSeller'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

const TopSeller: React.FC = () => {
  return (
    <section className="py-8 md:py-10 lg:py-14 space-y-4 md:space-y-6 lg:space-y-8">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
          <CardTopSeller
            img="/src/assets/images/Macbook.svg"
            name="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            url="/products/category/news"
            opacity={20}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TopSeller
