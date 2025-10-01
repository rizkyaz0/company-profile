"use client"
// app/about/page.tsx
import { motion } from "framer-motion";
import AboutSection from "@/components/sections/About";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Company</h1>
      <AboutSection />
      <section className="mt-12 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Our company has been a leader in the industry for over 10 years,
          providing innovative solutions and exceptional service to our clients.
        </p>
        <p>
          We specialize in delivering high-quality web, app, and IT consulting
          services tailored to meet the unique needs of each customer.
        </p>
        <p>
          Our team is composed of experienced professionals dedicated to
          excellence and continuous improvement.
        </p>
      </section>
    </motion.main>
  );
}