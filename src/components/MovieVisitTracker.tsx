"use client";

import { useEffect } from "react";

const STORAGE_KEY = "last_visited_movies";
const MAX_VISITED = 8;

export function MovieVisitTracker({ movieId }: { movieId: string }) {
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let visited: string[] = stored ? JSON.parse(stored) : [];

      // Remove if already exists to move it to the end (most recent)
      visited = visited.filter((id) => id !== movieId);

      // Add new movie to the end
      visited.push(movieId);

      // Keep only the last 8
      if (visited.length > MAX_VISITED) {
        visited = visited.slice(-MAX_VISITED);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
    } catch (e) {
      console.error("Failed to update visited movies:", e);
    }
  }, [movieId]);

  return null;
}
