import { Search } from "@deemlol/next-icons";
import styles from "../app/page.module.css";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.items}>  
      <Search className={styles.searchIcon}/>
      <input
        type="text"
        placeholder="Search recipe by name..."
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.input}
      />
    </div>
  );
}