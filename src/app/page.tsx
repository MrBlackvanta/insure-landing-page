import { Footer, Header } from "@/components/layout";
import { Difference, Hero, HowWeWork } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <Difference />
        <HowWeWork />
      </main>

      <Footer />
    </>
  );
}
