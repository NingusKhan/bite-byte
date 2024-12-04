import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from "./Nav"
import Home from "../Home/Home.jsx"
import BrowsePage from "../Browse/Browse.jsx"
import MRPage from "../MyRecipes/MyRecipes.jsx"
import Login from "../Login/Login.jsx"
import Register from "../Login/Register.jsx"
import MRForm from '../MyRecipesForm/MRForm.jsx';
<<<<<<< HEAD
import ProtectedRoute from './ProtectedRoute';
import Recipe from '../Recipe/Recipe.jsx';
=======
// import ProtectedRoute from './ProtectedRoute';
>>>>>>> apervmm-main
import "./app.css"


function MyApp() {
  return (
    <div id = "app" className="container-fluid">
      <Nav />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/myrecipes" element={<ProtectedRoute><MRPage /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newrecipe" element={<MRForm />} />
        <Route path="/recipe" element={<Recipe />} />
=======
        <Route path="/" element={<Home/>} />
        <Route path="/browse" element={<BrowsePage/>} />
        <Route path="/myrecipes" element={<MRPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/newrecipe" element={<MRForm/>} />
>>>>>>> apervmm-main
      </Routes>
      
    </div>
  );
}

export default MyApp;
