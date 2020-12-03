import React, {useStart} from "react";
import "./menu.css";
import MenuItems from "./MenuItems";

const Menu = (props) => {

    
  

    return (
        <div className="menu">
            <div className="title">
                <h1>Super Baleada Menu</h1>
            </div>

            <MenuItems
            cartCount={props.cartCount}
            addCartCount={props.addCartCount}
            />


        </div>
    )
}

export default Menu;