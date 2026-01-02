"use client";

import React, { useMemo } from "react";
import "./movies.css";
import SearchPage from "@/components/SearchPage";
import CarouselSection from "@/components/carousel";
import { movies } from "@/data/movies";

export default function MoviesHomepage() {
  const moviesByGenre = useMemo(() => {
    const genreMap = new Map<string, typeof movies>();

    [...movies]
      .sort(() => Math.random() - 0.5)
      .forEach((movie) => {
        if (!movie.image) return;

        const genres = movie.genres.split("/").map((g) => g.trim());

        genres.forEach((genre) => {
          if (!genreMap.has(genre)) {
            genreMap.set(genre, []);
          }
          const genreMovies = genreMap.get(genre)!;
          if (genreMovies.length < 6) {
            genreMovies.push(movie);
          }
        });
      });

    return Array.from(genreMap.entries())
      .sort(() => Math.random() - 0.5)
      .map(([genre, genreMovies]) => ({
        genre,
        delay: Math.floor(Math.random() * 4000) + 5000, // Random delay between 5000-9000ms
        movies: genreMovies.map((movie) => ({
          src: movie.image!,
          alt: movie.title,
          link: `/movies/${movie.id}`,
          width: 2560,
          height: 1440,
        })),
      }));
  }, []);

  return (
    <>
      <div className="Headings text-center mt-16">
        <MoviesHeading />
        {moviesByGenre
          .filter((g) => g.movies.length >= 3)
          .map(({ genre, movies, delay }) => (
            <CarouselSection
              key={genre}
              title={genre}
              images={movies}
              delay={delay}
            />
          ))}
      </div>
    </>
  );
}

function MoviesHeading() {
  return (
    <>
      <h1 className="mt-6 mb-4 leading-normal">Movies & shows!</h1>

      <div className="mt-2 mb-2 flex justify-center w-full px-4">
        <div className="w-full max-w-xl">
          <SearchPage />
        </div>
      </div>
    </>
  );
}
