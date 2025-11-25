import { notFound } from "next/navigation";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../components/ui/table";
import {
  ExternalLink,
  FileText,
  Award,
  Star,
  Calendar,
  Building,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../../components/layout/navigation";
import { Footer } from "../../../components/layout/footer";

// For MVP, using static data
const achievements = {
  "aws-cloud-practitioner": {
    title: "AWS Certified Cloud Practitioner",
    slug: "aws-cloud-practitioner",
    type: "certificate" as const,
    issuer: "Amazon Web Services",
    issuedAt: "2024-06-15",
    credentialId: "AWS-CCP-2024-001",
    credentialUrl: "https://aws.amazon.com/verification/check-certification",
    skills: ["cloud", "networking", "cost-optimization", "security"],
    summary:
      "Foundation-level certification covering AWS services, security, and billing practices.",
    content: `
## Certification Overview

The AWS Certified Cloud Practitioner certification validates foundational, high-level understanding of AWS Cloud, services, and terminology. This certification is an excellent entry point to the AWS ecosystem and cloud computing in general.

## What I Learned

### Core AWS Services
- **Compute**: EC2, Lambda, Elastic Beanstalk
- **Storage**: S3, EBS, EFS, Glacier
- **Database**: RDS, DynamoDB, ElastiCache
- **Networking**: VPC, CloudFront, Route 53

### Security & Compliance
- **Shared Responsibility Model**: Understanding AWS vs. customer responsibilities
- **Identity & Access Management (IAM)**: Users, groups, roles, and policies
- **Compliance Programs**: SOC, PCI DSS, HIPAA compliance frameworks
- **Security Best Practices**: Multi-factor authentication, least privilege access

### Pricing & Billing
- **Pricing Models**: On-Demand, Reserved Instances, Spot Instances
- **Cost Optimization**: Right-sizing, monitoring, and cost allocation
- **Billing Tools**: Cost Explorer, Budgets, Cost and Usage Reports

## Preparation Strategy

My preparation approach included:

1. **AWS Training Materials**: Official AWS training courses and whitepapers
2. **Hands-on Practice**: Free tier exploration and lab exercises
3. **Practice Exams**: Multiple practice tests to identify knowledge gaps
4. **Real-world Application**: Applying concepts to personal projects

## Impact on My Work

This certification has enhanced my ability to:

- **Architect Cloud Solutions**: Design scalable, cost-effective cloud architectures
- **Security Best Practices**: Implement proper security measures in cloud deployments
- **Cost Management**: Optimize cloud spending through informed architectural decisions
- **Client Communication**: Speak confidently about cloud solutions with stakeholders

## Next Steps

Building on this foundation, I'm planning to pursue:

- **AWS Certified Developer Associate**: Deeper dive into development on AWS
- **AWS Certified Solutions Architect Associate**: Advanced architectural concepts
- **Specialty Certifications**: Security, Machine Learning, or DevOps focus areas

This certification represents my commitment to staying current with cloud technologies and providing value to clients and employers through modern, cloud-native solutions.
    `,
  },
};

const typeIcons = {
  certificate: FileText,
  award: Award,
  recognition: Star,
};

const typeColors = {
  certificate:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  award:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
  recognition:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400",
};

interface AchievementDetailPageProps {
  params: {
    slug: string;
  };
}

export default function AchievementDetailPage({
  params,
}: AchievementDetailPageProps) {
  const achievement = achievements[params.slug as keyof typeof achievements];

  if (!achievement) {
    notFound();
  }

  const IconComponent = typeIcons[achievement.type];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Breadcrumb */}
        <section className="py-6 px-6 lg:px-8 border-b">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/achievements">
                    Achievements
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{achievement.title}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Achievement Header */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm">
                <Link href="/achievements">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Achievements
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className={`${typeColors[achievement.type]} mb-4`}>
                  <IconComponent className="w-3 h-3 mr-1" />
                  {achievement.type.charAt(0).toUpperCase() +
                    achievement.type.slice(1)}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight">
                  {achievement.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  {achievement.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {achievement.credentialUrl && (
                  <Button asChild>
                    <a
                      href={achievement.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Details */}
        <section className="pb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: achievement.content
                            .replace(/\n/g, "<br>")
                            .replace(
                              /## /g,
                              '<h2 class="text-2xl font-bold mt-8 mb-4">'
                            )
                            .replace(
                              /### /g,
                              '<h3 class="text-xl font-semibold mt-6 mb-3">'
                            )
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(
                              /- \*\*(.*?)\*\*/g,
                              '<li class="ml-4"><strong>$1</strong>'
                            )
                            .replace(
                              /^\d+\. \*\*(.*?)\*\*/gm,
                              '<ol class="ml-4"><li><strong>$1</strong>'
                            ),
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Achievement Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Achievement Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Building className="w-4 h-4 inline mr-2" />
                            Issuer
                          </TableCell>
                          <TableCell>{achievement.issuer}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Issued Date
                          </TableCell>
                          <TableCell>
                            {new Date(achievement.issuedAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </TableCell>
                        </TableRow>
                        {achievement.credentialId && (
                          <TableRow>
                            <TableCell className="font-medium">
                              <FileText className="w-4 h-4 inline mr-2" />
                              Credential ID
                            </TableCell>
                            <TableCell className="font-mono text-sm">
                              {achievement.credentialId}
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Skills */}
                {achievement.skills && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Skills Validated
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how my certified expertise can help your projects.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all achievements
export function generateStaticParams() {
  return Object.keys(achievements).map((slug) => ({
    slug,
  }));
}
