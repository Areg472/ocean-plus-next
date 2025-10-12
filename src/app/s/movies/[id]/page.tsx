import { movies } from "@/data/movies";
import React from "react";
import { MoviePage } from "@/components/MoviePage";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return movies.map((movie) => ({ id: String(movie.id) }));
}

type RouteParams = { id: string };
type Props = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return createMetadata({
      title: "Movie not found",
      description: "No such movie",
      pathname: `/movies/${id}`,
    });
  }

  const title = `Ocean+ - ${movie.title}`;
  const description = `Watch ${movie.title} on Ocean+ for free!`;
  const pathname = `/movies/${movie.id}`;

  return createMetadata({ title, description, pathname });
}

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
    <main className="mt-16 mb-12">
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
