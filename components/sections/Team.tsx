import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const members = [
  { name: "Olivia Andrium", role: "CEO", img: "/team-1.jpg" },
  { name: "Jemse Kemorun", role: "CTO", img: "/team-2.jpg" },
  { name: "Avi Pestarica", role: "Designer", img: "/team-3.jpg" },
];

export default function Team() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-black dark:text-white">Meet With Our Creative Team</h2>
      <p className="text-gray-700 dark:text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {members.map((m, i) => (
          <Card
            key={i}
            className="bg-background/50 border-border hover:shadow-lg hover:shadow-purple-900/20 dark:hover:shadow-purple-400/20 transition-shadow"
          >
            <CardHeader>
              <img src={m.img} alt={m.name} className="rounded-lg mb-4" />
              <CardTitle>{m.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{m.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
