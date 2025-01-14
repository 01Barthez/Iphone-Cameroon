import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React from 'react'
import { Button } from '@/components/ui/button'
import { LinkCategory } from "@/core/mocks/link.mock";
import CardOfCategory from "./cards/CardOfCategory";

const BrowseByCategory: React.FC = () => {
  return (
    <section className="w-full container py-20 space-y-8 bg-foreground/5">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Browse by Category
        </h2>

        <div className="flex items-center gap-4">
          <Button
            variant={'ghost'}
            className="w-8 h-8 ">
            <AiOutlineLeft />
          </Button>

          <Button
            variant={'ghost'}
            className="w-8 h-8 ">
            <AiOutlineRight />
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-between gap-8">
        {
          LinkCategory.map(ele => (
            <CardOfCategory key={ele.id} name={ele.name} icon={ele.icon} href={ele.href} />
          ) )
        }
      </div>
    </section>
  )
}

export default BrowseByCategory
