import AddIngredientsForm from "../components/AddIngrediendsForm";
import IngredientsList from "../components/IngredientsList";
import GetRecipe from "../components/GetRecipe";
import { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

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
                    <GetRecipe />
                }
            </section>
        </main>
    )
}