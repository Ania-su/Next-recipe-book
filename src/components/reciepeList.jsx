import styles from "./RecipeList.module.css";

import RecipeCard from "./recipeCard";

export default function RecipeList({ recipes }) {
    return (
        <ul className={styles.list}>
            {recipes.map((recipe, index) => (
                <li key={recipe.id} className={styles.item}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}
        </ul>
    );
}