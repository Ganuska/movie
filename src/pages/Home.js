import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/movieCard/Card";
import styles from "./home.module.scss";
import Modal from "../components/modal/Modal";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log(result.data);
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  const fetchMore = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setMovies((old) => {
      return [...old, ...result.data.results];
    });
    setPage((old) => old + 1);
  };
  useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Modal
          showModal={() => {
            setShowModal((old) => !old);
          }}
        />
      )}
      <button
        className={styles.randomBtn}
        onClick={() => setShowModal((show) => true)}
      >
        PICK RANDOM
      </button>

      <div className={styles.content}>
        {movies
          ?.filter((item) => item.backdrop_path)
          .map((movie) => {
            return (
              <Card
                key={movie.id}
                src={movie.backdrop_path}
                title={movie.title}
                language={movie.original_language}
                rating={movie.vote_average}
                description={movie.overview}
                year={movie.release_date.slice(0, 4)}
                bigPhoto={movie.poster_path}
                id={movie.id}
              />
            );
          })}

        <button onClick={fetchMore} className={styles.btn}>
          load more
        </button>
      </div>
    </>
  );
};

export default Home;
