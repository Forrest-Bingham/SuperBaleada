import React from "react";
import sencilla from "./images/sencilla.jpg";
import huevo from "./images/huevo.jpg";
import aguacate from "./images/aguacate.jpg";
import pollo from "./images/pollo.jpg";
import todo from "./images/todo.jpg";
import "./menu.css";

const MenuItems = () => {

    return(
        <div className="list">

        <div className="item">
            <img src={sencilla} alt="Baleada Sencilla" className="image" />
            <h2>Sencilla L6</h2>
        </div>

        <div className="item">
            <img src={huevo} alt="Baleada con huevo" className="image" />
            <h2>Con Huevo L8</h2>
        </div>

        <div className="item">
            <img src={aguacate} alt="Baleada con aguacate" className="image" />
            <h2>Con Aguacate L10</h2>
        </div>

        <div className="item">
            <img src={pollo} alt="Baleada con pollo" className="image" />
            <h2>Con Pollo L10</h2>
        </div>

        <div className="item">
            <img src={todo} alt="Baleada con todo" className="image" />
            <h2>Con Todo L12</h2>
        </div>

        </div>
    )
}

export default MenuItems;