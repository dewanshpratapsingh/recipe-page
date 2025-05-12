import './App.css'
import React from 'react'
import Introduction from './components/Introduction/Introduction'
import Instructions from './components/Instructions/Instructions'
import Nutrition from './components/Nutrition/Nutrition'
import Ingredients from './components/Ingredients/Ingredients'

function App() {
  const RecipeData = {
    name:"Simple Omelette Recipe" ,
    description:"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    preparationTime : { totalTime : 10 , preparationTime : 5 , cookTime : 5 }
  }
  const instructions = [
    "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
    "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
  ];
  const nutrition = {
    calories: "277kcal",
    carbs: "0g",
    protein: "20g",
    fat: "22g"
  };
  const IngredientsData = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
  ];
  return (
    <div className='container'>
      <div className='wrapper'>
        <Introduction RecipeData = {RecipeData} />
        <Ingredients IngredientsData={IngredientsData}/>
        <Instructions InstructionsData={instructions}/>
        <Nutrition NutritionData = {nutrition}/>
      </div>
    </div>
  )
}

export default App
