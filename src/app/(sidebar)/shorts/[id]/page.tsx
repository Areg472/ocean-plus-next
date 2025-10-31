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
      <main>
        <p>No video links available for this short.</p>
      </main>
    );
  }

  const primaryLink = short.shortLink ?? "";

  return (
    <main className="mt-16 mb-12">
      <ShortPage
        title={short.title}
        creator={short.creator}
        shortLink={primaryLink}
        year={short.year}
      />
    </main>
  );
}
