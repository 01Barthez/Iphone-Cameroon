import React from 'react'
import CardProduct from './cards/CardProduct'
import CTA2 from './utils/CTA2'

const DiscountProduct: React.FC = () => {
  return (
    <section className="py-8 md:py-10 lg:py-14 space-y-4 md:space-y-6 lg:space-y-8">
      <div className="container space-y-8">
        {/* Selected navabar */}
        <h4 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-medium text-foreground cursor-default">
          Discounts up to -50%
        </h4>

        {/* Products  */}
        <div className="flex items-center flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 place-items-center md:place-items-stretch">
            <CardProduct
              id="product5"
              slug='iphone-14'
              picture={'src/assets/images/iphone1.svg'}
              name="Apple iPhone 14 Pro Max"
              caracteristiques="128GB Deep Purple (MQ9T3RX/A)"
              price={900}
              isWhiteListe={true}
              isPromo={true}
              promoPercent={20}
              statut="New"
            />
            <CardProduct
              id="product5"
              slug='iphone-14'
              picture={'src/assets/images/samsunggalaxy.svg'}
              name="Samsung Galaxy"
              caracteristiques="128GB Deep Purple (MQ9T3RX/A)"
              price={900}
              isWhiteListe={false}
              isPromo={false}
              promoPercent={20}
              statut="New"
            />

            <CardProduct
              id="product5"
              slug='iphone-14'
              picture={'src/assets/images/iphone14.svg'}
              name="Apple iPhone 14 Pro Max"
              caracteristiques="128GB Deep Purple (MQ9T3RX/A)"
              price={900}
              isWhiteListe={false}
              isPromo={true}
              promoPercent={20}
              statut="New"
            />

            <CardProduct
              id="product5"
              slug='iphone-14'
              picture={'src/assets/images/iphone14.svg'}
              name="Apple iPhone 14 Pro Max"
              price={900}
              isWhiteListe={true}
              isPromo={false}
              promoPercent={20}
              statut="New"
            />
          </div>

          <CTA2 name="More Promos" url='/products' />
        </div>
      </div>
    </section>
  )
}

export default DiscountProduct
