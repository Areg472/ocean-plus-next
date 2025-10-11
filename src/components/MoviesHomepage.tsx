"use client";

import React from "react";
import Link from "next/link";
import "./movies.css";
import SearchPage from "@/components/SearchPage";
import { motion } from "motion/react";
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
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
            >
                <div className="Headings text-center">
                    <h1 className="mt-6 mb-4 leading-normal">Movies and shows!</h1>

                    <div className="mb-4 flex justify-center">
                        <SearchPage />
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
                        <Link
                            href="/movies/movie-ratings"
                        >
                            <button className="button mt-10 h-[30px] cursor-pointer justify-center">
                                Movie age ratings
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
