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
    // Check if movieId already has a prefix (short_), otherwise add movie_ prefix
    const cookieName = movieId.startsWith("short_")
      ? movieId
      : `movie_${movieId}`;
    const watched = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));
    if (watched) {
      setIsWatched(true);
    }
  }, [movieId]);

  const handleMarkAsWatched = async () => {
    setIsLoading(true);
    try {
      // Check if movieId already has a prefix (short_), otherwise add movie_ prefix
      const cookieName = movieId.startsWith("short_")
        ? movieId
        : `movie_${movieId}`;
      document.cookie = `${cookieName}=watched; path=/; max-age=31536000`;
      setIsWatched(true);
      // Notify sidebar to update
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
      // Check if movieId already has a prefix (short_), otherwise add movie_ prefix
      const cookieName = movieId.startsWith("short_")
        ? movieId
        : `movie_${movieId}`;
      document.cookie = `${cookieName}=; path=/; max-age=0`;
      setIsWatched(false);
      // Notify sidebar to update
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
