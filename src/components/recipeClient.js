"use client";

import { useState } from "react";
import SearchBar from "./searchBar";
import CheckIngredient from "./checkIngredient";
import RecipeList from "./reciepeList";
import styles from "../app/page.module.css";

export default function RecipeClient({ recipes, allIngredients }) {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const filteredRecipes = orderedRecipes.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesIngredients =
      selectedIngredients.length === 0 ||
      selectedIngredients.every((ingredient) =>
        item.ingredients.includes(ingredient)
      );

    return matchesSearch && matchesIngredients;
  });

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse());
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <CheckIngredient
          ingredients={allIngredients}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <RecipeList recipes={filteredRecipes} />
      </main>
    </>
  );
}