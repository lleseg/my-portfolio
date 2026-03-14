export interface Skill {
  name: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

const highlighted = new Set([
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "GraphQL",
  "Ruby on Rails",
  "SQL",
  "HTML",
  "CSS",
]);

function s(name: string): Skill {
  return { name, highlighted: highlighted.has(name) };
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Ruby", "C#", "VB.NET", "SQL"].map(s),
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "AngularJS",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material-UI",
    ].map(s),
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Ruby on Rails",
      "Express",
      "GraphQL",
      "Apollo",
      "REST",
      "Serverless",
    ].map(s),
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "SSIS"].map(s),
  },
  {
    name: "Tools & Cloud",
    skills: [
      "AWS",
      "Git",
      "Jest",
      "React Testing Library",
      "JIRA",
      "Azure DevOps",
    ].map(s),
  },
];
