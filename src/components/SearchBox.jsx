import React from "react";

import { FiSearch } from "react-icons/fi";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch , searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      />
      <button onClick={searchHandler}>
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
