import { AiOutlineHeart } from "react-icons/ai";
import { Button } from '@/components/ui/button'
import type { IProduct } from '@/interface/interface'
import React from 'react'
import { Link } from 'react-router-dom'
import CTA2 from "@/components/custom/utils/CTA2";
import truncateText from "@/components/custom/utils/TruncateText";
import { lettersCaracteristiqueProduct, lettersNameProduct } from "@/core/constant/constant";

const CardProduct: React.FC<IProduct> = (props) => {
  const whislistProduct = () => {
    console.log(`product of id=${props.id} has been succesful whislisted !`);
  }

  return (
    <Link
      to={`/products/${props.id}`}
      className='group min-w-64 relative px-4 py-8 bg-foreground/5 rounded-lg flex flex-col items-center gap-4'
    >
      {/* Head part */}
      <div className="w-full flex justify-end">
        <Button
          variant={'ghost'}
          className='w-fit h-fit p-2 border-2  text-7xl'
          onClick={whislistProduct}
        >
          <AiOutlineHeart size={32} />
        </Button>
      </div>

      {/* Picture part */}
      <div className="">
        <img
          src={props.picture}
          alt={props.name}
          className=""
        />
      </div>

      {/* Name, detail and price part */}
      <div className="space-y-2">
        <div className="space-y-1">
          {/* Name */}
          <h3 className="font-semibold text-center tracking-wide group-hover:underline">
            {
              truncateText(props.name, lettersNameProduct | 30, "letters")
            }
          </h3>

          {/* caracteristique */}
          {
            props.caracteristiques &&
            <p className="text-sm font-medium text-center text-foreground/80 !whitespace-normal break-words">
              {
                truncateText(props.caracteristiques, lettersCaracteristiqueProduct | 50, "letters")
              }
            </p>
          }
        </div>

        <div className="space-y-1 w-full flex items-center justify-center">
          {/* Price */}
          <span className="font-semibold text-xl text-center">
            {props.price} €
          </span>
        </div>
      </div>

      {/* Cta part */}
      <CTA2 />
    </Link>
  )
}

export default CardProduct
