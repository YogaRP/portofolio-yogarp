"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useGetAvailibility } from "@/features/availibility/hooks";
import { useGetMePublic } from "@/features/user/hooks";
import { Badge } from "../../ui/badge";
import ContactMeForm from "../../forms/contact-me-form";

export function ContactSection() {
  const { data: availData, isError: isAvailError } = useGetAvailibility();
  const { data: mePublicData, isError: isMePublicError } = useGetMePublic();

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing ideas? Let&apos;s connect
            🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing opportunities, interesting
                projects, or just having a chat about technology and
                development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={
                      !isMePublicError && mePublicData?.data?.email !== ""
                        ? `mailto:${mePublicData?.data?.email}`
                        : "mailto:yogarizky51@gmail.com"
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {!isMePublicError && mePublicData?.data?.email !== ""
                      ? mePublicData?.data?.email
                      : "yogarizky51@gmail.com"}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href={
                      !isMePublicError && mePublicData?.data?.phone !== ""
                        ? `tel:${mePublicData?.data?.phone}`
                        : "tel:+6281234567890"
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {!isMePublicError && mePublicData?.data?.phone !== ""
                      ? mePublicData?.data?.phone
                      : "+6287870548126"}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground max-w-2/3">
                    {!isAvailError && availData?.data?.jobLocation
                      ? availData?.data?.jobLocation
                      : "Bogor, Depok, Jakarta, Indonesia (Remote Friendly)"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={
                    !isMePublicError && mePublicData?.data?.github !== ""
                      ? mePublicData?.data?.github
                      : "https://github.com/YogaRP"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href={
                    !isMePublicError && mePublicData?.data?.linkedin !== ""
                      ? mePublicData?.data?.linkedin
                      : "https://linkedin.com/in/yogarizkyputra"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-4">
                <Badge
                  variant="outline"
                  className="mb-6 justify-start h-auto whitespace-normal"
                >
                  {!isAvailError && availData?.data?.acceptJob
                    ? "Available for new opportunities"
                    : "Currently not available for new opportunities, but feel free to reach out!"}
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactMeForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
