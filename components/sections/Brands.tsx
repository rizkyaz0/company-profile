"use client";

import { Skeleton } from "@/components/ui/skeleton";
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
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl font-bold text-foreground">
        Trusted by Global Brands
      </h2>

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
    </section>
  );
}
