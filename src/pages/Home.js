import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/movieCard/Card";
import styles from "./home.module.scss";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(result.data);
      setMovies(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.content}>
      {movies.results?.map((movie) => {
        return (
          <Card
            key={movie.id}
            src={movie.backdrop_path}
            title={movie.original_title}
            language={movie.original_language}
            rating={movie.vote_average}
            description={movie.overview}
          />
        );
      })}

      <button className={styles.btn}>load</button>
    </div>
  );
};

export default Home;
