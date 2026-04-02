"use client";

import SearchBar from "@/components/searchBar";
import styles from "./page.module.css";
import CheckIngredient from "@/components/checkIngredient";
import RecipeList from "@/components/reciepeList";
import { useState } from "react";
import recipes from "../data/recipe.json";

export default function Home() {

  const [orderedRecipes, setOrderedRecipes] = useState(recipes);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const allIngredients = [
    ...new Set(recipes.flatMap((r) => r.ingredients)),
  ];

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
    <div className={styles.app}>
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
    </div>
  );
}
