import React from 'react'

const Ingredient = ({ name, amount }) => {
    console.log(name);
    console.log(amount);
    return (
        <div>
            <span>{name}: </span>
            <span>{amount}</span>
        </div>
    )
}

export default Ingredient
