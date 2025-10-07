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
      className=" mx-auto px-4 py-12 w-screen"
    >
      <AboutSection />
    </motion.main>
  );
}