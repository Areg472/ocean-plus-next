import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RatingsCarousel from "@/components/RatingsCarousel";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Movie Ratings",
  description: "The Ocean+ movie ratings page!",
  pathname: "/movie-ratings",
});

export default function Movieratings() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="my-8 flex flex-grow items-center justify-center">
        <div className="dark">
          <Card className="w-[320px] lg:w-[442px]">
            <CardHeader>
              <CardTitle>Our ratings</CardTitle>
              <CardDescription>
                We use special age ratings for our movies, created by us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>The ratings are:</p>
              <RatingsCarousel />
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
