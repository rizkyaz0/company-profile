import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground">
        Build Your Next Project with{" "}
        <span className="text-primary">Saramlam</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start building
        with modern UI and full dark mode support.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button size="lg" className="hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all">Get Started</Button>
        <Button size="lg" className="text-black dark:text-white hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
}
