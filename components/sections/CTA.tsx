"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Cta() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="container mx-auto px-6 py-20 flex justify-center items-center"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <motion.div
        className="relative w-full max-w-2xl rounded-2xl bg-background border border-border shadow-xl overflow-hidden"
        animate={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.25), transparent 80%)`,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <div className="relative z-10 p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of others using our platform to grow faster.
          </p>
          <button className="mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition">
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
}
