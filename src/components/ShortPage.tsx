"use client";

import "./moviepage.css";
import SearchPage from "@/components/SearchPage";
import DynamicAccordionForMoviesAndShorts from "@/components/DynamicAccordionForMoviesAndShorts";

export function ShortPage({
  creator = "",
  year = "",
  title = "",
  shortLink = "",
}) {
  return (
    <>
      <body>
        <div className="px-4 md:px-6 lg:px-8">
          <h1 className="issue text-center leading-normal lg:text-left">
            {title}
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
      </body>
    </>
  );
}
