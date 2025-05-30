import AddIngredientsForm from "../components/AddIngrediendsForm";
import IngredientsList from "../components/IngredientsList";
import GetRecipe from "../components/GetRecipe";
import Recipe from "../components/Recipe";
import { useState, useRef, useEffect } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');   
    const sectionRef = useRef(null);    

    useEffect(() => {
        if (recipe && sectionRef.current){
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe]);

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
                    <GetRecipe ref={sectionRef} getRecipe={getRecipe} ingredients={ingredients} />
                }
                {
                    recipe &&
                    <Recipe recipe={recipe} />
                }
            </section>
        </main>
    )
}