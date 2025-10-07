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
      className="w-screen mx-auto px-4 py-12 rounded-2xl"
    >
      <PortfolioSection detailed />
    </motion.main>
  );
}