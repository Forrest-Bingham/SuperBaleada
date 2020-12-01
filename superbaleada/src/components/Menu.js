import React from "react";
import "./menu.css";
import MenuItems from "./MenuItems";

const Menu = () => {


    return (
        <div className="menu">
            <div className="title">
                <h1>Super Baleada Menu</h1>
            </div>

            <MenuItems/>


        </div>
    )
}

export default Menu;