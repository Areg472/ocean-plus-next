"use client";

import "./moviepage.css";
import { useState } from "react";

import SearchPage from "@/components/SearchPage";
import TwoDThreeDSwitch from "@/components/TwoDThreeDSwitch";
import DynamicAccordionForMoviesAndShorts from "@/components/DynamicAccordionForMoviesAndShorts";

export function MoviePage({
  creator = "",
  title = "",
  year = "",
  genres = "",
  movieLink = "",
  movieLink_2 = "",
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const isSpooky = title == "Jack Paul Spooktacular";

  return (
    <>
      <div>
        <div className="px-4 md:px-6 lg:px-8">
          <h1
            className="issue text-center leading-normal lg:text-left"
            style={{
              minWidth: title.length < 14 ? "13.5ch" : "auto",
              display: "inline-block",
            }}
          >
            {title}
          </h1>
          <div className="mt-2 mb-2 flex justify-center">
            <SearchPage />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <DynamicAccordionForMoviesAndShorts
                year={year}
                genres={genres}
                creator={creator}
              />
            </div>
            <div className="w-full">
              {isSpooky ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2 p-4">
                    <TwoDThreeDSwitch
                      isChecked={isChecked}
                      handleSwitchChange={handleSwitchChange}
                    />
                  </div>
                  <div className="w-full">
                    {isChecked ? (
                      <div className="relative pt-[56.25%]">
                        <iframe
                          src={movieLink_2}
                          loading="lazy"
                          className="absolute top-0 h-full w-full border-0"
                          allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="relative pt-[56.25%]">
                        <iframe
                          src={movieLink}
                          loading="lazy"
                          className="absolute top-0 h-full w-full border-0"
                          allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={movieLink}
                    loading="lazy"
                    className="absolute top-0 h-full w-full border-0"
                    allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
