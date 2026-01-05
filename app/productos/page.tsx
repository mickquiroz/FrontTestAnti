import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function Productos() {
    return (
        <>
            <TopBar />
            <Navbar />
            <main>
                <SectionContainer background="light">
                    <div className="text-center py-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
                            Productos
                        </h1>
                        <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto">
                            Página en construcción. Aquí encontrarás nuestros productos y soluciones empresariales.
                        </p>
                    </div>
                </SectionContainer>
            </main>
            <Footer />
        </>
    );
}
