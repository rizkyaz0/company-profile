"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2 } from "lucide-react";
import Image from "next/image";

const brands = [
  { name: "uldeck", img: "/logo-black.png" },
  { name: "tailadmin", img: "/file.svg" },
  { name: "graygrids", img: "/globe.svg" },
  { name: "lineicons", img: "/next.svg" },
  { name: "plainadmin", img: "/vercel.svg" },
];

// ✅ duplikat list agar terlihat infinite
const loopBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto max-w-7xl px-6">
        {/* Modern Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-200/20 dark:border-gray-700/20 shadow-2xl overflow-hidden"
        >
          {/* Card Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-purple-900/50" />
          
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 mb-6"
              >
                <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Trusted Partners
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Trusted by global
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  brands worldwide
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We're proud to work with industry leaders who trust us to deliver 
                exceptional digital experiences.
              </p>
            </motion.div>

      <div className="relative overflow-hidden mt-12">
        <div className="flex gap-12 animate-scroll">
          {loopBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              {brand.img ? (
                <Image
                  width={100}
                  height={40}
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <Skeleton className="w-24 h-10 rounded" />
              )}
            </div>
          ))}
        </div>
      </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
