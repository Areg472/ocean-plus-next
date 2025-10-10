import { movies } from "@/data/movies";
import React from "react";
import { MoviePage } from "@/components/MoviePage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return movies.map((movie: { id: string }) => ({ id: movie.id }));
}

type RouteParams = { id?: string };
type Props = { params: RouteParams | Promise<RouteParams> }; // avoid `any` and allow awaiting params

export default async function Page({ params }: Props) {
    const { id } = await params; // typed as RouteParams after await
    const movie = movies.find((m: { id: string }) => m.id === id) ?? null;

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
