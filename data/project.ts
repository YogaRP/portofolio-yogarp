type Project = {
  title: string;
  slug: string;
  purpose: string;
  stack: string[];
  tags: string[];
  image?: string;
  link?: string; // Single project link
};

export const mainFeaturedProjects: Project[] = [
  {
    title: "Membuat Ulang Website Sosial Media Threads - As A Programmer",
    slug: "membuat-ulang-website-sosial-media-threads",
    purpose:
      "Projek ini membuat ulang website sosial media Threads dengan dilengkapi fitur pesan atau percakapan pribadi menggunakan socket.io dari Youtube As A Programmer",
    stack: ["ReactJS", "ExpressJS", "MongoDB", "Socket.io", "Tailwind CSS"],
    tags: ["web", "fullstack", "chat app"],
    image: "/images/threads-asap.png",
    // link: "https://threads-clone-demo.vercel.app", // No hosting available
  },
  {
    title: "Mempelajari AuthJS atau NextAuthJs 5 pada NextJS - CodeWithAntonio",
    slug: "mempelajari-authjs-atau-nextauthjs-5-pada-nextjs",
    purpose:
      "Projek ini merupakan projek mendalami bagaimana NextAuthJs 5 atau AuthJs bekerja pada Next JS dari Youtube CodeWithAntonio",
    stack: ["Next.js"],
    tags: ["auth", "learning"],
    image: "/images/authjs-cwa.png", // No image available
    // link: "https://ezzi-work-demo.vercel.app", // No hosting available
  },
  {
    title: "React Todo App Tutorial",
    slug: "react-todo-tutorial",
    purpose:
      "Learning project to understand React hooks, state management, and modern React patterns through building a task management application.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tags: ["tutorial", "learning", "react"],
    // image: "/images/projects/react-todo-preview.jpg",
    link: "https://react-todo-tutorial.vercel.app",
  },
];
