"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Musharof Chy",
    role: "Founder @ Pinjro",
    img: "/client.jpg",
    quote:
      "Working with Saramlam has been an incredible experience. Their attention to detail and modern approach to web development exceeded our expectations.",
  },
  {
    name: "Sarah Connor",
    role: "CEO @ Techverse",
    img: "/client2.jpg",
    quote:
      "The team delivered a stunning website that perfectly represents our brand. The performance and user experience are outstanding.",
  },
  {
    name: "John Doe",
    role: "CTO @ NextCorp",
    img: "/client3.jpg",
    quote:
      "Professional, reliable, and innovative. Saramlam transformed our digital presence with cutting-edge technology and beautiful design.",
  },
];

export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [loading, setLoading] = useState(true);

  // 🚀 Autoplay effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5 detik

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative py-24 overflow-hidden rounded-2xl">
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
                <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Testimonials
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  What our clients
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  say about us
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hear from our satisfied clients who have experienced the difference 
                of working with our team.
              </p>
            </motion.div>

      {/* Carousel Wrapper */}
      <div className="relative mt-12">
        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                className="flex-[0_0_100%] md:flex-[0_0_80%] px-4"
                key={i}
              >
                <Card className="bg-background/50 border-border shadow-sm">
                  <CardContent className="flex flex-col items-center p-8">
                    {/* Avatar + Skeleton */}
                    <div className="flex-shrink-0 mb-6">
                      {loading && (
                        <Skeleton className="w-24 h-24 rounded-full" />
                      )}
                      <Image
                        width={100}
                        height={100}
                        src={t.img}
                        alt={t.name}
                        className={`w-24 h-24 rounded-full object-cover shadow ${
                          loading ? "hidden" : "block"
                        }`}
                        onLoad={() => setLoading(false)}
                      />
                    </div>

                    {/* Quote */}
                    <blockquote className="max-w-xl italic text-muted-foreground text-lg leading-relaxed">
                      “{t.quote}”
                    </blockquote>

                    {/* Client Info */}
                    <p className="mt-6 font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow hover:bg-background transition"
        >
          <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow hover:bg-background transition"
        >
          <ChevronRight className="w-5 h-5 text-black dark:text-white" />
        </button>
      </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
