type Achievements = {
  title: string
  slug: string
  type: string
  issuer: string
  issuedAt: string
  credentialId: string
  credentialUrl?: string
  skills: string[]
  summary: string
}

export const achievements : Achievements[] = [
  {
    title: " Optimalisasi performa React hingga migrasi ke Next.js bisa diselesaikan dalam satu kali pertemuan",
    slug: "optimalisasi-performa-react-nextjs",
    type: "certificate",
    issuer: "FastCampus",
    issuedAt: "2025-08",
    credentialId: "FCCT_CA099",
    skills: ["react", "next.js", "performance", "optimization", "lighthouse"],
    summary: "Understanding on how to do performance optimization using ReactJs and then migrate to Next.js"
  },
  {
    title: "UX UI Design Principles Compact (Theory + Figma Exercise)",
    slug: "ux-ui-design-principles-compact",
    type: "certificate",
    issuer: "Udemy",
    issuedAt: "2024-11",
    credentialId: "UC-283e9d37-020f-4892-ab01-45514266caa4",
    credentialUrl: "https://www.udemy.com/certificate/UC-283e9d37-020f-4892-ab01-45514266caa4/",
    skills: ["ux-design", "ui-design", "figma", "design-principles"],
    summary: "Understanding the fundamental principles of UX and UI design, along with best practices in design."
  },
  {
    title: "Full-Stack JavaScript Next JS Developer: Build Job Portal Website",
    slug: "fullstack-javascript-nextjs-developer",
    type: "certificate",
    issuer: "BuildWithAngga",
    issuedAt: "2023-11",
    credentialId: "TaaxRtCkL4",
    credentialUrl: "https://buildwithangga.com/kelas/certificate/full-stack-javascript-next-js-developer-build-job-portal-website?expires=1766494581&user_id=97727&signature=3954af1c1f842a5a097912926b133bd0c0e3cce1e137cec7c240b0cb5a3ab6c3",
    skills: ["next.js", "react", "performance", "seo"],
    summary: "Building a job portal web application using fullstack Next.js"
  }
]
