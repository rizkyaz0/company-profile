"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const items = [
  { 
    src: "/portfolio-1.jpg", 
    title: "Creative Dashboard", 
    description: "Modern analytics dashboard with real-time data visualization and intuitive user interface.",
    category: "Web App",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    src: "/portfolio-2.jpg", 
    title: "Mobile App Design", 
    description: "Cross-platform mobile application with beautiful UI and seamless user experience.",
    category: "Mobile App",
    tech: ["React Native", "Expo", "Firebase"],
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    src: "/portfolio-3.jpg", 
    title: "E-commerce Platform", 
    description: "Full-featured online store with payment integration and inventory management.",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    src: "/portfolio-1.jpg", 
    title: "SaaS Landing Page", 
    description: "High-converting landing page for SaaS product with modern design and animations.",
    category: "Landing Page",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    gradient: "from-orange-500 to-red-500"
  },
  { 
    src: "/portfolio-2.jpg", 
    title: "Admin Panel", 
    description: "Comprehensive admin panel with advanced features and responsive design.",
    category: "Admin Panel",
    tech: ["Vue.js", "Vuetify", "Node.js"],
    gradient: "from-indigo-500 to-blue-500"
  },
  { 
    src: "/portfolio-3.jpg", 
    title: "Portfolio Website", 
    description: "Personal portfolio website with modern design and smooth animations.",
    category: "Portfolio",
    tech: ["Next.js", "Framer Motion", "Sanity"],
    gradient: "from-violet-500 to-purple-500"
  },
];

export default function Portfolio({ detailed = false }: { detailed?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto max-w-7xl px-6">
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
            <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Our Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Showcasing our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              best work
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise 
            in modern web development and design.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <PortfolioCard index={i} item={item} detailed={detailed} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
  detailed,
}: {
  item: { 
    src: string; 
    title: string; 
    description: string;
    category: string;
    tech: string[];
    gradient: string;
  };
  index: number;
  detailed: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="group relative overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-0 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
            <CardContent className="p-0 relative">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Image Container */}
              <div className="relative overflow-hidden">
                {(loading || error) && <Skeleton className="w-full h-64" />}

                {!error && (
                  <Image
                    width={400}
                    height={300}
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setError(true);
                      setLoading(false);
                    }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-300">
                    {item.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0">
        <div className="relative">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </DialogTitle>
              <div className="flex items-center gap-4 mt-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-sm font-medium text-blue-700 dark:text-blue-300">
                  {item.category}
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </DialogHeader>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image */}
              <div className="relative">
                {error ? (
                  <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-xl">
                    <p className="text-gray-500 dark:text-gray-400">Image not available</p>
                  </div>
                ) : (
                  <Image 
                    width={600} 
                    height={400} 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-80 object-cover rounded-xl" 
                  />
                )}
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 text-sm font-medium text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Responsive design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Modern UI/UX
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Performance optimized
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Cross-platform compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center w-full">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Project completed in 2024
              </div>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}