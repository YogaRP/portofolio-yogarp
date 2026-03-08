"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CertificateCard } from "@/components/ui/certificate-card";
import { ArrowRight, Award } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Achievement } from "@/lib/types";
import { motion } from "framer-motion";

const CertificateSection = () => {
  // Filter only certificates and get the latest 3
  const certificates = (achievements as Achievement[])
    .filter((item) => item.type === "certificate")
    .sort(
      (a, b) => new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <section id="certificates" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Certificates & Achievements
              </h2>
            </div>
            <p className="text-muted-foreground">
              Professional certifications and recognitions
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.slug} achievement={certificate} />
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Award className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>No certificates available yet.</p>
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button asChild size="lg">
          <Link href="/achievements">
            View All Certificates & Achievements
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CertificateSection;
