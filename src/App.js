import React from "react";
import { MenuProvider } from "./ShopContext/menuContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CopyRight from "./Components/CopyRight/CopyRight";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Auth from "./Pages/Auth/Auth";
import Register from "./Pages/Auth/Register/Register";
import Shopping from "./Pages/Shopping/Shopping";

function App() {
  return (
    <MenuProvider>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shopping/:category" component={Shopping} />
          </Switch>
          <Footer />
          <CopyRight />
        </Router>
      </div>
    </MenuProvider>
  );
}

export default App;
