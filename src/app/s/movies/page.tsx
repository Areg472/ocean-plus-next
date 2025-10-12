import React from "react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import MoviesHomepage from "@/components/MoviesHomepage";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Movies";
  const description = `The Ocean+ movies page!`;
  const pathname = `/s/movies`;

  return createMetadata({ title, description, pathname });
}

export default function Movies() {
  return <MoviesHomepage />;
}
