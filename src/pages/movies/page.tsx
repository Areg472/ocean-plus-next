import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { movies } from "@/data/movies";

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

    return {
        props: { movie }
    };
};

export default function MoviePage({ movie }: { movie: any }) {
    return (
        <main>
            <h1>{movie?.title ?? "Untitled movie"}</h1>
            <p>{movie?.description ?? ""}</p>
        </main>
    );
}