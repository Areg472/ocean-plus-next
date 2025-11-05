"use client";

import Link from "next/link";
import Image from "next/image";
import oplussvg from "../../public/oplus.svg";
import { useMediaQuery } from "react-responsive";
import { MenuSquare } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function DesktopNavbar() {
  return (
    <div className="mt-4 flex flex-col items-center md:flex-row md:justify-center">
      <div className="flex flex-row md:contents space-x-2 md:space-x-0">
        <Link href="/">
          <div className="mt-2.5 flex h-[30px] w-[150px] flex-[100%] items-center justify-center rounded-[20px] border border-black bg-[#0259c0] text-center transition-all duration-400 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)] md:relative md:mr-5 md:flex-[25%] xl:mr-5">
            <Image
              src={oplussvg}
              className="mb-[0.4px] max-w-[80%]"
              alt="logo"
            />
          </div>
        </Link>
        <Link href="/movies">
          <button className="mt-2.5 h-[30px] w-[150px] flex-[100%] cursor-pointer rounded-[20px] border border-black bg-black text-center leading-loose transition-all duration-400 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)] md:mr-2.5 md:flex-[25%] xl:mr-5">
            Movies
          </button>
        </Link>
      </div>
      <div className="flex flex-row md:contents space-x-2 md:space-x-0">
        <Link href="/contact-us">
          <button className="mt-2.5 h-[30px] w-[150px] flex-[100%] cursor-pointer rounded-[20px] border border-black bg-black text-center leading-loose transition-all duration-400 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)] md:mr-2.5 md:flex-[25%] xl:mr-5">
            Contact Us
          </button>
        </Link>
        <Link href="/about-us">
          <button className="mt-2.5 h-[30px] w-[150px] flex-[100%] cursor-pointer rounded-[20px] border border-black bg-black text-center leading-loose transition-all duration-400 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)] md:mr-2.5 md:flex-[25%] xl:mr-5">
            About Us
          </button>
        </Link>
      </div>
      <Link href={"https://link.oceanbluestream.com/patreon"} target="_blank">
        <button className="mt-2.5 h-[30px] w-[150px] flex-[100%] cursor-pointer rounded-[20px] border border-black bg-black text-center leading-loose transition-all duration-400 hover:shadow-[10px_10px_20px_rgba(36,36,36,0.5)] md:mr-2.5 md:flex-[25%] xl:mr-5">
          Support Us
        </button>
      </Link>
    </div>
  );
}

function MobileNavbar() {
  return (
    <div className="flex justify-center mt-14 relative">
      <NavigationMenu viewport={false} className="relative">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuSquare />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!left-1/2 !-translate-x-1/2 !absolute !top-full !mt-2 bg-black rounded-md border border-gray-800 shadow-lg !w-auto z-50">
              <ul className="flex flex-col w-[200px] gap-3 p-4 text-center">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="block">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/movies" className="block">
                      Movies
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/contact-us" className="block">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/about-us" className="block">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://link.oceanbluestream.com/patreon"
                      target="_blank"
                      className="block"
                    >
                      Support Us
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile && <MobileNavbar />}
      {isDesktopOrLaptop && <DesktopNavbar />}
    </>
  );
}
