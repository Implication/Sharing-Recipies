import React, { useState } from 'react';
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

export const RecipeContext = React.createContext()

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [editIsOnScreen, setEditIsOnScreen] = useState(false);
  const seletedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: "", amount: '' }
      ],
    }
    setSelectedRecipeId(newRecipe.id);
    setEditIsOnScreen(true);
    return setRecipes([...recipes, newRecipe]);
  }

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }
  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    handleRecipeSelect(undefined);
  }
  const handleRecipeSelect = id => {
    setSelectedRecipeId(id)
    id ? setEditIsOnScreen(true) : setEditIsOnScreen(false);
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipe={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete} editIsOnScreen={editIsOnScreen} />
      {seletedRecipe && <RecipeEdit recipe={seletedRecipe} editIsOnScreen={editIsOnScreen} />}
    </RecipeContext.Provider>
  )
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '1 pound',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '0.5oz'
      }
    ]
  },
  {
    id: 2,
    name: 'Potato Salad',
    servings: 5,
    cookTime: '0:25',
    instructions: '1. Get a Potato\n2. Get a Salad\n3. Peel Potato and put it into the salad',
    ingredients: [
      {
        id: 1,
        name: 'Salad',
        amount: '1 pound',
      },
      {
        id: 2,
        name: 'Potato',
        amount: '2 tb spoons'
      }
    ]
  },
]
export default App;
