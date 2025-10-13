"use client";

import React from "react";
import Link from "next/link";
import "./movies.css";
import SearchPage from "@/components/SearchPage";
import CarouselSection from "@/components/carousel";
import mathWarfare from "../../public/math-warfare.png";
import veyshalMovie from "../../public/veyshal-movie.png";
import blahBlah from "../../public/blah-blah.jpg";
import comedyWorld from "../../public/comedy-world-the-movie.png";
import caillouMovie from "../../public/caillou-the-movie.png";
import littleBill from "../../public/little-bill.png";
import goofusDoofus from "../../public/goofus-doofus.png";
import jpXmas from "../../public/jp-xmas.png";
import cft4 from "../../public/cft-4.png";
import goofusDoofus2 from "../../public/goofus-doofus-2.png";
import jpSpooky from "../../public/jp-spooky.png";

export default function MoviesHomepage() {
  const popularMovies = [
    {
      src: mathWarfare,
      alt: "math-warfare",
      link: "/s/movies/math-warfare",
    },
    {
      src: veyshalMovie,
      alt: "The Veyshal movie",
      link: "/s/movies/the-veyshal-movie",
    },
    {
      src: blahBlah,
      alt: "Bla bla thing",
      link: "/s/shorts/the-random-green-blah-blah-thing",
    },
    {
      src: comedyWorld,
      alt: "Comedy world",
      link: "/s/movies/the-comedy-world-movie",
    },
    {
      src: caillouMovie,
      alt: "caillou",
      link: "/s/movies/caillou-the-movie",
    },
    {
      src: littleBill,
      alt: "Little bill",
      link: "/s/movies/little-bills-valendies-movie",
    },
  ];

  const adventureMovies = [
    {
      src: goofusDoofus,
      alt: "goofusdoofus1",
      link: "/s/movies/goofus-and-doofus-1",
    },
    {
      src: caillouMovie,
      alt: "caillou",
      link: "/s/movies/caillou-the-movie",
    },
    {
      src: jpXmas,
      alt: "jpxmas",
      link: "/s/movies/its-jack-paul-christmas",
    },
    {
      src: cft4,
      alt: "cft4",
      link: "/s/movies/cftwcftl-the-movie-4",
    },
    {
      src: goofusDoofus2,
      alt: "goofusdoofus2",
      link: "/s/movies/goofus-and-doofus-2",
    },
    {
      src: jpSpooky,
      alt: "jpspooky",
      link: "/s/movies/jack-paul-spooktacular",
    },
  ];

  return (
    <>
      <div className="Headings text-center mt-16 mb-12">
        <h1 className="mt-6 mb-4 leading-normal">Movies & shows!</h1>

        <div className="mt-2 mb-2 flex justify-center w-full px-4">
          <div className="w-full max-w-xl">
            <SearchPage />
          </div>
        </div>

        <CarouselSection
          title="Most Popular"
          images={popularMovies}
          delay={7500}
        />

        <CarouselSection
          title="Adventure"
          images={adventureMovies}
          delay={7000}
        />

        <div className="flex w-full justify-center">
          <Link href="/s/movies/movie-ratings">
            <button className="button mt-10 w-56 h-[30px] cursor-pointer justify-center border border-black bg-black rounded-[20px] text-center transition duration-[400ms] px-4 py-0 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)]">
              Movie age ratings
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
