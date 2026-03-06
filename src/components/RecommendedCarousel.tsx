"use client";

import React, { useEffect, useState, useMemo } from "react";
import CarouselSection from "@/components/carousel";
import { movies } from "@/data/movies";

const STORAGE_KEY = "last_visited_movies";

export function RecommendedCarousel() {
  const [visitedIds, setVisitedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setVisitedIds(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse visited movies:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const recommendedMovies = useMemo(() => {
    if (visitedIds.length === 0) return [];

    // 1. Get visited movie objects
    const visitedMovies = visitedIds
      .map((id) => movies.find((m) => String(m.id) === id))
      .filter((m) => m !== undefined);

    // 2. Extract all genres from these movies
    const visitedGenres = new Set<string>();
    visitedMovies.forEach((m) => {
      m?.genres.split("/").forEach((g) => visitedGenres.add(g.trim()));
    });

    if (visitedGenres.size === 0) return [];

    // 3. Find all movies that match any of these genres, excluding already visited ones
    const candidates = movies.filter((movie) => {
      if (!movie.image) return false;
      if (visitedIds.includes(String(movie.id))) return false;
      const movieGenres = movie.genres.split("/").map((g) => g.trim());
      return movieGenres.some((g) => visitedGenres.has(g));
    });

    // 4. Randomly select 8 unique items
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 8);

    return selected.map((movie) => ({
      src: movie.image!,
      alt: movie.title,
      link: `/movies/${movie.id}`,
      width: 2560,
      height: 1440,
    }));
  }, [visitedIds]);

  if (!isLoaded || recommendedMovies.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 mb-8 mx-auto max-w-5xl">
      <CarouselSection
        title="Recommended for you"
        images={recommendedMovies}
        delay={7000}
        isSmall
      />
    </div>
  );
}
