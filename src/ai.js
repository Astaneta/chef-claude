export async function getRecipeFromChefClaude(ingredientsArr) {
const response = await fetch("/api/getRecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: ingredientsArr }),
  });

  if (!response.ok) {
    throw new Error("Errore nella chiamata al server");
  }

  const data = await response.json();
  return data.recipe;
 }
 