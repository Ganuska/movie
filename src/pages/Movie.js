import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";
import styles from "./movie.module.scss";
import { useEffect } from "react";
const Movie = () => {
  const [rate, setRate] = useState(
    localStorage.getItem("rating")
      ? JSON.parse(localStorage.getItem("rating"))
      : {}
  );
  const nav = useNavigate();
  const state = useLocation();
  document.body.style.overflow = "unset";
  const { title, description, year, rating, bigPhoto, id } = state.state;
  const source = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    localStorage.setItem("rating", JSON.stringify(rate));
  }, [rate]);
  const ratingChanged = (newRating) => {
    setRate((old) => {
      return { ...old, [id]: newRating };
    });
  };
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
            value={rate[id] ? rate[id] : 0}
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
