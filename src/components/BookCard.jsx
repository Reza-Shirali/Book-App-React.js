import React from "react";
import { useState } from "react";

import styles from "./BookCard.module.css";

import { AiFillHeart } from "react-icons/ai";

function BookCard({ data, likedListHandler }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    likedListHandler(data, like);
    setLike((like) => !like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="3rem" />
      </button>
    </div>
  );
}

export default BookCard;
