import { movies } from "@/data/movies";
import React from "react";
import { MoviePage } from "@/components/MoviePage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return movies.map((movie) => ({ id: String(movie.id) }));
}

type RouteParams = { id: string };
type Props = { params: Promise<RouteParams> };

export default async function Page({ params }: Props) {
    const { id } = await params;

    const movie = movies.find((m) => String(m.id) === id);

    if (!movie) {
        notFound();
    }

    if (!movie.movieLink && !movie.movieLink_2) {
        return (
            <main>
                <p>No video links available for this movie.</p>
            </main>
        );
    }

    const primaryLink = movie.movieLink ?? movie.movieLink_2 ?? "";

    return (
        <main>
            <MoviePage
                title={movie.title}
                creator={movie.creator}
                movieLink={primaryLink}
                year={movie.year}
                genres={movie.genres}
                {...(movie.movieLink_2 ? { movieLink_2: movie.movieLink_2 } : {})}
            />
        </main>
    );
}

