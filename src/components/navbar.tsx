import Link from "next/link";
import Image from "next/image";
import oplussvg from "../../public/oplus.svg";

import "./navbar.css";

export function Navbar() {
  return (
    <>
      <div className="navbar mt-4">
        <Link href="/">
          <div className="image leading-loose">
            <Image src={oplussvg} className="actualimage" alt="logo" />
          </div>
        </Link>
        <Link href="/movies">
          <button className="button cursor-pointer leading-loose">
            Movies
          </button>
        </Link>
        <Link href="/contact-us">
          <button className="button cursor-pointer leading-loose">
            Contact Us
          </button>
        </Link>
        <Link href="/about-us">
          <button className="button cursor-pointer leading-loose">
            About Us
          </button>
        </Link>
      </div>
    </>
  );
}
