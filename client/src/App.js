import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from '../src/pages/products';
import Orders from '../src/pages/orders';
import Customers from '../src/pages/customers';
import Newproduct from '../src/pages/newproduct';
import Newcustomer from '../src/pages/newcustomer';





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/newproduct">
            <Newproduct />
          </Route>

          <Route path="/newcustomer">
            <Newcustomer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
