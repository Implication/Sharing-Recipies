import React, { useContext } from 'react'
import Recipe from './Recipe';
import { RecipeContext } from './App'

const RecipeList = ({ recipe, editIsOnScreen }) => {
    const { handleRecipeAdd } = useContext(RecipeContext);
    return (
        <div className={`recipe-list ${editIsOnScreen ? "recipe-size-50" : "recipe-size-100"}`}>
            <div>
                {recipe.map(recipe => {
                    return (<Recipe key={recipe.id}  {...recipe} />)
                })}
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button
                    className="btn btn-primary"
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                    </button>
            </div>
        </div>
    )
}

export default RecipeList
