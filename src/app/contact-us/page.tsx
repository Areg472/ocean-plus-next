import ContactUsPage from "@/components/ContactUsPage";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Contact Us",
  description:
    "Contact to the Ocean+ team and get support or request your content to be added!",
  pathname: "/contact-us",
});

export default function Contactus() {
  return <ContactUsPage />;
}
