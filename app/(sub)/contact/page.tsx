import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pao's Contact Page",
    description: "SEO description for the Contact Page.",
    keywords: ["Contact Page", "Contact", "Page"],
};

export default function ContactPage() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
        </div>
    );
}