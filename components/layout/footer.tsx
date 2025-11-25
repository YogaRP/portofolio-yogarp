import { Separator } from "../ui/separator";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Yoga Rizky Putra. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Built with Next.js + shadcn/ui + TypeScript + TanStack Query
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Achievements
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <Separator className="mt-8" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            Passionate about building scalable digital solutions with modern web
            technologies.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yoga-rizky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yoga-rizky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@yoga-rizky.dev"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
