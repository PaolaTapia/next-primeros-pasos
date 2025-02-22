import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Pao's About Page",
    description: "SEO description for the about page.",
    keywords: ["About Page", "About", "Page", "información"],
};

export default function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
        </div>
    );
}