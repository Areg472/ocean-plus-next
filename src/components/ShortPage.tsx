"use client";

import "./moviepage.css";
import SearchPage from "@/components/SearchPage";
import DynamicAccordionForMoviesAndShorts from "@/components/DynamicAccordionForMoviesAndShorts";

const padTitle = (title: string): string => {
  if (title.length >= 14) return title;

  const spacesNeeded = 20 - title.length;
  const spacesStart = Math.floor(spacesNeeded / 2);
  const spacesEnd = spacesNeeded - spacesStart;

  return "\u00A0".repeat(spacesStart) + title + "\u00A0".repeat(spacesEnd);
};

export function ShortPage({
  creator = "",
  year = "",
  title = "",
  shortLink = "",
}) {
  return (
    <>
      <div>
        <div className="px-4 md:px-6 lg:px-8">
          <h1 className="issue text-center leading-normal lg:text-left">
            {padTitle(title)}
          </h1>
          <div className="mt-2 mb-2 flex justify-center">
            <SearchPage />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <DynamicAccordionForMoviesAndShorts
                year={year}
                creator={creator}
              />
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src={shortLink}
                loading="lazy"
                className="absolute top-0 h-full w-full border-0"
                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
