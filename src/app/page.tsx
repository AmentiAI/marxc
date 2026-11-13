import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Opening } from "@/components/Opening";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <Gallery />
        <Opening />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
