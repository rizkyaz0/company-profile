"use client"

import { motion } from "framer-motion";

export default function AppDevelopmentPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold mb-6">App Development</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">
        Kami mengembangkan aplikasi mobile untuk platform iOS dan Android dengan
        fokus pada performa, UX/UI yang menarik, dan integrasi backend yang handal.
      </p>
      {/* Tambahkan detail layanan, fitur, atau portfolio terkait */}
    </motion.main>
  );
}