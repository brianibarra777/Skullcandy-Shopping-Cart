import React from "react";
import { products } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cart-item";
import '../../styles/cart.css'
import { Link } from 'react-router-dom';
import noItems from '../../assets/noItems.png'

export const Cart=()=>{
    const {cartItems, getTotalCartAmount}=useContext(ShopContext)
    const total=getTotalCartAmount()

    return(
        <div className="cartContainer">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartContainer">
                {products.map((item=>{
                    if(cartItems[item.id]!=0){
                        return <CartItem data={item} />
                    }
                }))}
            </div>

                {total>0?
                (<div className="checkout">
                    
                    <b><p>Subtotal $: {total}</p></b>
                    <Link to='/'><button>Continue Shopping</button></Link>
                    <button onClick={()=>alert("Oops! This store is still under construction. Our virtual cashiers are on a coffee break! Please enjoy window shopping for now.")}>Checkout</button>
                </div>
                ) : <img src={noItems} style={{width: 400}} alt='empty'/>
                }
        </div>
    )
}