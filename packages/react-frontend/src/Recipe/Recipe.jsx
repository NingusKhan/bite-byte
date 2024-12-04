import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './recipe.css'; 

function Recipe() {
  const { id } = useParams();
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return <p>No recipe found for ID: {id}</p>;
  }

  return (
    <div id="recipebody" className="container-fluid">
      <div className="row">
        {/* Background image and instructions */}
        <div id="recipe-img" className="col-md-7">
          <div className="instructions-overlay">
            <h2 className="text-white">Instructions</h2>
            <p>{recipe.instructions}</p>
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div className="mr-form-container w-100 p-4">
            <h2 className="recipe-title text-center">{recipe.name}</h2>
            <img src={recipe.image_url} alt={recipe.name} className="img-fluid mb-4" />
            <p className="recipe-ingredients">Ingredients</p>
            <ul>{recipe.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Recipe;