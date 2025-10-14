"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./movieratings.css";
import aIcon from "../../public/aicon.png";
import sevenIcon from "../../public/7icon.png";
import tIcon from "../../public/ticon.png";
import mIcon from "../../public/micon.png";
import xIcon from "../../public/xicon.png";

export default function MoviesRatingsComp() {
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
              <Carousel
                className="mt-4 w-[280px] lg:w-[393px]"
                orientation="horizontal"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image alt="aicon" src={aIcon} className="one" />
                    <p className="onep">Everyone</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={sevenIcon} className="one" alt="7icon" />
                    <p className="onep">7y olds</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={tIcon} className="one" alt="ticon" />
                    <p className="onep">Teens(13+)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={mIcon} className="one" alt="micon" />
                    <p className="onep">Mature(17+)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image src={xIcon} className="one" alt="xicon" />
                    <p className="onep">Adults(18+)</p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hm" />
                <CarouselNext className="hm2" />
              </Carousel>
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
