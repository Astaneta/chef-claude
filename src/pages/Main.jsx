import AddIngredientsForm from "../components/AddIngrediendsForm";
import { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

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
            <ul>
            {ingredients.map((ingr) => <li key={ingr}>{ingr}</li>)}
      </ul>
        </main>
    )
}