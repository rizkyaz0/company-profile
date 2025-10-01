"use client"
// app/projects/page.tsx
import { motion } from "framer-motion";
import PortfolioSection from "@/components/sections/Portfolio";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <PortfolioSection detailed />
    </motion.main>
  );
}