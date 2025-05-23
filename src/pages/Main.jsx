import AddIngredientsForm from "../components/AddIngrediendsForm";
import IngredientsList from "../components/IngredientsList";
import GetRecipe from "../components/GetRecipe";
import Recipe from "../components/Recipe";
import { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [recipeShow, setRecipeShow] = useState(false); 
    const [recipe, setRecipe] = useState('');   

    const addIngredient = (newIngredient) => {
        if (newIngredient) {
            let trimmedIngredient = newIngredient.trim().toLowerCase();
        if (ingredients.includes(trimmedIngredient)) {
            alert("This ingredient is already in the list");
            return;
        }
        
        setIngredients(prevIngredients => [...prevIngredients, trimmedIngredient]);
        }
    };

    const getRecipe = function (recipe) {
        setRecipeShow(true);
        setRecipe(recipe);
    }

    return (
        <main>
            <AddIngredientsForm onsubmit={addIngredient} />
            <section>
                {
                    ingredients.length > 0 && 
                    <IngredientsList ingredients={ingredients}/>
                }
                {
                    ingredients.length >= 3 && 
                    <GetRecipe getRecipe={getRecipe} ingredients={ingredients} />
                }
                {
                    recipeShow &&
                    <Recipe recipe={recipe} />
                }
            </section>
        </main>
    )
}