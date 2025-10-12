import Link from "next/link";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import "./homepage.css";
import { Footer } from "@/components/footer";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Home";
  const description = `The place to watch all of your favorite Vyond content, anywhere, anytime for free!`;
  const pathname = `/`;

  return createMetadata({ title, description, pathname });
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="Headings text-center flex-1 flex flex-col justify-center mb-6">
        <h1 className="mb-4 leading-normal">
          Vyond movies
          <span className="block md:inline md:whitespace-normal whitespace-nowrap">
            {" "}and shows.
          </span>
        </h1>
        <h2 className="mb-1.5 leading-normal">
          Anywhere, anytime, for free, no restrictions.
        </h2>
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-3">
          <Link href="/s/movies">
            <input
              className="oplusbuttons text-white cursor-pointer mt-4 rounded-full bg-blue-400 px-4 py-2 leading-loose"
              type="button"
              value="Access the website"
            />
          </Link>
          <Link href="/privacy-policy">
            <input
              className="oplusbuttons text-white cursor-pointer mt-4 rounded-full bg-blue-400 px-4 py-2 leading-loose"
              type="button"
              value="Privacy Policy"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
