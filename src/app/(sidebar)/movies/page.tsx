import React from "react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import MoviesHomepage from "@/components/MoviesHomepage";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Movies - Free Vyond and GoAnimate movies!",
  description:
    "The Ocean+ movies and shorts page. Watch free Vyond and GoAnimate movies and shorts anywhere at anytime!",
  pathname: "/movies",
});

export default function Movies() {
  return (
    <>
      <MoviesHomepage />
      <div className="flex w-full justify-center mb-12">
        <Link
          href="/movies/movie-ratings"
          className="mt-10 inline-flex w-52 h-[30px] cursor-pointer items-center justify-center border border-black bg-black rounded-[20px] text-center transition duration-[400ms] px-4 py-0 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)]"
        >
          Movie age ratings
        </Link>
      </div>
    </>
  );
}
