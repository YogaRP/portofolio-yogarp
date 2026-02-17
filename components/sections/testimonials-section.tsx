"use client";

import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Yoga's technical expertise and attention to detail made our project a huge success. His ability to understand complex requirements and translate them into clean, scalable code is exceptional.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "Tech Startup",
    avatar: "/images/testimonials/sarah.jpg",
    initials: "SC",
  },
  {
    content:
      "Working with Yoga was fantastic. He not only delivered on time but also suggested improvements that significantly enhanced our platform's performance and user experience.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Education Technology Company",
    avatar: "/images/testimonials/michael.jpg",
    initials: "MR",
  },
  {
    content:
      "Yoga's problem-solving skills are outstanding. He quickly identified bottlenecks in our system and implemented solutions that improved our efficiency by 60%. Highly recommended!",
    author: "Lisa Wang",
    role: "Operations Director",
    company: "HR Solutions Provider",
    avatar: "/images/testimonials/lisa.jpg",
    initials: "LW",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I&apos;ve had the pleasure to work
            with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${testimonial.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                    <blockquote className="text-sm leading-relaxed mb-6">
                      &quot;{testimonial.content}&quot;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback className="text-xs font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Want to work together?{" "}
            <a
              href="#contact"
              className="text-foreground hover:underline font-medium"
            >
              Let&apos;s start a conversation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
