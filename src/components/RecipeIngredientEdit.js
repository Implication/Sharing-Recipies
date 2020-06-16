import React from 'react'

const RecipeIngredientEdit = ({ ingredient, handleIngredientChange, handleIngredientDelete }) => {
    const handleChange = (changes) => {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }
    return (
        <>
            <input type="text" className="recipe-edit-input" value={ingredient.name} onInput={(e) => handleChange({ name: e.target.value })} />
            <input type="text" className="recipe-edit-input" value={ingredient.amount} onInput={(e) => handleChange({ amount: e.target.value })} />
            <button className="btn btn-danger" onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
        </>
    )
}

export default RecipeIngredientEdit
