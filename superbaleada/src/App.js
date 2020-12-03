import './App.css';
import React,{useState} from "react"
import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  
  const [cartCount, setCartCount] = useState(0);

  function addCartCount(){
    console.log("Is this even working?")
    setCartCount(cartCount+1);
  }

  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Menu} addCartCount={addCartCount}/>
      <Route exact path="/cart" component={Cart} cartCount={cartCount}/>
    </div>
  );
}

export default App;
