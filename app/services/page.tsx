"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const services = {
  web: {
    title: "Web Development",
    description:
      "Kami menyediakan layanan pengembangan website modern, responsif, dan scalable menggunakan teknologi terbaru seperti React, Next.js, dan Tailwind CSS.",
    features: [
      "Desain UI/UX modern dan responsif",
      "Optimasi performa dan SEO",
      "Integrasi API dan backend",
      "Maintenance dan support berkelanjutan",
    ],
    cta: {
      text: "Pelajari lebih lanjut",
      href: "/services/web",
    },
  },
  app: {
    title: "App Development",
    description:
      "Kami mengembangkan aplikasi mobile untuk platform iOS dan Android dengan fokus pada performa, UX/UI yang menarik, dan integrasi backend yang handal.",
    features: [
      "Aplikasi native dan cross-platform",
      "Desain interaktif dan user-friendly",
      "Integrasi push notification",
      "Deployment dan monitoring aplikasi",
    ],
    cta: {
      text: "Pelajari lebih lanjut",
      href: "/services/app",
    },
  },
  it: {
    title: "IT Consulting",
    description:
      "Layanan konsultasi IT kami membantu bisnis Anda mengoptimalkan infrastruktur, keamanan, dan strategi teknologi untuk mencapai tujuan bisnis.",
    features: [
      "Audit dan evaluasi sistem IT",
      "Strategi keamanan siber",
      "Optimasi infrastruktur IT",
      "Pelatihan dan workshop karyawan",
    ],
    cta: {
      text: "Pelajari lebih lanjut",
      href: "/services/it",
    },
  },
};

export default function ServicesPage() {
  const [tab, setTab] = useState("web");

  return (
    <main className="container mx-auto px-6 py-12 max-w-5xl">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-foreground">
        Our Services
      </h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Pilih layanan yang sesuai dengan kebutuhan bisnis Anda dan lihat detailnya di bawah.
      </p>

      <Tabs value={tab} onValueChange={setTab} className="space-y-8">
        <TabsList className="grid grid-cols-3 rounded-lg bg-muted p-1">
          {Object.entries(services).map(([key, service]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-center text-base font-semibold"
            >
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(services).map(([key, service]) => (
          <TabsContent
            key={key}
            value={key}
            className="bg-background rounded-lg p-8 shadow-lg"
          >
            <AnimatePresence mode="wait">
              {tab === key && (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-8 text-foreground">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <Link href={service.cta.href}>
                    <Button variant="outline">{service.cta.text}</Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
