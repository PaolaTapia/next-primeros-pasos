import { Navbar } from "@/components";

export default function SubLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col item-center p-24">
                <span className="text-lg">Hola</span>
                {children}
            </main>
        </>
    );
}
