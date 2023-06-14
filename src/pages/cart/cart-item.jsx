import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const CartItem=({data})=>{
    const {id, productName, price, productImg}=data
    const {cartItems}=useContext(ShopContext)
    const {addToCart, removeFromCart, updateCartItemCount}=useContext(ShopContext)
    
    return (
    <div className="cartItem">
        <img src={productImg} alt='headphones' />
        <div className="description">
            <p>
                {" "}
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="quantityCount">
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input
                    type="text"
                    value={cartItems[id]}
                    
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value)) {
                        updateCartItemCount(value, id);
                        }
                    }}
                    />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>)
}