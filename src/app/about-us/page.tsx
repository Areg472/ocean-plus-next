import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import "./aboutus.css";
import { Footer } from "@/components/footer";
import { GithubLanguages } from "@/components/githublanguages";
import { GlitchText } from "@/components/glitch";
import "./aboutus.css";
import { Navbar } from "@/components/navbar";
import CompleteAboutUs from "@/components/completeaboutus";

export const metadata: Metadata = createMetadata({
  title: "Ocean+ - About Us",
  description: "The Ocean+ about page!",
  pathname: "/about-us",
});

export default function AboutUsPage() {
  const personInfo = [
    {
      avatar: "/uwuuu-duck.png",
      color: "dark:bg-[#d9b523]",
      tagline: "Main developer",
      buttonText: "My page",
      buttonLink: "https://aregus.me/",
      avatarFallback: "AR",
      name: "Areg",
    },
    {
      avatar: "/carlo-pfp.jpg",
      color: "dark:bg-[#1803fc]",
      tagline: "Main developer",
      buttonText: "Youtube",
      buttonLink: "https://www.youtube.com/@CarloBear",
      avatarFallback: "CR",
      name: "Carlo",
    },
    {
      avatar: "/leon-pfp.jpg",
      color: "dark:bg-[#a90b0a]",
      tagline: "2nd developer",
      buttonText: "Youtube",
      buttonLink: "https://www.youtube.com/@1leon000",
      avatarFallback: "LE",
      name: "Leon",
    },
    {
      avatar: "/veyshal-pfp.jpg",
      color: "dark:bg-purple-700",
      tagline: "Founder",
      buttonText: "Youtube",
      buttonLink: "https://www.youtube.com/@veymations",
      avatarFallback: "VE",
      name: "Veyshal",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center w-full">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center">
          <GlitchText size="normal" text="About Us" className="mt-14" />
          <h3 className="mt-3 text-xl">Here is our team who develops Ocean+</h3>
          <div className="mb-10 mt-4 flex flex-col items-center justify-center space-y-6 md:mt-6 md:flex-row md:space-x-2 md:space-y-0 lg:space-x-14">
            {personInfo.map((person) => (
              <CompleteAboutUs
                key={person.name}
                color={person.color}
                avatar={person.avatar}
                avatarFallback={person.avatarFallback}
                name={person.name}
                tagline={person.tagline}
                buttonLink={person.buttonLink}
                buttonText={person.buttonText}
              />
            ))}
          </div>
          <GithubLanguages />
        </div>
        <Footer />
      </div>
    </>
  );
}
