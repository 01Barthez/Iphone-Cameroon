import React, { useState } from 'react'
import CardProduct from './cards/CardProduct';
import CTA2 from './utils/CTA2';
import { useFetch } from '@/hooks/use-fetch';
import { DEFAULT_URL } from '@/api/api';
import type { IProduct } from '@/interface/interface';

export type typeProductToDisplay = "newArrival" | "bestSellers" | "featuredProducts"

const SomeProducts: React.FC = () => {
  const { data } = useFetch<IProduct[]>(`${DEFAULT_URL}/products`);
  const [productToDisplay, setProductToDisplay] = useState<typeProductToDisplay>("newArrival");

  const newArrival = data && data.filter(product => product.statut == "New");
  const bestSellers = data && data.filter(product => product.statut == "Best Seller");
  const featuredProducts = data && data.filter(product => product.statut == "Popular");

  const products = productToDisplay === "newArrival" ? newArrival : productToDisplay === "bestSellers" ? bestSellers : featuredProducts;
  console.log(products);

  return (
    <section className="py-8 md:py-10 lg:py-14 space-y-4 md:space-y-6 lg:space-y-8">
      <div className="container space-y-12">
        {/* Selected navabar */}
        <nav className="flex items-center justify-center md:justify-start gap-4 md:gap-6 lg:gap-8 text-lg md:text-xl font-medium text-foreground/80 *:cursor-pointer">
          <h4
            className="selected-menu-active hover:text-foreground word-nowrap"
            onClick={() => setProductToDisplay("newArrival")}
          >
            New&nbsp;Arrival
          </h4>

          <h4
            className="hover:text-foreground"
            onClick={() => setProductToDisplay("bestSellers")}
          >
            Bestseller
          </h4>

          <h4
            className="hover:text-foreground"
            onClick={() => setProductToDisplay("featuredProducts")}
          >
            Featured Products
          </h4>
        </nav>

        {/* Products  */}
        <div className="flex items-center flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 place-items-center md:place-items-stretch">
            {
              products && products.slice(0, 8).map((product) => (
                <CardProduct
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  picture={product.picture}
                  name={product.name}
                  caracteristiques={product.caracteristiques}
                  price={product.price}
                  isWhiteListe={product.isWhiteListe}
                  isPromo={product.isPromo}
                  promoPercent={product.promoPercent}
                  statut={product.statut}
                />
              ))
            }
          </div>

          <CTA2 name="More Products" url='/products' />
        </div>
      </div>
    </section>
  )
}

export default SomeProducts
