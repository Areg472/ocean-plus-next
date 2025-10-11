import React from "react";
import {createMetadata} from "@/lib/metadata";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Ocean+ - Movies";
    const description = `The Ocean+ movies page!`;
    const pathname = `/movies`;

    return createMetadata({ title, description, pathname });
}

export default function Movies() {
    return (
        <main>
            <h1>hi</h1>
        </main>
    );
}