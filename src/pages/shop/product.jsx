import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product=({data})=>{
    const{id, productName, price, productImg}=data
    const {addToCart, cartItems}=useContext(ShopContext)


    const cartItemAmount=cartItems[id]


    return(
        <div className='product'>
            <img src={productImg} alt='headphones' />
            <div className="description">
                <b><p>{productName}</p></b>
                <p>${price}</p>
            </div>
            <button className='addButton' onClick={()=>addToCart(id)} >Add to Cart {cartItemAmount >0&& <>({cartItemAmount})</>}</button>
        </div>
    )
}