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
import { ExternalLink, Github, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../../components/layout/navigation";
import { Footer } from "../../../components/layout/footer";

// For MVP, using static data. In V2, this will come from our loaders
const projects = {
  "kerjahub-ai-interview": {
    title: "KerjaHub — AI Interview Simulation",
    slug: "kerjahub-ai-interview",
    summary:
      "Job-seeker platform with AI mock interviews, CV builder, and psychotest modules.",
    problem: "Candidates lack structured preparation tools for job interviews.",
    solution:
      "Built AI mock interview system, CV builder, and psychotest modules with personalized feedback.",
    result: "Simplified preparation flow and increased user engagement by 40%.",
    role: "Full-stack Developer",
    stack: ["Next.js", "Node.js", "MongoDB", "shadcn/ui", "OpenAI API"],
    startedAt: "2024-03",
    finishedAt: "2025-02",
    tags: ["edtech", "ai", "saas"],
    links: {
      demo: "https://kerjahub-demo.vercel.app",
      github: "https://github.com/yoga-rizky/kerjahub",
    },
    metrics: [
      { label: "User Engagement", value: "+40%" },
      { label: "Interview Success Rate", value: "+25%" },
    ],
    content: `
## Problem

Job seekers often struggle with interview preparation due to lack of structured practice tools. Traditional methods like mock interviews with friends or mentors are inconsistent and don't provide objective feedback. Many candidates fail interviews not due to lack of skills, but due to poor preparation and anxiety.

## Solution

I developed KerjaHub, a comprehensive platform that addresses these pain points through:

### AI-Powered Mock Interviews
- **Smart Question Generation**: AI generates role-specific interview questions based on job descriptions
- **Real-time Feedback**: Instant analysis of responses, body language, and speech patterns
- **Progress Tracking**: Detailed analytics showing improvement areas and strengths

### CV Builder with AI Optimization
- **ATS-Friendly Templates**: Industry-standard formats that pass applicant tracking systems
- **Content Suggestions**: AI-powered recommendations for improving CV content
- **Skills Matching**: Automatic alignment with job requirements

### Psychometric Testing Suite
- **Personality Assessment**: Comprehensive personality profiling for career guidance
- **Cognitive Tests**: Logic, reasoning, and problem-solving assessments
- **Custom Reports**: Detailed reports with actionable insights

## Technical Implementation

Built using modern technologies for scalability and performance:

- **Frontend**: Next.js with TypeScript for type safety and optimal performance
- **Backend**: Node.js with Express for robust API development
- **Database**: MongoDB for flexible data storage and quick iterations
- **AI Integration**: OpenAI GPT-4 for intelligent content generation and analysis
- **UI/UX**: shadcn/ui components for consistent, accessible design

## Results

The platform achieved significant user engagement and measurable impact:

- **40% increase** in user engagement compared to traditional preparation methods
- **25% improvement** in actual interview success rates among users
- **1000+ users** within the first 3 months of launch
- **4.8/5 star rating** based on user feedback

## Key Learnings

This project taught me valuable lessons about:

1. **AI Integration**: Balancing AI capabilities with human oversight for quality results
2. **User Experience**: Designing intuitive interfaces for high-stress use cases
3. **Performance Optimization**: Handling real-time AI processing without compromising UX
4. **Scalable Architecture**: Building systems that can handle rapid user growth

The project reinforced my passion for creating technology that has real impact on people's careers and lives.
    `,
  },
};

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

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
                  <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm">
                <Link href="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links?.demo && (
                  <Button asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  </Button>
                )}
                {project.links?.github && (
                  <Button asChild variant="outline">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
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
                          __html: project.content
                            .replace(/\n/g, "<br>")
                            .replace(/## /g, "<h2>")
                            .replace(/### /g, "<h3>")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(
                              /- \*\*(.*?)\*\*/g,
                              "<li><strong>$1</strong>"
                            ),
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <User className="w-4 h-4 inline mr-2" />
                            Role
                          </TableCell>
                          <TableCell>{project.role}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Timeline
                          </TableCell>
                          <TableCell>
                            {project.startedAt} -{" "}
                            {project.finishedAt || "Present"}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Tech Stack */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Metrics */}
                {project.metrics && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="text-center p-4 bg-muted rounded-lg"
                          >
                            <div className="text-2xl font-bold text-green-600">
                              {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
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
              Let's discuss how I can help bring your ideas to life.
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

// Generate static params for all projects
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
