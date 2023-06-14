import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import '../styles/navbar.css'
import skullcandy from '../assets/skullcandy.png'


export const Navbar=()=>{
    return <div className='navbar'>
        <div className="links">
        <Link to='/' className="imgContainer">
            <img src={skullcandy} alt="Skullcandy" />
        </Link>
                <Link to='/'>Shop</Link>
                <Link to='/cart'><RiShoppingCartLine size={30}/></Link>
        </div>
    </div>
}

