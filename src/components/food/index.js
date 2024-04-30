import React from 'react';
import './index.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className='recipe-card'>
            <h2 className='recipe-title'>{title}</h2>
            <div className='recipe-image'>
                <img src={image} alt='' />
            </div>
            <div className='recipe-details'>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ul>
                <p><strong>Calories:</strong> {calories}</p>
            </div>
        </div>
    );
};

export default Recipe;
