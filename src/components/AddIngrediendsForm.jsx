export default function AddIngredientsForm(props) {

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredientInput");
    props.onsubmit(newIngredient);
    event.currentTarget.reset();
  }

  return (
      <form className='add-ingredients-form' onSubmit={handleOnSubmit}>
        <input 
          type="text"
          placeholder="e.g. origano" 
          aria-label="Add ingredient" 
          name="ingredientInput"
          />
        <button >Add ingredient</button>
      </form>
  )
}