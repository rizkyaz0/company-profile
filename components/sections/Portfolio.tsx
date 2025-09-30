"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const items = [
  { src: "/portfolio-1.jpg", title: "Creative Dashboard" },
  { src: "/portfolio-2.jpg", title: "Mobile App Design" },
  { src: "/portfolio-3.jpg", title: "E-commerce Platform" },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-foreground">Gallery, Previews and Portfolio</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
        Beberapa hasil karya terbaik kami dengan kualitas desain modern dan profesional.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {items.map((item, i) => (
          <PortfolioCard key={i} index={i} item={item} />
        ))}
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PortfolioCard({ item, index }: { item: { src: string; title: string }; index: number }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Dialog>
      {/* trigger (click opens modal) */}
      <DialogTrigger asChild>
        <Card className="overflow-hidden bg-background/50 border-border hover:shadow-xl transition group cursor-pointer">
          <CardContent className="p-0 relative">
            {/* skeleton */}
            {(loading || error) && <Skeleton className="w-full h-60 rounded-md" />}

            {/* image */}
            {!error && (
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 ${loading ? "opacity-0" : "opacity-100"}`}
                onLoad={() => setLoading(false)}
                onError={() => {
                  setError(true);
                  setLoading(false);
                }}
              />
            )}

            {/* overlay saat hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      {/* DialogContent (lightbox) - --- PERHATIAN: tambahkan DialogHeader+DialogTitle agar error hilang */}
      <DialogContent className="max-w-4xl p-6">
        {/* Jika kamu ingin title terlihat, hilangkan className="sr-only" */}
        <DialogHeader>
          <DialogTitle className="sr-only">{item.title}</DialogTitle>
        </DialogHeader>

        {/* image preview */}
        <div className="w-full">
          {/* fallback kalau gambar error */}
          {error ? (
            <div className="w-full h-80 bg-muted flex items-center justify-center rounded-md">
              <p className="text-muted-foreground">Image not available</p>
            </div>
          ) : (
            <img src={item.src} alt={item.title} className="w-full h-auto rounded-md" />
          )}
        </div>

        <DialogFooter>
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-muted-foreground">{item.title}</p>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
