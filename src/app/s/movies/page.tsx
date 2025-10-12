import React from "react";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import MoviesHomepage from "@/components/MoviesHomepage";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Movies",
  description: "The Ocean+ movies page!",
  pathname: "/s/movies",
});

export default function Movies() {
  return <MoviesHomepage />;
}
