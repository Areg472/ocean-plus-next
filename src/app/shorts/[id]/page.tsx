import React from "react";
import { shorts } from "@/data/shorts";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ShortPage } from "@/components/ShortPage";

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
  const description = `Watch ${short.title} on Ocean+ for free!`;
  const pathname = `/shorts/${short.id}`;

  return createMetadata({ title, description, pathname });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const short = shorts.find((s) => String(s.id) === id);

  if (!short) {
    notFound();
  }

  if (!short?.shortLink) {
    return (
      <main>
        <p>No video links available for this short.</p>
      </main>
    );
  }

  const primaryLink = short.shortLink ?? "";

  return (
    <main>
      <ShortPage
        title={short.title}
        creator={short.creator}
        shortLink={primaryLink}
        year={short.year}
      />
    </main>
  );
}
