import React from "react";

function HomeMR() {
    return (
        <div class="row">
            <div id="column-2" class="col-sm-6">
                <h3>My Recipes</h3>
                <p>See your recipes here! Use this button to go to the My Recipes tab, where you add your own recipes, along with images and ingredients. You can also remove recipes if you decide that you no longer want them saved.</p>
                <a href="myrecipes" class="btn" id="button">See More...</a>
            </div>
            <div id="myrecipes" class="col-sm-6"></div>
        </div>
      );
    }

export default HomeMR;
