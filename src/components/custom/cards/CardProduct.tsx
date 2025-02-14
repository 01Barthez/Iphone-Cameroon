import { AiOutlineHeart } from "react-icons/ai";
import type { IProduct } from '@/interface/interface'
import React from 'react'
import { Link } from 'react-router-dom'
import CTAProduct from "@/components/custom/utils/CTAProduct";
import truncateText from "@/components/custom/utils/TruncateText";
import { lettersCaracteristiqueProduct, lettersNameProduct } from "@/core/constant/constant";
import { motion } from 'motion/react';
import { useToast } from "@/hooks/use-toast";

const CardProduct: React.FC<IProduct> = (props) => {
  const { toast } = useToast()

  const whislistProduct = () => {
    // API to upadate the product to whishList here... 


    // Success Message to the user
    const message = `${props.name} has been succesful whishlisted !`
    toast({
      description: message
    });
  }

  const calculateNewPrice = (oldPrice: number, reduction: number): number => {
    const DiscountAmount = (oldPrice * reduction) / 100;
    const newPrice = Math.max(oldPrice - DiscountAmount, 0);

    return newPrice;
  }

  const newPrice = props.isPromo && calculateNewPrice(props.price, 10);

  return (
    <motion.div
      className='group relative w-fit p-[2px] bg-foreground/5 shadow-sm shadow-foreground/25 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500/60 hover:via-purple-500/80 hover:to-pink-500/80 overflow-hidden'
      whileHover={{}}
    >
      <div className="relative bg-background px-3 md:px-4 py-4 md:py-5 z-40 rounded-lg h-full w-full flex flex-col items-center gap-3 md:gap-5">
        {/* Head part */}
        <div className="w-full flex justify-end">
          <button
            className={`text-2xl ${props.isWhiteListe && "text-blue-400"}`}
            onClick={whislistProduct}
          >
            <AiOutlineHeart />
          </button>
        </div>

        {/* Picture part */}
        <Link
          to={`/products/${props.id}`}
          className="rounded-sm overflow-hidden flex items-center justify-center min-h-32 max-h-60 md:min-h-40 min-w-[80%] text-sm text-destructive"
        >
          <img
            src={props.picture}
            alt={props.name}
            className="select-none hover:scale-105 duration-200"
            loading="lazy"
          />
        </Link>

        {/* Name, detail and price part */}
        <div className="space-y-4">
          <div className="space-y-1">
            {/* Name of product*/}
            <Link
              to={`/products/${props.id}`}
              className=""
            >
              <h3 className="text-base lg:text-lg font-semibold text-center tracking-wide">
                {
                  truncateText(props.name, lettersNameProduct | 30, "letters")
                }
              </h3>
            </Link>

            {/* caracteristique if exist */}
            {
              props.caracteristiques &&
              <Link
                to={`/products/${props.id}`}
                className=""
              >
                <p className="text-xs md:text-sm font-medium text-center text-foreground/80 !whitespace-normal break-words">
                  {
                    truncateText(props.caracteristiques, lettersCaracteristiqueProduct | 50, "letters")
                  }
                </p>
              </Link>
            }
          </div>

          <div className="space-y-1 w-full flex items-center justify-center">
            {/* Price */}
            <Link
              to={`/products/${props.id}`}
              className=""
            >
              {/* Manage price if promo is defined or not */}
              {
                props.isPromo ?
                  // Price if promo if defined
                  <div className="flex items-end gap-x-1 p-0">
                    <span className="cancelPrice relative font-normal text-foreground/80 text-sm text-center">
                      {props.price} €
                    </span>
                    <span className="font-semibold text-xl text-center">
                      {newPrice} €
                    </span>
                  </div>
                  :
                  // Price if promo is not defined
                  <span className="font-semibold text-lg md:text-xl text-center">
                    {props.price} €
                  </span>
              }
            </Link>
          </div>
        </div>

        {/* Cta part */}
        <CTAProduct url={`/products/${props.id}`} />
      </div>

      {/* Animate linear bg */}
      <div className="group-hover:animate-spin-slow invisible absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
    </motion.div >
  )
}

export default CardProduct
