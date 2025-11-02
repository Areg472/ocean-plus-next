"use client";

import React from "react";
import "./movies.css";
import SearchPage from "@/components/SearchPage";
import CarouselSection from "@/components/carousel";
import mathWarfare from "../../public/ContentImages/math-warfare.png";
import veyshalMovie from "../../public/ContentImages/veyshal-movie.png";
import blahBlah from "../../public/ContentImages/blah-blah.jpg";
import comedyWorld from "../../public/ContentImages/comedy-world-the-movie.png";
import caillouMovie from "../../public/ContentImages/caillou-the-movie.png";
import littleBill from "../../public/ContentImages/little-bill.png";
import goofusDoofus from "../../public/ContentImages/goofus-doofus.png";
import jpXmas from "../../public/ContentImages/jp-xmas.png";
import cft4 from "../../public/ContentImages/cft-4.png";
import goofusDoofus2 from "../../public/ContentImages/goofus-doofus-2.png";
import jpSpooky from "../../public/ContentImages/jp-spooky.png";

export default function MoviesHomepage() {
  const popularMovies = [
    {
      src: mathWarfare,
      alt: "math-warfare",
      link: "/movies/math-warfare",
    },
    {
      src: veyshalMovie,
      alt: "The Veyshal movie",
      link: "/movies/the-veyshal-movie",
    },
    {
      src: blahBlah,
      alt: "Bla bla thing",
      link: "/shorts/the-random-green-blah-blah-thing",
    },
    {
      src: comedyWorld,
      alt: "Comedy world",
      link: "/movies/the-comedy-world-movie",
    },
    {
      src: caillouMovie,
      alt: "caillou",
      link: "/movies/caillou-the-movie",
    },
    {
      src: littleBill,
      alt: "Little bill",
      link: "/movies/little-bills-valendies-movie",
    },
  ];

  const adventureMovies = [
    {
      src: goofusDoofus,
      alt: "goofusdoofus1",
      link: "/movies/goofus-and-doofus-1",
    },
    {
      src: caillouMovie,
      alt: "caillou",
      link: "/movies/caillou-the-movie",
    },
    {
      src: jpXmas,
      alt: "jpxmas",
      link: "/movies/its-jack-paul-christmas",
    },
    {
      src: cft4,
      alt: "cft4",
      link: "/movies/cftwcftl-the-movie-4",
    },
    {
      src: goofusDoofus2,
      alt: "goofusdoofus2",
      link: "/movies/goofus-and-doofus-2",
    },
    {
      src: jpSpooky,
      alt: "jpspooky",
      link: "/movies/jack-paul-spooktacular",
    },
  ];

  return (
    <>
      <div className="Headings text-center mt-16">
        <MoviesHeading />
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
