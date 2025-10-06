"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Linkedin, Twitter, Users } from "lucide-react";
import Image from "next/image";

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
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto max-w-7xl px-6">
        {/* Modern Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-200/20 dark:border-gray-700/20 shadow-2xl overflow-hidden"
        >
          {/* Card Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-purple-900/50" />
          
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 mb-6"
              >
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Our Team
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Meet our creative
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  team members
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                The talented individuals behind our success, bringing creativity, 
                expertise, and passion to every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {members.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TeamCard member={m} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
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
            <Image
            width={40}
            height={40}
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
