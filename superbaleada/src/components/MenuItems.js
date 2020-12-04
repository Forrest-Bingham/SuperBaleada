import React, {useState, useContext} from "react";
import sencilla from "./images/sencilla.jpg";
import huevo from "./images/huevo.jpg";
import aguacate from "./images/aguacate.jpg";
import pollo from "./images/pollo.jpg";
import todo from "./images/todo.jpg";
import "./menu.css";

const MenuItems = (props) => {



    const [sencillaCount, setSencillaCount] = useState(0)
    const [huevoCount, setHuevoCount] = useState(0)
    const [aguacateCount, setAguacateCount] = useState(0)
    const [polloCount, setPolloCount] = useState(0)
    const [todoCount, setTodoCount] = useState(0)

    function addSencilla(){
        console.log("IS THIS WORKING")
        setSencillaCount(sencillaCount+1)
    }

    function removeSencilla(){
        console.log("IS THIS WORKING")
        if(sencillaCount > 0){
            setSencillaCount(sencillaCount-1)
        }
        else {
            setSencillaCount(0);
        }
    }

    function addHuevo(){
        console.log("IS THIS WORKING")
        setHuevoCount(huevoCount+1)
    }

    function removeHuevo(){
        console.log("IS THIS WORKING")
        if(huevoCount > 0){
            setHuevoCount(huevoCount-1)
        }
        else {
            setHuevoCount(0);
        }
    }

    function addAguacate(){
        setAguacateCount(aguacateCount+1)
    }

    function removeAguacate(){
        if (aguacateCount > 0){
            setAguacateCount(aguacateCount-1)
        }
        else {
            setAguacateCount(0)
        }
    }

    function addPollo(){
        setPolloCount(polloCount+1)
    }

    function removePollo(){
        if(polloCount > 0){
            setPolloCount(polloCount-1)
        }
        else{
            setPolloCount(0)
        }
    }

    function addTodo(){
        setTodoCount(todoCount+1)
    }

    function removeTodo(){
        if(todoCount>0){
            setTodoCount(todoCount-1)
        }
        else{
            setTodoCount(0)
        }
    }


    return(
        <div className="list">

        {console.log(props,"props")}
        <div className="item">
            <img src={sencilla} alt="Baleada Sencilla" className="image" />
            <h2>Sencilla L6</h2>
            <div className="buttons">
                <button onClick={()=>props.addToCartSencilla(sencillaCount)}>Add To Cart</button>
                <button className="button" onClick={removeSencilla}>-</button>
                <button className="button" onClick={addSencilla}>+</button>
                <p>{sencillaCount}</p>
            </div>
        </div>

        <div className="item">
            <img src={huevo} alt="Baleada con huevo" className="image" />
            <h2>Con Huevo L8</h2>
            <div className="buttons">
                <button>Add To Cart</button>
                <button className="button" onClick={removeHuevo}>-</button>
                <button className="button" onClick={addHuevo}>+</button>
                <p>{huevoCount}</p>
            </div>
        </div>

        <div className="item">
            <img src={aguacate} alt="Baleada con aguacate" className="image" />
            <h2>Con Aguacate L10</h2>
            <div className="buttons">
                <button>Add To Cart</button>
                <button className="button" onClick={removeAguacate}>-</button>
                <button className="button" onClick={addAguacate}>+</button>
                <p>{aguacateCount}</p>
            </div>
        </div>

        <div className="item">
            <img src={pollo} alt="Baleada con pollo" className="image" />
            <h2>Con Pollo L10</h2>
            <div className="buttons">
                <button>Add To Cart</button>
                <button className="button" onClick={removePollo}>-</button>
                <button className="button" onClick={addPollo}>+</button>
                <p>{polloCount}</p>
            </div>
        </div>

        <div className="item">
            <img src={todo} alt="Baleada con todo" className="image" />
            <h2>Con Todo L12</h2>
            <div className="buttons">
                <button>Add To Cart</button>
                <button className="button" onClick={removeTodo}>-</button>
                <button className="button" onClick={addTodo}>+</button>
                <p>{todoCount}</p>
            </div>
        </div>

        </div>
    )
}

export default MenuItems;