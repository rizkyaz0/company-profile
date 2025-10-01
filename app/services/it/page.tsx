"use client"

import { motion } from "framer-motion";

export default function ITConsultingPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold mb-6">IT Consulting</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">
        Layanan konsultasi IT kami membantu bisnis Anda mengoptimalkan infrastruktur,
        keamanan, dan strategi teknologi untuk mencapai tujuan bisnis.
      </p>
      {/* Tambahkan detail layanan, studi kasus, atau testimonial */}
    </motion.main>
  );
}