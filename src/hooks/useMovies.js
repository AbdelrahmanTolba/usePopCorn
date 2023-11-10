import { useState, useEffect } from "react";

const KEY = "18c8a2f7";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      // callBack?.();
      const controller = new AbortController();
      async function fetchMovies() {
        setIsLoading(true);
        setError("");
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Somthing wents wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False")
            throw new Error("Movies is not found!");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return [movies, isLoading, error];
}
