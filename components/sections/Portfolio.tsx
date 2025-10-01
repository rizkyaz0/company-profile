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
import Image from "next/image";

const items = [
  { src: "/portfolio-1.jpg", title: "Creative Dashboard", description: "Dashboard with modern UI/UX" },
  { src: "/portfolio-2.jpg", title: "Mobile App Design", description: "Cross-platform mobile app" },
  { src: "/portfolio-3.jpg", title: "E-commerce Platform", description: "Full-featured online store" },
];

// Terima props dengan destructuring, dan beri tipe opsional jika pakai TypeScript
export default function Portfolio({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-foreground">Gallery, Previews and Portfolio</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
        Beberapa hasil karya terbaik kami dengan kualitas desain modern dan profesional.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {items.map((item, i) => (
          <PortfolioCard key={i} index={i} item={item} detailed={detailed} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index,
  detailed,
}: {
  item: { src: string; title: string; description?: string };
  index: number;
  detailed: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden bg-background/50 border-border hover:shadow-xl transition group cursor-pointer">
          <CardContent className="p-0 relative">
            {(loading || error) && <Skeleton className="w-full h-60 rounded-md" />}

            {!error && (
              <Image
                width={100}
                height={100}
                src={item.src}
                alt={item.title}
                className={`w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoading(false)}
                onError={() => {
                  setError(true);
                  setLoading(false);
                }}
              />
            )}

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center px-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              {detailed && item.description && (
                <p className="mt-2 text-sm text-white">{item.description}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>

        <div className="w-full">
          {error ? (
            <div className="w-full h-80 bg-muted flex items-center justify-center rounded-md">
              <p className="text-muted-foreground">Image not available</p>
            </div>
          ) : (
            <Image width={10} height={10} src={item.src} alt={item.title} className="w-full h-auto rounded-md" />
          )}
        </div>

        {detailed && item.description && (
          <p className="mt-4 text-center text-muted-foreground">{item.description}</p>
        )}

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