import React from "react";
import { useLocation, useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";
import styles from "./movie.module.scss";
const Movie = () => {
  const nav = useNavigate();
  document.body.style.overflow = "unset";

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const state = useLocation();
  const source = "https://image.tmdb.org/t/p/w500/";
  const { title, description, year, rating, bigPhoto } = state.state;
  return (
    <main className={styles.container}>
      <img src={source + bigPhoto} alt="movie" />
      <div className={styles.descWraper}>
        <h3 className={styles.title}>
          {title} ({year.slice(0, 4)})
        </h3>

        <summary>{description}</summary>
        <div className={styles.starsContainer}>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={24}
            value={rating}
            isHalf="true"
            activeColor="#ffd700"
          />
          <p>TMDB rating:</p>
          <div className={styles.rating}>{rating}</div>
        </div>

        <button className={styles.btn} onClick={() => nav("/")}>
          go back
        </button>
      </div>
    </main>
  );
};

export default Movie;
