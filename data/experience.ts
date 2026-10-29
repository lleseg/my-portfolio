export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights?: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    company: "Within3",
    role: "Full Stack Developer",
    period: "Oct 2022 – Sep 2026",
    description:
      "Started on an application built on a PERN stack with GraphQL. When its frontend was decommissioned, it became a backend-only service supporting the main Ruby on Rails product, and I became my team's technical reference for integrating it with the main product, within an organization of 3 teams (one per application).",
    highlights: [
      "Led development of a Node.js application that acts as a connector node and single source of truth for data shared between the company's two main applications.",
      "Designed and implemented an end-to-end data-collection feature, one of the product's most widely adopted, integrating all three main applications and an AWS sync pipeline (Lambda, SQS, Step Functions).",
      "Designed a 6+ filter system for the product's home page, letting users access metrics, reports, and charts segmented by the data relevant to their role.",
      "Modernized the UI of an entire product section, unifying the visual design across the platform.",
    ],
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
      "AWS",
      "Material-UI",
      "React Testing Library",
      "Jest",
      "Git",
    ],
  },
  {
    company: "Clevertech",
    role: "Full Stack Developer Sr.",
    period: "Jun 2021 – May 2022",
    highlights: [
      "Designed and developed a proof-of-concept application for a major fintech client, meeting 100% of the requirements plus extra additions suggested on my own initiative.",
      "Improved the applications page of the internal hiring tool, adding relevant information and search filters that made finding candidates significantly easier.",
      "Investigated and refactored critical job-pipeline tasks for an e-commerce client, achieving 100% code coverage.",
      "Built a report that significantly cut the time the internal culture team spent tracking down people with missing feedback.",
    ],
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
    company: "Independent",
    role: "Frontend Developer",
    period: "May 2021 – Dec 2023",
    description:
      "React.js frontend development for various independent projects, including an e-learning site with self-paced courses and a personal-data validation app for a special-events ticketing site.",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Whyline",
    role: "Full Stack Developer Sr.",
    period: "Apr 2021 – Jun 2021",
    description:
      "A second stint with the company, focused on implementing appointment-manager features for a healthcare-sector client.",
    highlights: [
      "Led development of 2 of the 4 key features requested by the client, delivering a successful implementation with excellent feedback.",
    ],
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
    highlights: [
      "Led, as lead developer, the build from scratch of a marketplace for independent clothing designers with direct Shopify store integration via a proprietary app.",
      "Managed the development team, guiding technical and architectural decisions, and handling mentoring and code review.",
      "Analyzed requirements and coordinated with product and design teams to ensure a successful Shopify integration.",
    ],
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
      "Developed backend and frontend functionality for two products, a queue-management system and an appointment manager, for various clients, including the City of Buenos Aires government. Also contributed to redesigning the queue-management system into a standalone product.",
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
      "Completed the refactoring of the company's ERP system and led the analysis and implementation of improvements based on interviews with key users.",
    skills: ["C#", "MySQL", "Angular", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Jun 2016 – Jul 2018",
    description:
      "Developed and maintained 2 of the 9 REST APIs of a financial orchestrator application, processing a combined volume of over 10 million records. Also built Lambda functions integrated with S3, SNS, Step Functions, and Redshift, self-training in AWS to help accelerate the team's adoption.",
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
      "Took ownership of 3 of the project's largest financial data conversions, on a database of approximately 30 million records, developing SQL scripts, stored procedures, and SSIS jobs.",
    skills: ["SQL Server", "SSIS", "AWS"],
  },
  {
    company: "Fulcrum SRL",
    role: "IT System Administrator",
    period: "Jan 2007 – Sep 2014",
    description:
      "PC technical support, server backup management, and CRM database maintenance.",
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
