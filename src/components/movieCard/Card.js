import React from "react";
import styles from "./card.module.scss";
const Card = ({ title, description, language, src, rating }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.bannerImg}
        src={"https://image.tmdb.org/t/p/w500/" + src}
        alt="movie banner"
      />
      <h3>{title}</h3>
      <p>{language}</p>
      <p>{description}</p>
      <div className={styles.ratingCont}>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Card;
