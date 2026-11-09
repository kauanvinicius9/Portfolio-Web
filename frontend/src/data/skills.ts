import type { Skills } from "../types/skills";

const images = import.meta.glob<string>("../assets/skillsImages/*.svg", {
  eager: true,
  import: "default"
});

const getImage = (file: string): string => {
  const image = images[`../assets/skillsImages/${file}-image.svg`];
  if (!image) throw new Error(`Imagem não encontrada: ${file}-image.svg`);
  return image;
};

type SkillRow = [
  name: Skills["name"], 
  category: Skills["category"],
  file: string
];

const rows: SkillRow[] = [
  ["Spring-Boot", "Backend", "springboot"],
  ["MongoDB", "Dados", "mongodb"],
  ["VueJS", "Frontend", "vuejs"],
  ["NextJS", "Frontend", "nextjs"],
  ["NuxtJS", "Frontend", "nuxtjs"],
  ["PostgreSQL", "Dados", "postgresql"],
  ["HTML", "Frontend", "html"],
  ["CSS", "Frontend", "css"],
  ["Java", "Backend", "java"],
  ["ReactJS", "Frontend", "reactjs"],
  ["FastAPI", "Backend", "fastapi"],
  ["Python", "Backend", "python"],
  ["TypeScript", "Frontend", "typescript"],
  ["Django", "Backend", "django"],
  ["Docker", "Infraestrutura", "docker"],
  ["Bootstrap", "Frontend", "bootstrap"],
  ["JavaScript", "Frontend", "javascript"],
  ["Angular", "Frontend", "angular"],
  ["Prisma", "Backend", "prisma"],
  ["SCSS / SASS", "Frontend", "sass-scss"],
  ["TailwindCSS", "Frontend", "tailwind-css"],
  ["Terraform", "Infraestrutura", "terraform"],
  ["SQLServer", "Dados", "sqlserver"],
  ["MySQL", "Dados", "mysql"],
  ["Postman", "API Teste", "postman"],
  ["Canva", "Design", "canva"],
  ["Figma", "Design", "figma"],
  ["Docusaurus", "SSG", "docusaurus"],
];

export const skills: Skills[] = rows.map(([name, category, file], index) => ({
  id: index + 1,
  name,
  category,
  image: getImage(file),
}));
