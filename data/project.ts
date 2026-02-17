type Project = {
  title: string;
  slug: string;
  purpose: string;
  stack: string[];
  tags: string[];
  image?: string;
  link?: string;
};

export const mainFeaturedProjects: Project[] = [
  {
    title: "Recreating the Threads Social Media Website – As A Programmer",
    slug: "recreating-threads",
    purpose:
      "This project recreates the Threads social media website, complete with private messaging or chat features using Socket.IO, based on the As A Programmer YouTube channel.",
    stack: ["ReactJS", "ExpressJS", "MongoDB", "Socket.io", "Tailwind CSS"],
    tags: ["web", "fullstack", "chat app"],
    image: "/images/threads-asap.png",
    // link: "https://threads-clone-demo.vercel.app", // No hosting available
  },
  {
    title: "Learning AuthJS or NextAuth.js 5 in Next.js – CodeWithAntonio",
    slug: "authjs-or-nextauthjs-5-on-nextjs",
    purpose:
      "This project focuses on deepening the understanding of how NextAuth.js 5 (Auth.js) works in Next.js, based on the CodeWithAntonio YouTube channel.",
    stack: ["Next.js"],
    tags: ["auth", "learning"],
    image: "/images/authjs-cwa.png", // No image available
    // link: "https://ezzi-work-demo.vercel.app", // No hosting available
  },
  {
    title: "EZZI School - School Management",
    slug: "ezzi-school-management-school",
    purpose:
      "A comprehensive school management application featuring student, teacher, class, and school management.",
    stack: ["ReactJS", "ExpressJS", "MongoDB", "Chakra UI"],
    tags: ["edutech", "school management", "fullstack"],
    image: "/images/ezzi-school.png",
    link: "https://dash.iskool.id",
  },
];
