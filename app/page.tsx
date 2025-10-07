import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Portfolio from "@/components/sections/Portfolio";
import Testimonial from "@/components/sections/Testimonial";
import Brands from "@/components/sections/Brands";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <Hero />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Testimonial />
      <Brands />
      <CTA />
    </main>
  );
}
