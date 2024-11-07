// backend.js
import express from "express";
import axios from "axios"; 
import dotenv from "dotenv";

const app = express();
const port = 8000;

dotenv.config();


const { API_KEY } = process.env;
const API = 'https://api.spoonacular.com/recipes/random';
app.use(express.json());


function mapRecipeToSchema(recipe) {
  return {
    id: recipe.id,
    name: recipe.title,
    image_url: recipe.image,
    // summary: recipe.summary,
    ingredients: recipe.extendedIngredients ? recipe.extendedIngredients.map(ing => ing.name):[],
    // instructions: recipe.instructions || "No instructions available"
  };
}


async function fetchRandom() {
  try {
    const response = await axios.get(API, {
      params: {
        apiKey: API_KEY,
        number: 5,  
      }
    });
    if (response.data && response.data.recipes) {
      return response.data.recipes.map(mapRecipeToSchema);
    } else {
      console.error("Error: ", response.data);
      return [];  
    }
  } catch (error) {
    console.error('Failed to fetch meals', error);
    return [];  
  }
}

app.get('/recipes', async (req, res) => {
  try {
      let recipes = await fetchRandom();  
      recipes = {recipes_list: recipes }
      res.status(200).send(recipes);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch' });
  }
});


app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

//TE4 addition
app.post("/signup", registerUser);

app.post("/users", authenticateUser, (req, res) => {
  const userToAdd = req.body;
  Users.addUser(userToAdd).then((result) =>
    res.status(201).send(result)
  );
});

app.post("/login", loginUser);
