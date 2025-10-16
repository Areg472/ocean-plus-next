"use client";

import Form from "next/form";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useLogger } from "@logtail/next";
import "./contactus.css";

declare global {
  interface Window {
    heap: {
      identify: (uniqueId: string, properties?: object) => void;
      addUserProperties: (properties: object) => void;
    };
  }
}

export default function ContactForm() {
  const turnstile = useTurnstile();
  const log = useLogger();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    log.debug("Contact form submitted", { name, email, message });

    if (typeof window.heap !== "undefined") {
      window.heap.identify(name);

      window.heap.addUserProperties({
        name: name,
        email: email,
      });
    }

    e.currentTarget.submit();
  };

  const formID = process.env.NEXT_PUBLIC_FORM_ID;
  const CFSiteKey = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY;

  if (!CFSiteKey) {
    console.error("Missing PUBLIC_CF_TURNSTILE_SITE_KEY environment variable");
  }
  if (!formID) {
    console.error("Missing PUBLIC_FORM_ID environment variable");
  }

  return (
    <>
      <Form
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
                turnstile.return("Turnstile token successfuly validated.");
            });
          }}
        />
        <button type="submit" className="submit cursor-pointer">
          Submit
        </button>
      </Form>
    </>
  );
}
