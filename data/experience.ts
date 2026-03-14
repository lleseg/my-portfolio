export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    company: "Within3",
    role: "Full Stack Developer",
    period: "Oct 2022 – Present",
    description:
      "Worked on the Discover app, which helps bring together the work done by pharmaceuticals, researchers, and healthcare professionals. Worked on integration apps between the main platform and different APIs.",
    skills: [
      "Ruby on Rails",
      "Ruby",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "GraphQL",
      "Apollo GraphQL",
      "PostgreSQL",
      "Material-UI",
      "React Testing Library",
      "Jest",
      "Git",
    ],
  },
  {
    company: "Independent",
    role: "Frontend Developer",
    period: "May 2021 – Present",
    description:
      "Developed React.js frontends for various projects, including an e-learning site with self-paced courses and a personal data validation app for a special events ticketing platform.",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Clevertech",
    role: "Full Stack Developer Sr.",
    period: "Jun 2021 – May 2022",
    description:
      "Worked across the full stack using modern JavaScript technologies and cloud services.",
    skills: [
      "PostgreSQL",
      "Express",
      "React.js",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Next.js",
      "TypeScript",
      "AWS",
    ],
  },
  {
    company: "Whyline",
    role: "Full Stack Developer Sr.",
    period: "Apr 2021 – Jun 2021",
    description: "Worked on queue management and appointment management products.",
    skills: [
      "MongoDB",
      "Express",
      "Angular",
      "Node.js",
      "TypeScript",
      "Jest",
      "AWS",
    ],
  },
  {
    company: "SouthernMinds",
    role: "Full Stack Developer Sr.",
    period: "Dec 2019 – Mar 2021",
    description:
      "Led the development from scratch of a marketplace for independent clothing designers, integrating directly with Shopify stores. Responsible for requirements analysis, development, and cross-team coordination.",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Azure DevOps",
    ],
  },
  {
    company: "Whyline",
    role: "Full Stack Developer SSr.",
    period: "Aug 2018 – Nov 2019",
    description:
      "Worked on a queue management system and an appointment manager. Contributed to high-impact features for key clients with positive outcomes.",
    skills: [
      "MongoDB",
      "Express",
      "Angular",
      "Node.js",
      "TypeScript",
      "Jest",
      "AWS",
    ],
  },
  {
    company: "Terragene",
    role: "Systems Analyst",
    period: "Jul 2018 – Aug 2018",
    description:
      "Performed code refactoring of an ERP system, interviewed key users, and analyzed, developed, and implemented improvements. Delivered complex reports for various stakeholders.",
    skills: ["C#", "MySQL", "Angular", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Jun 2016 – Jun 2018",
    description:
      "Developed back-end and front-end features for a client management and executive contracts system. Built and maintained two REST APIs handling financial statistics and economic indicators, and developed AWS Lambda functions integrated with S3, SNS, Step Functions, and Redshift.",
    skills: [
      "VB.NET",
      "ASP.NET",
      "SQL Server",
      "AngularJS",
      "TypeScript",
      "JavaScript",
      "AWS",
      "Serverless",
    ],
  },
  {
    company: "Accenture",
    role: "Application Development Associate",
    period: "Sep 2014 – May 2016",
    description:
      "Maintained MS SQL Server databases and developed SQL scripts for large-scale data conversions. Led 3 of the largest financial data conversions in the project with high-quality outcomes.",
    skills: ["SQL Server", "SSIS", "AWS"],
  },
  {
    company: "Fulcrum SRL",
    role: "IT System Administrator",
    period: "Jan 2007 – Sep 2014",
    description:
      "Technical service of company PCs (preventive and corrective), server backup management, and CRM database maintenance. Analyzed budgets for hardware acquisitions and produced technology reports.",
    skills: ["PC Hardware", "Networking", "CRM", "SQL"],
  },
  {
    company: "Servicios Hidráulicos S.A.",
    role: "PC Support Technician",
    period: "Jan 2005 – Dec 2013",
    description:
      "Reassembled and maintained all company PCs. Built the company network from scratch and managed all hardware budgets and acquisitions.",
    skills: ["PC Hardware", "Networking"],
  },
];
