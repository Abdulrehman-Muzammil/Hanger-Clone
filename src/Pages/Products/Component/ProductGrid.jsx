import React from 'react'
import Item_Cart from '../../../Component/Item_Cart/Item_Cart'

const ProductGrid = ({isFilter,ProductsData,productCategory,maxValue}) => {
  return (
    <>
     <div
                className={`grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] transition-all duration-300 ${
                  isFilter ? "w-full" : "w-[100%] md:w-[75%]"
                } `}
              >
                {ProductsData.map(({id,title,price,sizes,colors,images,stock,category}) => (category === productCategory || productCategory == 'all'? price >= 4 && price <=maxValue ?
                  <Item_Cart key={id} title={title} price={price} id={id} sizes={sizes} color={colors} images={images} stock={stock} /> :'': ''
                  
                ))}
     </div>
    </>
  )
}

export default ProductGrid
