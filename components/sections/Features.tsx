import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle2, Sparkles, Layers } from "lucide-react"; // contoh ikon

export default function Features() {
  const items = [
    { title: "Crafted for SaaS Business", desc: "Designed specifically for modern SaaS startups.", icon: Sparkles },
    { title: "High-quality Design", desc: "Clean, modern, and professional design system.", icon: Layers },
    { title: "UI Components and Pages", desc: "Prebuilt sections to speed up development.", icon: CheckCircle2 },
    { title: "All Essential Integrations", desc: "Database, Auth, Stripe, Sanity, and more.", icon: Sparkles },
    { title: "Fully Customizable", desc: "Easily adapt to your brand identity.", icon: Layers },
    { title: "Regular Updates", desc: "Always stay up-to-date with modern tools.", icon: CheckCircle2 },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-6 py-20 text-center">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-primary font-medium tracking-wide uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Essential Integrations with Modern Design
        </h2>
        <p className="mt-4 text-muted-foreground">
          Powerful features that help you build and scale your business with ease.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((f, i) => {
          const Icon = f.icon;
          return (
            <Card
              key={i}
              className="p-6 text-left hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                {/* Ikon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This feature automatically adapts to light and dark themes.
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
