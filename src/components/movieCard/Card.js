import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./card.module.scss";
const Card = ({ title, description, language, src, rating, year }) => {
  const navigate = useNavigate();
  const [source, setSource] = useState();
  useEffect(() => {
    if (src !== null) {
      setSource("https://image.tmdb.org/t/p/w500/" + src);
    } else {
      setSource("./assets/placeholder.jpg");
    }
  }, [source, src]);

  return (
    <div
      className={styles.container}
      onClick={() =>
        navigate("/Movie", {
          state: { year, rating, src, language, title, description },
        })
      }
    >
      <img className={styles.bannerImg} src={source} alt="movie banner" />
      <h3>{title}</h3>
      <p>{language}</p>
      <p>{year}</p>
      <div className={styles.ratingCont}>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default Card;
