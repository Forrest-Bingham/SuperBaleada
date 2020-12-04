import React, { useContext } from "react";
import Navbar from "./navbar";

import CartContext from "../contexts/CartContext";

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext);

    return(
        <div>
            <Navbar/>
        </div>
    )
}

export default Cart;