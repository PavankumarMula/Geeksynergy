// MovieCard.js

import React from "react";
import styles from "../styles/movie-card.module.css";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const MovieCard = ({ movie }) => {
  const date = convertTimestampToDateString(movie.releasedDate);
  return (
    <>
      <div className={styles.container}>
        {/*   Movie Details Component* */}
        <div className={styles.MovieCard}>
          <div className={styles.voting}>
            <VscTriangleUp />
            {movie.voting}
            <VscTriangleDown />
            <p>Votes</p>
          </div>
          <div className={styles.image}>
            <img src={movie.poster} alt="movie Poster" />
          </div>
          <div className={styles.MovieDetails}>
            <h3>{movie.title}</h3>
            <p>
              <strong>Genre</strong>:{movie.genre}
            </p>
            <p>
              <strong>Director</strong>:{movie.director[0]}
            </p>
            <p>
              <strong>starring</strong>:{movie.stars.map((star, i) => star)}
            </p>
            <p>
              Mins | {movie.language} | {date}
            </p>
            <p>
              {movie.pageViews} Views | voted By {movie.totalVoted} People
            </p>
          </div>
        </div>

        {/*   button Component* */}
        <div className={styles.button}>
          <button>Watch Trailer</button>
        </div>
      </div>
    </>
  );
};

// extract released date
function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  const options = {
    year: "numeric",
    month: "long", // or 'short' for abbreviated month names
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export default MovieCard;
