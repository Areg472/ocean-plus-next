import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "@/components/contactus.css";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Contact Us",
  description:
    "Contact to the Ocean+ team and get support or request your content to be added!",
  pathname: "/contact-us",
});

export default function Contactus() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="contact mx-auto w-full max-w-md text-center">
            <h1>Contact Us</h1>
            <h2 className="mt-2.5">
              Contact us for movies by filling out the form below. If you have
              any other stuff, email us at oceanplus@oceanbluestream.com
            </h2>
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
