import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'


const Recipe = ({ id, name, cookTime, servings, instructions, ingredients }) => {
    const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
    return (
        <div className="recipe">
            <div className="recipe-header">
                <h3 className="recipe_title">{name}</h3>
            </div>
            <div className="recipe-buttons">
                <button
                    className="btn btn-primary mr-1"
                    onClick={() => handleRecipeSelect(id)}
                >Edit</button>
                <button className="btn btn-danger" onClick={() => handleRecipeDelete(id)}>Delete</button>
            </div>
            <div className="recipe-information">
                <div className="recipe-row">
                    <span className="recipe-label">Cook Time:</span>
                    <span className="recipe-value">{cookTime}</span>
                </div>
                <div className="recipe-row">
                    <span className="recipe-label">Servngs: </span>
                    <span className="recipe-value">{servings}</span>
                </div>
                <div className="recipe-row">
                    <span className="recipe-label">Instructions</span>
                    <div className="recipe-value recipe-value-indented recipe-instructions">
                        {instructions}
                    </div>
                </div>
                <div className="recipe-row">
                    <span className="recipe-label">Ingredients</span>
                    <div className="recipe-value recipe-value-indented">
                        <IngredientList ingredients={ingredients} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
