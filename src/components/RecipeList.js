import React, { useContext } from 'react'
import Recipe from './Recipe';
import { RecipeContext } from './App'

const RecipeList = ({ recipes, editIsOnScreen }) => {
    const { handleRecipeAdd } = useContext(RecipeContext);
    return (
        <div className={`recipe-list ${editIsOnScreen ? "recipe-size-50" : "recipe-size-100"}`}>
            <div className="recipe-list__add-recipe-btn-container">
                <button
                    className="btn btn-primary"
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                    </button>
            </div>
            <div>
                {recipes.map(recipe => {
                    return (<Recipe
                        key={recipe.id}
                        name={recipe.name}
                        cookTime={recipe.cookTime}
                        servings={recipe.servings}
                        instructions={recipe.instructions}
                        ingredients={recipe.ingredients}
                        id={recipe.id}
                    />)
                })}
            </div>
        </div>
    )
}

export default RecipeList
