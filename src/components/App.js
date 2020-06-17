import firebase from '../config/firestore'
import 'firebase/firestore'
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
export const RecipeContext = React.createContext()


const db = firebase.firestore();


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [editIsOnScreen, setEditIsOnScreen] = useState(false);
  useEffect(() => {
    db
      .collection('recipes')
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }
        ))
        setRecipes(newRecipes);
      })
  }, [])
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
    return db.collection('recipes').doc(newRecipe.id).set(newRecipe);
  }

  const handleRecipeChange = (id, recipe) => {
    // const newRecipes = [...recipes];
    // const index = newRecipes.findIndex(r => r.id === id)
    // newRecipes[index] = recipe;
    // setRecipes(newRecipes);
    db.collection('recipes').doc(id).set(recipe);
  }
  const handleRecipeDelete = (id) => {
    // setRecipes(recipes.filter(recipe => recipe.id !== id))
    db.collection('recipes').doc(id).delete();
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
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete} editIsOnScreen={editIsOnScreen} />
      {seletedRecipe && <RecipeEdit recipe={seletedRecipe} editIsOnScreen={editIsOnScreen} />}
    </RecipeContext.Provider>
  )
}




export default App;
