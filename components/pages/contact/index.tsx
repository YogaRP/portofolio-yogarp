"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactMeForm from "@/components/forms/contact-me-form";
import { useGetAvailibility } from "@/features/availibility/hooks";
import { useGetMePublic } from "@/features/user/hooks";

const Contacts = () => {
  const { data: availData, isError: isAvailError } = useGetAvailibility();
  const { data: mePublicData, isError: isMePublicError } = useGetMePublic();

  const availability = [
    {
      type: "Accept Opportunity",
      status:
        !isAvailError && availData?.data?.acceptJob ? "Yes" : "Not Available",
      color:
        "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
    },
    ...(!isAvailError && availData?.data?.acceptJob
      ? [
          {
            type: "Job Contract",
            status:
              !isAvailError && availData?.data?.jobContract
                ? availData?.data?.jobContract === "ALL"
                  ? "Full-time, Freelance"
                  : availData?.data?.jobContract
                : "Not Available",
            color:
              "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
          },
          {
            type: "Job Type",
            status:
              !isAvailError && availData?.data?.jobType
                ? availData?.data?.jobType === "ALL"
                  ? "On-site, Remote"
                  : availData?.data?.jobType
                : "Not Available",
            color:
              "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
          },
        ]
      : []),
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 border-b">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Work Together
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;d love to hear about
              your project and discuss how we can collaborate to create
              something amazing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8 sticky top-24"
              >
                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                        <p className="text-muted-foreground">
                          {!isAvailError && availData?.data?.jobLocation
                            ? availData?.data?.jobLocation
                            : "Bogor, Depok, Jakarta, Indonesia (Remote Friendly)"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">
                          {!isMePublicError &&
                          mePublicData?.data?.responseTime !== ""
                            ? mePublicData?.data?.responseTime
                            : "48 Hour"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {availability.map((item) => (
                      <div
                        key={item.type}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{item.type}</span>
                        <Badge className={item.color}>{item.status}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <a
                        href={
                          !isMePublicError && mePublicData?.data?.github !== ""
                            ? mePublicData?.data?.github
                            : "https://github.com/YogaRP"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <div>
                          <p className="font-medium">GitHub</p>
                          <p className="text-xs text-muted-foreground">
                            {!isMePublicError &&
                            mePublicData?.data?.github !== ""
                              ? mePublicData?.data?.github.split("/").pop()
                              : "YogaRP"}
                          </p>
                        </div>
                      </a>
                      <a
                        href={
                          !isMePublicError &&
                          mePublicData?.data?.linkedin !== ""
                            ? mePublicData?.data?.linkedin
                            : "https://linkedin.com/in/yogarizkyputra"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-xs text-muted-foreground">
                            {!isMePublicError &&
                            mePublicData?.data?.linkedin !== ""
                              ? mePublicData?.data?.linkedin.split("/").pop()
                              : "yogarizkyputra"}
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-fit">
                  <CardHeader>
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
                    <p className="text-muted-foreground">
                      Tell me about your project, and I&apos;ll get back to you
                      with ideas and next steps.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactMeForm />

                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <h4 className="font-medium mb-2">What happens next?</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          I&apos;ll review your message within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <Coffee className="w-4 h-4" />
                          We can schedule a call to discuss details
                        </li>
                        <li className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          I&apos;ll provide a detailed proposal and timeline
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers to common questions about working together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What&apos;s your typical project timeline?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Most projects take 4-8 weeks depending on complexity. Simple
                    websites can be completed in 1-4 weeks, while complex
                    applications may take 2-3 months.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Do you work with international clients?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I work with clients worldwide and am comfortable
                    with different time zones. All communication is in English.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What technologies do you specialize in?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I specialize in modern web technologies: Next.js, React,
                    TypeScript, Node.js, and various databases. I&apos;m always
                    learning new technologies based on project needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Do you provide ongoing support?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! I offer maintenance packages and ongoing support for
                    all projects. This includes updates, bug fixes, and feature
                    additions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
