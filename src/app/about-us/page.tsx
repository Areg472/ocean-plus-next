import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import "./aboutus.css";
import { Footer } from "@/components/footer";
import {
  Cardareg,
  CardaregContent,
  CardaregHeader,
} from "@/components/cardareg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Cardleon,
  CardleonContent,
  CardleonHeader,
} from "@/components/cardleon";
import {
  Cardveyshal,
  CardveyshalContent,
  CardveyshalHeader,
} from "@/components/cardveyshal";
import {
  Cardcarlo,
  CardcarloContent,
  CardcarloHeader,
} from "@/components/cardcarlo";
import { GithubLanguages } from "@/components/githublanguages";
import { GlitchText } from "@/components/glitch";
import "./aboutus.css";
import { Navbar } from "@/components/navbar";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - About Us";
  const description = `The Ocean+ about page!`;
  const pathname = `/about-us`;

  return createMetadata({ title, description, pathname });
}

export default function AboutUsPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center w-full">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center">
          <GlitchText size="normal" text="About Us" className="mt-14" />
          <h3 className="mt-3 text-xl">Here is our team who develops Ocean+</h3>
          <div className="mb-10 mt-4 flex flex-col items-center justify-center space-y-6 md:mt-6 md:flex-row md:space-x-2 md:space-y-0 lg:space-x-14">
            <Cardareg className="card w-52 basis-full lg:basis-1/4">
              <CardaregHeader>
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/uwuuu-duck.png" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Areg</h3>
                <p>Main developer</p>
              </CardaregHeader>
              <CardaregContent>
                <a href="https://aregus.me/" target="_blank">
                  <button className="button w-20 h-7 cursor-pointer text-sm">
                    My page
                  </button>
                </a>
              </CardaregContent>
            </Cardareg>
            <Cardcarlo className="card w-52 basis-full lg:basis-1/4">
              <CardcarloHeader>
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/carlo-pfp.jpg" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Carlo</h3>
                <p>Editor</p>
              </CardcarloHeader>
              <CardcarloContent>
                <a href="https://www.youtube.com/@CarloBear" target="_blank">
                  <button className="button w-20 h-7 cursor-pointer text-sm">
                    Youtube
                  </button>
                </a>
              </CardcarloContent>
            </Cardcarlo>
            <Cardleon className="card w-52 basis-full lg:basis-1/4">
              <CardleonHeader>
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/leon-pfp.jpg" />
                  <AvatarFallback>LE</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Leon</h3>
                <p>2nd developer</p>
              </CardleonHeader>
              <CardleonContent>
                <a href="https://www.youtube.com/@1leon000" target="_blank">
                  <button className="button w-20 h-7 cursor-pointer text-sm">
                    Youtube
                  </button>
                </a>
              </CardleonContent>
            </Cardleon>
            <Cardveyshal className="card w-52 basis-full lg:basis-1/4">
              <CardveyshalHeader>
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/veyshal-pfp.jpg" />
                  <AvatarFallback>VE</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Veyshal</h3>
                <p>Founder</p>
              </CardveyshalHeader>
              <CardveyshalContent>
                <a href="https://www.youtube.com/@veymations" target="_blank">
                  <button className="button w-20 h-7 cursor-pointer text-sm">
                    Youtube
                  </button>
                </a>
              </CardveyshalContent>
            </Cardveyshal>
          </div>
          <GithubLanguages />
        </div>
        <Footer />
      </div>
    </>
  );
}
