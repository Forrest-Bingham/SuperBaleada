import './App.css';
import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Menu}/>
      <Route exact path="/cart" component={Cart}/>
    </div>
  );
}

export default App;
