import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCL Consultores - Soluciones Empresariales",
  description: "SCL Consultores ofrece soluciones integrales de consultoría empresarial, servicios profesionales y productos innovadores para el crecimiento de su negocio.",
  keywords: ["consultoría", "servicios empresariales", "SCL", "soluciones corporativas"],
  authors: [{ name: "SCL Consultores" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "SCL Consultores - Soluciones Empresariales",
    description: "Soluciones integrales de consultoría empresarial",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
