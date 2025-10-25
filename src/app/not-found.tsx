"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { movies } from "@/data/movies";
import { shorts } from "@/data/shorts";

interface HotjarWindow extends Window {
  hj?: (command: string, ...args: unknown[]) => void;
}

export default function NotFound() {
  const router = useRouter();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = [
    "/",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/movies",
    "/movies/movie-ratings",
    ...movies.map((m) => `/movies/${m.id}`),
    ...shorts.map((s) => `/shorts/${s.id}`),
  ];

  useEffect(() => {
    const hotjarWindow = window as HotjarWindow;
    if (typeof window !== "undefined" && hotjarWindow.hj) {
      hotjarWindow.hj("stateChange", "/404-blocked");
      const surveys = document.querySelectorAll('[id^="hotjar-"]');
      surveys.forEach((survey) => survey.remove());
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex((prev) => (prev + 1) % pages.length);
    }, 10);

    return () => clearInterval(interval);
  }, [pages.length]);

  const handleClick = () => {
    router.push(pages[currentPageIndex]);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center font-sans bg-black text-white relative px-4">
      <style jsx global>{`
        body {
          background: black none !important;
        }
      `}</style>
      <div className="flex flex-col md:flex-row items-center">
        <h1 className="text-2xl font-normal md:pr-6 md:mr-6 md:border-r border-gray-700 mb-4 md:mb-0">
          404
        </h1>
        <div className="flex flex-col">
          <h2 className="text-sm m-0 p-0 whitespace-nowrap">
            This page could not be found.
          </h2>
          <button
            onClick={handleClick}
            className="mt-4 w-full px-0 py-2 bg-white text-black text-sm rounded cursor-pointer hover:bg-gray-200 transition-colors"
          >
            Go somewhere lol
          </button>
        </div>
      </div>
    </div>
  );
}
