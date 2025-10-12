"use client";

import Turnstile, { useTurnstile } from "react-turnstile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./contactus.css";

declare global {
  interface Window {
    heap: {
      identify: (uniqueId: string, properties?: object) => void;
      addUserProperties: (properties: object) => void;
    };
  }
}

export default function ContactUsPage() {
  const turnstile = useTurnstile();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    if (typeof window.heap !== "undefined") {
      window.heap.identify(name);

      window.heap.addUserProperties({
        name: name,
        email: email,
      });
    }

    e.currentTarget.submit();
  };

  const formID = process.env.PUBLIC_FORM_ID;
  const CFSiteKey = process.env.PUBLIC_CF_TURNSTILE_SITE_KEY;

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
            <form
              onSubmit={handleSubmit}
              action={`https://submit-form.com/${formID}`}
              className="form"
            >
              <label htmlFor="name" className="nametext">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="field otherfield rounded-md"
                required={true}
              />
              <br />
              <label htmlFor="email" className="emailtext">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="field otherfield rounded-md"
                required={true}
              />
              <br />
              <label htmlFor="message" className="movietext">
                Movie link
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="field textarea mb-2.5 rounded-md"
                required={true}
              ></textarea>
              <br />
              <Turnstile
                sitekey={CFSiteKey}
                onVerify={(token) => {
                  fetch("/Contact-Us", {
                    method: "POST",
                    body: JSON.stringify({ token }),
                  }).then((response) => {
                    if (!response.ok)
                      turnstile.return(
                        "Turnstile token successfuly validated.",
                      );
                  });
                }}
              />
              <button type="submit" className="submit cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
