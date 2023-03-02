import { PlusIcon } from '../../assets/svgs/PlusIcon'
import { ProductModal } from './components/product-modal/ProductModal'
import { useEffect, useState } from 'react'
import { ProductItem } from './components/product-item/ProductItem'
import { Loader } from '../../components/loading/Loader'
import { useProducts } from './useProducts'
import "./Products.css"

export const Products = () => {
    const { isShow, products, loading, open, close } = useProducts()

    return (
        <div className="products_panel">
            <button className='product product_btn' onClick={open}>
                <PlusIcon width="50" height="40" />
            </button>

            {isShow && <ProductModal close={close} />}

            {
                loading ? <Loader width="200px" /> : products.slice(0).reverse().map((item) => {
                    return (
                        <ProductItem key={item.id} item={item} close={close} />
                    )
                })
            }
        </div>
    )
}
