import React from 'react'

const BestProducts: React.FC = () => {
  return (
    <div className='w-full'>
      <div className="flex-col md:flex-rol">
        {/* bloc1 */}
        <div className="max-w-[50%] flex flex-col">
          {/* Up products */}
          <div className="flex items-center gap-6"></div>
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
