import React from "react";
import {products} from '../../products.js'
import {Product} from './product.jsx'
import '../../styles/shop.css'

export const Shop=()=>{
    return(
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Skullcandy Headphones</h1>
            </div>
            <div className="productsGrid">
                {products.map((item=>{
                   return <Product data={item} />
                }))}
            </div>
        </div>
    )
}