import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-black dark:text-white">Gallery, Previews and Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {["/portfolio-1.jpg", "/portfolio-2.jpg", "/portfolio-3.jpg"].map((src, i) => (
          <Card
            key={i}
            className="overflow-hidden bg-background/50 border-border hover:shadow-lg hover:shadow-green-900/20 dark:hover:shadow-green-400/20 transition-shadow"
          >
            <CardContent className="p-0">
              <img src={src} alt={`Portfolio ${i}`} className="w-full h-full object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
