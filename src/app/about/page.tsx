import {createMetadata} from "@/lib/metadata";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Ocean+ Movies";
    const description = `The Ocean+ about page!`;
    const pathname = `/about`;

    return createMetadata({ title, description, pathname });
}

export default function About() {
    return <div>About</div>
}