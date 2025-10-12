import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Ocean+ - Privacy Policy";
  const description = `The Ocean+ privacy policy page!`;
  const pathname = `/privacy-policy`;

  return createMetadata({ title, description, pathname });
}

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - Privacy Policy",
  description: "The Ocean+ privacy policy page!",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="container text-center">
            <p className="text-xl leading-loose">
              By using Ocean+ your session data will be collected by Heap. We
              dont
              <br /> sell your data to third party companies. By visiting any
              Ocean+ page your request info,
              <br /> Network service provider, Postal code(in some countries),
              User Agent,
              <br /> IP address and request codes will be stored on a logging
              service for 3 days before deleted.
              <br /> By visiting anything on Ocean+ for more than 30 seconds
              <br />
              then your session will be recorded by using Hotjar.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
