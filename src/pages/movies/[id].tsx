import { GetStaticPaths, GetStaticProps } from "next";
import { movies, Movie } from "@/data/movies";
import React from "react";
import type { NextPage } from "next";

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

    // Replace undefined movieLink with null so the props can be JSON-serialized
    const serializedMovie: Movie & { movieLink: string | null } = {
        ...movie,
        movieLink: movie.movieLink ?? null,
        movieLink_2: movie.movieLink_2 ?? null
    };

    return {
        props: { movie: serializedMovie }
    };
};

type Props = { movie: Movie & { movieLink?: string | null } };

const MoviePage: NextPage<Props> = ({ movie }) => {

    return (
        <main>
            <h1>HIII</h1>
        </main>
    );
};

export default MoviePage;
