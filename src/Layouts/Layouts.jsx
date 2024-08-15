import React from "react";

import styles from "./Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <span>RezaShirali </span>| React.JS - Book App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Reza With ❤️</p>
      </footer>
    </>
  );
}

export default Layouts;
