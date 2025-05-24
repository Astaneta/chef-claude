import { getRecipeFromChefClaude } from '../ai'

export default function GetRecipe(props) {

    async function fetchRecipe() {
        const recipe = await getRecipeFromChefClaude(props.ingredients);
        props.getRecipe(recipe);
    }

    return (
        <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={fetchRecipe}>Get a recipe</button>
        </div>
    )
}