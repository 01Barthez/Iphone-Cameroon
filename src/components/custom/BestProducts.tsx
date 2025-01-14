import React from 'react'
import playstation from "@/assets/images/PlayStation.svg"

const BestProducts: React.FC = () => {
  return (
    <div className='w-full'>
      <div className="flex last:">
        {/* bloc1 */}
        <div className="max-w-[50%] flex flex-col">
          {/* Up products */}
          <div className="flex items-center gap-6">
            <img src={playstation} alt="Playstation apple to sell at a best price" />
          </div>
        </div>
        
        {/* bloc2 */}
        <div className="max-w-[50%]"></div>
        
        {/* bloc3 */}
        <div className="max-w-[50%]"></div>
      </div>
    </div>
  )
}

export default BestProducts
