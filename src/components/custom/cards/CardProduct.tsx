import { AiOutlineHeart } from "react-icons/ai";
import type { IProduct } from '@/interface/interface'
import React from 'react'
import { Link } from 'react-router-dom'
import CTAProduct from "@/components/custom/utils/CTAProduct";
import truncateText from "@/components/custom/utils/TruncateText";
import { lettersCaracteristiqueProduct, lettersNameProduct } from "@/core/constant/constant";
import { motion } from 'motion/react';

const CardProduct: React.FC<IProduct> = (props) => {
  const whislistProduct = () => {
    console.log(`product of id=${props.id} has been succesful whislisted !`);
  }

  const calculateNewPrice = (oldPrice: number, reduction: number): number => {
    const DiscountAmount = (oldPrice * reduction) / 100;
    const newPrice = Math.max(oldPrice - DiscountAmount, 0);

    return newPrice;
  }

  const newPrice = props.isPromo && calculateNewPrice(props.price, 10);

  return (
    <motion.div
      className='group  w-fit relative px-4 py-8 bg-foreground/5 rounded-lg flex flex-col items-center gap-5'
      whileHover={{}}
    >
      {/* Head part */}
      <div className="w-full flex justify-end">
        <button
          // className="bg-sky-500"
          onClick={whislistProduct}
        >
          <AiOutlineHeart size={24} color="blue" />
        </button>
      </div>

      {/* Picture part */}
      <Link
        to={`/products/${props.id}`}
        className="rounded-sm flex items-center justify-center min-h-40 min-w-[80%] text-sm text-destructive"
      >
        <img
          src={props.picture}
          alt={props.name}
          className="select-none"
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
            <h3 className="text-lg font-semibold text-center tracking-wide">
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
              <p className="text-sm font-medium text-center text-foreground/80 !whitespace-normal break-words">
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
                <span className="font-semibold text-xl text-center">
                  {props.price} €
                </span>
            }
          </Link>
        </div>
      </div>

      {/* Cta part */}
      <CTAProduct url={`/products/${props.id}`} />
    </motion.div >
  )
}

export default CardProduct
