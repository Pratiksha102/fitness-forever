import "@/styles/globals.css";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground antialiased">
        <Header />
        <main className="container mx-auto px-4 py-8  bg-black">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
