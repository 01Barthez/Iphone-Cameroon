import React from 'react'
import CardProduct from './cards/CardProduct'
import CTA2 from './utils/CTA2'
import { useFetch } from '@/hooks/use-fetch';
import type { IProduct } from '@/interface/interface';
import { DEFAULT_URL } from '@/api/api';

const DiscountProduct: React.FC = () => {
  const { data } = useFetch<IProduct[]>(`${DEFAULT_URL}/products`);
  const discountProductToDisplay = data && data
    .filter(product => product.isPromo)
    .slice(0, 4);
  // console.log(discountProductToDisplay);

  return (
    <section className={`${discountProductToDisplay?.length === 0 ? "hidden" : "block"} py-8 md:py-10 lg:py-14 space-y-4 md:space-y-6 lg:space-y-8`}>
      <div className="container space-y-8">
        {/* Selected navabar */}
        <h4 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-medium text-foreground cursor-default">
          Discounts up to -50%
        </h4>

        {/* Products  */}
        <div className="flex items-center flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 place-items-center md:place-items-stretch">
            {
              discountProductToDisplay?.map(product => (
                <CardProduct
                  id={product.id}
                  slug={product.slug}
                  picture={product.picture}
                  name={product.name}
                  caracteristiques={product.caracteristiques}
                  price={product.price}
                  isWhiteListe={product.isWhiteListe}
                  isPromo={product.isPromo}
                  promoPercent={product.promoPercent}
                  promoDelay={product.promoDelay}
                  statut={product.statut}
                />
              ))
            }
          </div>

          <CTA2 name="More Promos" url='/products' />
        </div>
      </div>
    </section>
  )
}

export default DiscountProduct
