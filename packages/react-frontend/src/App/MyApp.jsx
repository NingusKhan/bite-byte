import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Nav"
import Home from "../Home/Home.jsx"
import BrowsePage from "../Browse/Browse.jsx"
import SavedPage from "../Saved/Saved.jsx"
import MRPage from "../MyRecipes/MyRecipes.jsx"
import Login from "../Login/Login.jsx"
import Register from "../Login/Register.jsx"
import "./app.css"


function MyApp() {
  return (
    <div id = "app" className="container-fluid">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/myrecipes" element={<MRPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  );
}

export default MyApp;