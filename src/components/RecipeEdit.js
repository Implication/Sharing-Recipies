import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'
const RecipeEdit = ({ editIsOnScreen, recipe }) => {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

    const handleChange = (changes) => {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    const handleIngredientChange = (id, ingredient) => {
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex(r => r.id === id)
        newIngredients[index] = ingredient;
        handleChange({ ingredients: newIngredients });
    }

    const handleIngredientAdd = () => {
        const newIngredient = {
            id: uuidv4(),
            name: "",
            amount: "",
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient] })
    }

    const handleIngredientDelete = (id) => {
        handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id) })
    }
    return (
        <div className={`recipe-edit ${editIsOnScreen ? "recipe-size-50" : ""}`}>
            <div className="recipe-edit-remove-button-container">
                <button className="btn recipe-edit-remove-button" onClick={() => handleRecipeSelect(undefined)}>&times;</button>
            </div>
            <div className="recipe-edit-details-grid">
                <label
                    htmlFor="name"
                    className="recipe-edit-label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="recipe-edit-input"
                    value={recipe.name}
                    onChange={e => handleChange({ name: e.target.value })}
                />
                <label
                    htmlFor="cookTime"
                    className="recipe-edit-label">
                    Cook Time
                </label>
                <input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    className="recipe-edit-input"
                    value={recipe.cookTime}
                    onChange={e => handleChange({ cookTime: e.target.value })}
                />
                <label
                    htmlFor="servings"
                    className="recipe-edit-label">
                    Servings
                </label>
                <input
                    type="text"
                    name="servings"
                    id="servings"
                    className="recipe-edit-input"
                    min="1"
                    value={recipe.servings}
                    onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })}
                />
                <label
                    htmlFor="instructions"
                    className="recipe-edit-label">
                    Instructions
                </label>
                <textarea
                    name="instructions"
                    id="instructions"
                    className="recipe-edit-input"
                    value={recipe.instructions}
                    onChange={e => handleChange({ instructions: e.target.value })}
                />
            </div>
            <br />
            <label className="recipe-edit-label">Ingredients</label>
            <div className="recipe-edit-ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => {
                    return (<RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} handleIngredientChange={handleIngredientChange} handleIngredientDelete={handleIngredientDelete} />)
                })}
            </div>
            <div className="recipe-edit-add-ingredient-btn-container" onClick={() => handleIngredientAdd()}>
                <button className="btn btn-primary">Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit
