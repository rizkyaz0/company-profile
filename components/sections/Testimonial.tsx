"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Musharof Chy",
    role: "Founder @ Pinjro",
    img: "/client.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Sarah Connor",
    role: "CEO @ Techverse",
    img: "/client2.jpg",
    quote:
      "Suspendisse potenti. Nulla facilisi. Aenean egestas, leo at feugiat luctus.",
  },
  {
    name: "John Doe",
    role: "CTO @ NextCorp",
    img: "/client3.jpg",
    quote:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
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
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-foreground">
        What Our Clients Say About Us
      </h2>

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
    </section>
  );
}
