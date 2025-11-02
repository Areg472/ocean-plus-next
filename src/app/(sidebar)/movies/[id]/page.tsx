import { movies } from "@/data/movies";
import React from "react";
import { MovieIframeSection } from "@/components/MovieIframeSection";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import SearchPage from "@/components/SearchPage";
import DynamicAccordionForMoviesAndShorts from "@/components/DynamicAccordionForMoviesAndShorts";
import "@/components/moviepage.css";
import { MarkAsWatchedButton } from "@/components/MarkAsWatchedButton";

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
  const description = `Watch ${movie.title} on Ocean+ for free! Vyond movies anywhere, at anytime!`;
  const pathname = `/movies/${movie.id}`;
  const image = movie.image ?? "/logo.jpg";

  return createMetadata({ title, description, pathname, image });
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    notFound();
  }

  if (!movie.movieLink && !movie.movieLink_2) {
    return (
      <main className="mt-16 mb-12">
        <div className="px-4 md:px-6 lg:px-8">
          <p>No video links available for this movie.</p>
        </div>
      </main>
    );
  }

  const isSpooky = movie.title === "Jack Paul Spooktacular";

  return (
    <main className="mt-16 mb-12">
      <div>
        <div className="px-4 md:px-6 lg:px-8">
          <h1
            className="issue text-center leading-normal lg:text-left"
            style={{
              minWidth: movie.title.length < 14 ? "13.5ch" : "auto",
              display: "inline-block",
            }}
          >
            {movie.title}
          </h1>
          <div className="mt-4 mb-4 flex justify-center">
            <MarkAsWatchedButton
              movieId={String(movie.id)}
              movieTitle={movie.title}
            />
          </div>
          <div className="mt-2 mb-2 flex justify-center">
            <SearchPage />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <DynamicAccordionForMoviesAndShorts
                year={movie.year}
                genres={movie.genres}
                creator={movie.creator}
              />
            </div>
            <div className="w-full">
              <MovieIframeSection
                movieLink={movie.movieLink ?? movie.movieLink_2 ?? ""}
                isSpooky={isSpooky}
                {...(movie.movieLink_2
                  ? { movieLink_2: movie.movieLink_2 }
                  : {})}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
