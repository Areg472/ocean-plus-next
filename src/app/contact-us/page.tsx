import ContactUsPage from "@/components/ContactUsPage";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Contact Us";
  const description = `Contact to the Ocean+ team and get support or request your content to be added!`;
  const pathname = `/contact-us`;

  return createMetadata({ title, description, pathname });
}

export default function Contactus() {
  return <ContactUsPage />;
}
