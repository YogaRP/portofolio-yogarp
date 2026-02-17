type Experiences = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experiences[] = [
  {
    title: "Full-Stack Web Developer",
    company: "PT Elang System Solusi Indonesia",
    period: "September 2024 - January 2025",
    location: "Depok, Indonesia",
    description:
      "Building, developing, and maintaining web-based applications on both the frontend and backend using JavaScript-based technologies.",
    achievements: [
      "Fixed and optimized the performance of existing web applications, leading to increased user satisfaction",
      "Improved user interfaces and user experiences across multiple projects",
      "Provided technical guidance to junior developers and conducted code reviews",
      "Delivered solutions to various challenges related to web development",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Chakra UI",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Freelance Projects",
    period: "August 2024 - December 2024",
    location: "Remote",
    description:
      "Developed and integrated web-based application interfaces using Vue.js.",
    achievements: [
      "Collaborated with UI/UX designers to implement responsive and visually engaging designs",
      "Worked closely with backend developers to integrate APIs and backend services",
      "Optimized web applications for performance, speed, and scalability",
    ],
    technologies: ["Vue.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Frontend Web Developer",
    company: "Kemenristek/BRIN",
    period: "February 2021 - May 2021",
    location: "Jakarta, Indonesia",
    description: "Built internal web-based applications using CodeIgniter 3.",
    achievements: [
      "Developed frontend features based on user requirements",
      "Collaborated with the backend team to integrate APIs",
    ],
    technologies: ["Codeigniter 3", "PHP", "Bootstrap"],
  },
];
