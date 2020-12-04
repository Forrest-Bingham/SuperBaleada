import React, {useState, useContext} from "react";
import "./menu.css";
import MenuItems from "./MenuItems";
import CartContext from "../contexts/CartContext";

const Menu = (props) => {

    const {cart, setCart, clearCart, addToCartSencilla } = useContext(CartContext);    
  

    return (
        <div className="menu">
            <div className="title">
                <h1>Super Baleada Menu</h1>
            </div>

            <MenuItems
            cart={cart}
            setCart={setCart}
            clearCart={clearCart}
            addToCartSencilla={addToCartSencilla}
            />


        </div>
    )
}

export default Menu;