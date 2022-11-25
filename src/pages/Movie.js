import React from "react";
import { useLocation, useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";

const Movie = () => {
  const nav = useNavigate();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const state = useLocation();
  const source = "https://image.tmdb.org/t/p/w500/";
  const { title, description, src, year, rating } = state.state;
  return (
    <main>
      <h1>{title}</h1>
      <br />
      <img src={source + src} alt="movie" />
      <br />
      <p>
        <strong>description:</strong>
        {description}
      </p>
      <br />
      <strong>year:</strong> {year.slice(0, 4)}
      <br />
      <ReactStars
        count={10}
        onChange={ratingChanged}
        size={24}
        value={rating}
        isHalf="true"
        activeColor="#ffd700"
      />
      <strong>rating:</strong> {rating}
      <button onClick={() => nav(-1)}>go back</button>
    </main>
  );
};

export default Movie;
