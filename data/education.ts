type Education = {
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const education: Education[] = [
  {
    title: "Bachelor of Education (B.Ed.)/Sarjana Pendidikan (S1)",
    institution: "State University of Jakarta (Universitas Negeri Jakarta)",
    period: "2018 - 2023",
    location: "Jakarta, Indonesia",
    description:
      "Major: Computer and Informatics Engineering Education, Faculty: Engineering",
    achievements: [
      "Developed a QR Code–based digital signature website for the PTIK study program using Laravel as a final project (thesis)",
      "Graduated with a GPA of 3.72 / 4.00",
      "Actively participated in campus activities and student organizations; served as Head of Human Resource Development (PSDM) at BEM PTIK 2020",
    ],
  },
];
