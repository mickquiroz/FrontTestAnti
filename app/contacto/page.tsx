import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";

export default function Contacto() {
    return (
        <>
            <TopBar />
            <Navbar />
            <main>
                <SectionContainer background="light">
                    <div className="text-center py-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
                            Contacto
                        </h1>
                        <p className="text-lg text-[var(--color-gray)] max-w-3xl mx-auto mb-8">
                            Página en construcción. Aquí encontrarás nuestro formulario de contacto y ubicación.
                        </p>
                        <div className="max-w-md mx-auto text-left space-y-4">
                            <p className="text-[var(--color-gray)]">
                                <strong className="text-[var(--color-primary)]">Email:</strong> contacto@sclconsultores.com
                            </p>
                            <p className="text-[var(--color-gray)]">
                                <strong className="text-[var(--color-primary)]">Teléfono:</strong> +56 2 2345 6789
                            </p>
                            <p className="text-[var(--color-gray)]">
                                <strong className="text-[var(--color-primary)]">Dirección:</strong> Av. Providencia 1234, Santiago, Chile
                            </p>
                        </div>
                    </div>
                </SectionContainer>
            </main>
            <Footer />
        </>
    );
}
