"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Linkedin, Twitter } from "lucide-react";

const members = [
  {
    name: "Rizky Adi Zaelani",
    role: "CEO",
    img: "/team-1.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jemse Kemorun",
    role: "CTO",
    img: "/team-2.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Avi Pestarica",
    role: "Designer",
    img: "/team-3.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-foreground">
        Meet With Our Creative Team
      </h2>
      <p className="text-muted-foreground mt-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {members.map((m, i) => (
          <TeamCard key={i} member={m} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    img?: string;
    socials: { twitter?: string; linkedin?: string; github?: string };
  };
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Card className="bg-background/50 border-border hover:shadow-lg hover:shadow-purple-900/20 dark:hover:shadow-purple-400/20 transition-shadow group overflow-hidden">
      <CardHeader>
        {/* Foto + overlay */}
        <div className="relative mb-4 w-full h-56 rounded-lg overflow-hidden">
          {loading || error ? (
            <Skeleton className="w-full h-full rounded-lg" />
          ) : null}
          {!error && (
            <img
              src={member.img || ""}
              alt={member.name}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setLoading(false)}
              onError={() => {
                setError(true);
                setLoading(false);
              }}
            />
          )}

          {/* Overlay social icons */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <CardTitle>{member.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{member.role}</p>
      </CardContent>
    </Card>
  );
}
