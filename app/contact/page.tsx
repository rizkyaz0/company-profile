"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />

      {/* 💫 Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-[120px] rounded-full" />

      <div className="relative container mx-auto max-w-3xl px-6">
        {/* 🌟 Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_80px_-10px_rgba(147,51,234,0.25)] transition-all duration-700"
        >
          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            {/* 💬 Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 mb-6"
              >
                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Get in Touch
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Let’s Talk
                </span>
              </h1>

              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Have a project in mind or just want to say hello?  
                Fill out the form below and I’ll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* ✅ Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-green-100/70 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl border border-green-200/30 dark:border-green-800/30 backdrop-blur-md text-center"
              >
                Thank you for your message! We’ll get back to you soon.
              </motion.div>
            )}

            {/* 📬 Contact Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-500" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 
                          focus:border-blue-500/40 dark:focus:border-blue-400/40 
                          hover:border-blue-400/40 dark:hover:border-blue-500/40 
                          transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-500" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 
                          focus:border-blue-500/40 dark:focus:border-blue-400/40 
                          hover:border-blue-400/40 dark:hover:border-blue-500/40 
                          transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-blue-500" /> Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="min-h-[150px] bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 
                          focus:border-blue-500/40 dark:focus:border-blue-400/40 
                          hover:border-blue-400/40 dark:hover:border-blue-500/40 
                          transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-xl 
                      hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] 
                      transition-all duration-500"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
