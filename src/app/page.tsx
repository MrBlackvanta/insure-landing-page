import { Header } from "@/components/layout";
import { Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
