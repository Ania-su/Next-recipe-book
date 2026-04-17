import styles from "./page.module.css";
import recipes from "../data/recipe.json";
import RecipeClient from "@/components/recipeClient";

export default function Home() {
  const allIngredients = [
    ...new Set(recipes.flatMap((r) => r.ingredients)),
  ];

  return (
    <div className={styles.app}>
      <RecipeClient
        recipes={recipes}
        allIngredients={allIngredients}
      />
    </div>
  );
}