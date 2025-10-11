import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Privacy Policy";
  const description = `The Ocean+ privacy policy page!`;
  const pathname = `/privacy-policy`;

  return createMetadata({ title, description, pathname });
}

export default function PrivacyPolicy() {
  return <div>Privacy</div>;
}
