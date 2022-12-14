import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./styles/modal.module.scss";
import axios from "axios";
const Modal = (props) => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("");
  const [random, setRandom] = useState(null);
  const handleChange = (e) => {
    setGenre(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.showModal();
    if (genre !== "" && random) {
      console.log(random);
      navigate("/Movie", {
        state: {
          year: random.release_date,
          rating: random.vote_average,
          src: random.poster_path,
          language: random.language,
          title: random.title,
          description: random.overview,
          bigPhoto: random.poster_path,
          id: random.id,
        },
      });
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&with_genres=${genre}&page=${Math.ceil(Math.random() * 15)}`
      );
      setRandom(result.data.results[Math.ceil(Math.random() * 18)]);
    };
    fetchMovie();
  }, [genre]);

  return (
    <div className={styles.modalContainer}>
      <section className={styles.randomCard}>
        <header className={styles.header}>Movie Roulette</header>
        <h1>Select Genre:</h1>
        <form onSubmit={handleSubmit} className={styles.radioSec}>
          <div>
            <label htmlFor="10749">
              Romance
              <input
                id="10749"
                type="radio"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="18">
              Drama
              <input
                id="18"
                type="radio"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="35">
              Comedy
              <input
                id="35"
                type="radio"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="28">
              action
              <input
                id="28"
                type="radio"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className={styles.btn} onClick={handleSubmit}>
            ROLL
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
