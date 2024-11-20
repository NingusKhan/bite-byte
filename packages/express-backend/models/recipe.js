import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image_url: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("Invalid image URL, must be at least 2 characters.");
        }
      },
    },
    ingredients: {
      type: [String],
      required: true,
      validate(value) {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("Ingredients must be a non-empty array.");
        }
      },
    },
    instructions: {
      type: String,
      required: true,
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    ratings: [
      {
        user: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "User", required: true 
        },
        rating: { 
          type: Number, 
          required: true, 
          min: 1, 
          max: 5 },
      },
    ],
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", required: true 
    },
  },
  { collection: "recipes_list" } 
);



const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;



    // instructions: {
    //   type: String,
    //   required: true,
    // },
    // datePosted: {
    //   type: Date,
    //   default: Date.now,
    // },
    // ratings: [
    //   {
    //     user: { 
    //       type: mongoose.Schema.Types.ObjectId, 
    //       ref: "User", required: true 
    //     },
    //     rating: { 
    //       type: Number, 
    //       required: true, 
    //       min: 1, 
    //       max: 5 },
    //   },
    // ],