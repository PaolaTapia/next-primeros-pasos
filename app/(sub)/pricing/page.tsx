import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pao's Pricing Page",
    description: "SEO description for the Pricing Page.",
    keywords: ["Pricing Page", "Pricing", "Page"],
};

export default function PricingPage() {
    return (
        <div>
            <h1>Pricing Page</h1>
            <p>This is the pricing page.</p>
        </div>
    );
}