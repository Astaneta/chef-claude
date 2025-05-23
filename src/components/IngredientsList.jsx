export default function IngredientsList(props) {
    return (
        <>
        <h2>Lista degli ingredienti:</h2>
        <ul className="ingredients-list" aria-live="polite">
            {props.ingredients.map((ingr) => <li key={ingr}>{ingr}</li>)}
        </ul>
        </>
    )
}