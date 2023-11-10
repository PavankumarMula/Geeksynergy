import React, { useEffect, useState } from "react";
import MovieCard from "./movie-card";

const Home = () => {
  // State to hold movie list data
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Fetch movie list data from the API upon component mount
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    try {
      // Make API call to get movie list
      const response = await fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie list");
      }

      const data = await response.json();
      const sortedData = data.result.sort((a, b) => b.voting - a.voting);
      setMovieList(sortedData);
    } catch (error) {
      console.error("Error fetching movie list:", error.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Movie List</h2>
      <ul>
        {movieList.length === 0 ? (
          <center>
            <p>Loading...</p>
          </center>
        ) : (
          movieList.map((movie) => (
            <li key={movie._id} style={{ listStyle: "none" }}>
              <MovieCard movie={movie} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
