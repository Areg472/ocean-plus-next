"use client";

import { useState } from "react";
import TwoDThreeDSwitch from "@/components/TwoDThreeDSwitch";
import "./moviepage.css";

export function MovieIframeSection({
  movieLink = "",
  movieLink_2 = "",
  isSpooky = false,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  if (isSpooky) {
    return (
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
    );
  }

  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src={movieLink}
        loading="lazy"
        className="absolute top-0 h-full w-full border-0"
        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
