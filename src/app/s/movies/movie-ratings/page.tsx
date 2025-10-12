import MoviesRatingsComp from "@/components/MoviesRatingsComp";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Movies";
  const description = `The Ocean+ movies page!`;
  const pathname = `/movies`;

  return createMetadata({ title, description, pathname });
}

export default function Movieratings() {
  return (
    <>
      <MoviesRatingsComp />
    </>
  );
}
