import { GetStaticPaths, GetStaticProps } from "next";
import { movies, Movie } from "@/data/movies";
import React from "react";
import type { NextPage } from "next";
import {MoviePage} from "@/components/MoviePage";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = movies.map((movie: { id: string }) => ({
        params: { id: movie.id }
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string | undefined;
    const movie = movies.find((m: { id: string }) => m.id === id) ?? null;

    if (!movie) {
        return { notFound: true };
    }

    const serializedMovie: Movie & { movieLink: string | null; movieLink_2: string | null } = {
        ...movie,
        movieLink: movie.movieLink ?? null,
        movieLink_2: movie.movieLink_2 ?? null
    };

    return {
        props: { movie: serializedMovie }
    };
};

type Props = { movie: Movie & { movieLink: string | null; movieLink_2: string | null } };

const MoviePages: NextPage<Props> = ({ movie }) => {

    return (
        <main>
           <MoviePage title={movie.title} creator={movie.creator} movieLink={movie.movieLink} movieLink_2={movie.movieLink_2} year={movie.year} genres={movie.genres} />
        </main>
    );
};

export default MoviePages;
