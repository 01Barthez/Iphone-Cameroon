import React from 'react'
import CardProduct from './cards/CardProduct';

const SomeProducts: React.FC = () => {
  // const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <section className="py-8 md:py-10 lg:py-14 space-y-4 md:space-y-6 lg:space-y-8">
      <div className="container">
        {/* Selected navabar */}
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 text-lg font-medium text-foreground/80 *:cursor-pointer">
          <h4 className="selected-menu-active hover:text-foreground">
            New Arrival
          </h4>

          <h4 className="hover:text-foreground">
            Bestseller
          </h4>

          <h4 className="hover:text-foreground">
            Featured Products
          </h4>
        </nav>

        {/* Products  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4">
          <CardProduct
            id="product5"
            slug='iphone-14'
            picture={'src/assets/images/iphone14.svg'} 
            name="Apple iPhone 14 Pro Max"
            caracteristiques="128GB Deep Purple (MQ9T3RX/A)"
            price={900}
            isWhiteListe={false}
            isPromo={false}
            promoPercent={20}
            statut="New"
          />
        </div>
      </div>
    </section>
  )
}

export default SomeProducts
