import './App.css';
import React,{useState, useEffect} from "react"
import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartContext from "./contexts/CartContext";

function App() {
  
  const [cartCount, setCartCount] = useState(0);

  const [cart, setCart] = useState([])

  const addToCartSencilla = amount => {
    if(amount>=1){
      console.log(amount, "<--Amount")
      setCart([...cart, `Sencilla x ${amount}`])
      console.log(cart, "<-- Cart")
      setSencillaCount(0)
    }
    else{
      console.log("Can't add 0 items to cart")
    }
  }

  function clearCart(){
    setCart([]);
  }


  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <CartContext.Provider value={{cart, setCart, clearCart, addToCartSencilla}}>
      <Route exact path="/" component={Menu}/>
      <Route exact path="/cart" component={Cart} cartCount={cartCount}/>
      </CartContext.Provider>
    </div>
  );
}

export default App;
