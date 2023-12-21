import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center">
        <Hero />
        <Story />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
