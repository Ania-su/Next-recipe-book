import styles from "../app/page.module.css";

export default function CheckIngredient({ ingredients, selectedIngredients, setSelectedIngredients }) {
    const handleChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients((prev) =>
        prev.filter((item) => item !== ingredient),
      );
    } else {
      setSelectedIngredients((prev) => [...prev, ingredient]);
    }
  };

  return (
    <div className={styles.ingredients}>
      {ingredients.map((ingredient) => (
        <label key={ingredient}>
          <input
            type="checkbox"
            checked={selectedIngredients.includes(ingredient)}
            onChange={() => handleChange(ingredient)}
          />
          {ingredient}
        </label>
      ))}
    </div>
  );
}