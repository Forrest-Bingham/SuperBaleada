import React from "react";
import sencilla from "./images/sencilla.jpeg";
import "./menu.css";

const MenuItems = () => {

    return(
        <div className="item">
            <img src={sencilla} alt="Baleada Sencilla" className="image" />
            <h2>Sencilla L6</h2>
        </div>
    )
}

export default MenuItems;