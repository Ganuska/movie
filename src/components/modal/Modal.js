import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./styles/modal.module.scss";
import axios from "axios";
const Modal = (props) => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("");
  const [randomMovie, setRandomMovie] = useState();
  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ;
    console.log(genre);
    if (genre !== "") {
      const fetchMovie = async () => {
        const result = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setRandomMovie(result.data.result);
        console.log(result.data);
        genre !== "" && props.showModal();
      };
      fetchMovie();
    }
  };

  return (
    <div className={styles.modalContainer}>
      <section className={styles.randomCard}>
        <header className={styles.header}>Movie Roulette</header>
        <h1>Select Genre:</h1>
        <form className={styles.radioSec}>
          <input
            type="radio"
            name="genre"
            value="romance"
            onChange={handleChange}
            checked={genre === "romance"}
          />
          <input
            type="radio"
            name="genre"
            value="drama"
            onChange={handleChange}
            checked={genre === "drama"}
          />
          <input
            type="radio"
            name="genre"
            value="comedy"
            onChange={handleChange}
            checked={genre === "comedy"}
          />
          <input
            type="radio"
            name="genre"
            value="other"
            onChange={handleChange}
            checked={genre === "other"}
          />
          <button className={styles.btn} onClick={handleSubmit}>
            ROLL
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
