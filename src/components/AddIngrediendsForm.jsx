export default function AddIngredientsForm(props) {

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredientInput");
    props.onsubmit(newIngredient);
  }

  return (
      <form className='add-ingredients-form' action={handleSubmit}>
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