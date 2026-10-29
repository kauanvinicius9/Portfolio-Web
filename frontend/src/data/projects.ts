import type { Projects } from "../types/projects";

import revivaVelasImage from "../assets/revivavelas-image.webp";
import stockImage from "../assets/stock-image.webp";
import flowStreamEngineImage from "../assets/flowstream-engine-image.webp";
import invexImage from "../assets/invex-image.webp";
import onBoardingImage from "../assets/onboarding-image.webp";

export const projects: Projects[] = [
  {
    id: 1,
    title: "Reviva Velas",
    description: "Site de velas aromatizadas, difusores e home-sprays",
    link: "https://github.com/kauanvinicius9/CandleShop",
    efficiency: "Desenvolvido para alavancar vendas reais de produtos artesanais utilizando uma vitrine web responsiva e intuitiva",
    skills: "Angular - Docker - TypeScript",
    image: revivaVelasImage
  },
  {
    id: 2,
    title: "Stock",
    description: "Gerenciamento de estoque de ferramentas",
    link: "https://github.com/kauanvinicius9/Stock",
    efficiency: "Desenvolvido para acompanhamento de estoque virtual de ferramentas, diminuindo a desorganização e a ausência de controle",
    skills: "Next - FastAPI - SQLite",
    image: stockImage
  },
  {
    id: 3,
    title: "FlowStream Engine",
    description: "Motor automatizado de máquinas de estado",
    link: "https://github.com/kauanvinicius9/FlowStream-Engine",
    efficiency: "Desenvolvido para diminuir o controle manual de fluxos complexos usando condicionais extensas. O sistema passa de um estado a outro apenas quando regras estritas forem atendidas",
    skills: "React - Django - SQLite",
    image: flowStreamEngineImage
  },
  {
    id: 4,
    title: "Invex",
    description: "Simulador de investimentos e acompanhamento financeiro",
    link: "https://github.com/kauanvinicius9/Invex",
    efficiency: "Desenvolvido para simulação real de investimentos com visualizações de dados através de dashboards, podendo melhorar sua organização financeira de forma eficiênte e simples. Seu investimento pode ser calculado com juros simples ou compostos",
    skills: "Nuxt - TypeScript",
    image: invexImage
  },
  {
    id: 5,
    title: "OnBoarding",
    description: "Sistema de treinamentos para novos funcionários",
    link: "https://github.com/kauanvinicius9/OnBoarding",
    efficiency: "Desenvolvido para solucionar problemas de conclusão e engajamento por parte do novos funcionários",
    skills: "Angular - Spring-Boot - Docker - PostgreSQL",
    image: onBoardingImage
  },
];
