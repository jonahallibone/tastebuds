import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";


function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
