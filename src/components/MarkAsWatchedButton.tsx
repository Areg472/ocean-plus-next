"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Eye } from "lucide-react";

interface MarkAsWatchedButtonProps {
  movieId: string;
  movieTitle?: string;
}

export function MarkAsWatchedButton({ movieId }: MarkAsWatchedButtonProps) {
  const [isWatched, setIsWatched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storageKey = movieId.startsWith("short_")
      ? movieId
      : `movie_${movieId}`;
    const watched = localStorage.getItem(storageKey);
    if (watched === "watched") {
      setIsWatched(true);
    }
  }, [movieId]);

  const handleMarkAsWatched = async () => {
    setIsLoading(true);
    try {
      const storageKey = movieId.startsWith("short_")
        ? movieId
        : `movie_${movieId}`;
      localStorage.setItem(storageKey, "watched");
      setIsWatched(true);
      window.dispatchEvent(new Event("watchedStatusChanged"));
    } catch (error) {
      console.error("Error marking movie as watched:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnmarkAsWatched = async () => {
    setIsLoading(true);
    try {
      const storageKey = movieId.startsWith("short_")
        ? movieId
        : `movie_${movieId}`;
      localStorage.removeItem(storageKey);
      setIsWatched(false);
      window.dispatchEvent(new Event("watchedStatusChanged"));
    } catch (error) {
      console.error("Error unmarking movie as watched:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isWatched ? (
        <Button
          onClick={handleUnmarkAsWatched}
          disabled={isLoading}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Check className="h-4 w-4" />
          Watched
        </Button>
      ) : (
        <Button
          onClick={handleMarkAsWatched}
          disabled={isLoading}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Eye className="h-4 w-4" />
          Mark as Watched
        </Button>
      )}
    </div>
  );
}
