import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  
  export default function Features() {
    const items = [
      { title: "Crafted for SaaS Business", desc: "Lorem ipsum dolor sit amet." },
      { title: "High-quality Design", desc: "Lorem ipsum dolor sit amet." },
      { title: "UI Components and Pages", desc: "Lorem ipsum dolor sit amet." },
      { title: "All Essential Integrations", desc: "Lorem ipsum dolor sit amet." },
      { title: "Fully Customizable", desc: "Lorem ipsum dolor sit amet." },
      { title: "Regular Updates", desc: "Lorem ipsum dolor sit amet." },
    ];
  
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Essential Integrations with Modern Design
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {items.map((f, i) => (
            <Card
              key={i}
              className="hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-shadow"
            >
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fitur ini akan otomatis mengikuti tema terang/gelap.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  