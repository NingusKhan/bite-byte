import React from "react";

function HomeBrowse() {
  return (
    <div class="row">
        <div id="browse" class="col-sm-6"></div>
        <div id="column-2" class="col-sm-6">
            <h3>Browse</h3>
            <p>Find recipes here! Use this button to go to the browse tab, where can search for specific recipes listed. If you find one you like, you can favorite the recipe, which will save it to My Recipes.</p>
            <a href="browse" class="btn" id="button">See More...</a>
        </div>
    </div>
  );
}

export default HomeBrowse;