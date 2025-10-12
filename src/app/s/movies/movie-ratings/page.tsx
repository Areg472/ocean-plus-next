import MoviesRatingsComp from "@/components/MoviesRatingsComp";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Movie Ratings",
  description: "The Ocean+ movie ratings page!",
  pathname: "/s/movie-ratings",
});

export default function Movieratings() {
  return (
    <>
      <MoviesRatingsComp />
    </>
  );
}
