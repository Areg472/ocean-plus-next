import React from "react";
import { shorts } from "@/data/shorts";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import SearchPage from "@/components/SearchPage";
import DynamicAccordionForMoviesAndShorts from "@/components/DynamicAccordionForMoviesAndShorts";
import "@/components/moviepage.css";
import { MarkAsWatchedButton } from "@/components/MarkAsWatchedButton";

export async function generateStaticParams() {
  return shorts.map((short) => ({ id: String(short.id) }));
}

type RouteParams = { id: string };
type Props = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { id } = await params;
  const short = shorts.find((s) => String(s.id) === id);

  if (!short) {
    return createMetadata({
      title: "Short not found",
      description: "No such short",
      pathname: `/shorts/${id}`,
    });
  }

  const title = `Ocean+ - ${short.title}`;
  const description = `Watch ${short.title} on Ocean+ for free. Vyond shorts anywhere, at anytime!`;
  const pathname = `/shorts/${short.id}`;
  const image = short.image ?? "/logo.jpg";

  return createMetadata({ title, description, pathname, image });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const short = shorts.find((s) => String(s.id) === id);

  if (!short) {
    notFound();
  }

  if (!short?.shortLink) {
    return (
      <main className="mt-16 mb-12">
        <div className="px-4 md:px-6 lg:px-8">
          <p>No video links available for this short.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-16 mb-12">
      <div>
        <div className="px-4 md:px-6 lg:px-8">
          <h1
            className="issue text-center leading-normal lg:text-left"
            style={{
              minWidth: short.title.length < 14 ? "13.5ch" : "auto",
              display: "inline-block",
            }}
          >
            {short.title}
          </h1>
          <div className="mt-4 mb-4 flex justify-center">
            <MarkAsWatchedButton
              movieId={`short_${short.id}`}
              movieTitle={short.title}
            />
          </div>
          <div className="mt-2 mb-2 flex justify-center">
            <SearchPage />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <DynamicAccordionForMoviesAndShorts
                year={short.year}
                creator={short.creator}
              />
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src={short.shortLink}
                loading="lazy"
                className="absolute top-0 h-full w-full border-0"
                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
