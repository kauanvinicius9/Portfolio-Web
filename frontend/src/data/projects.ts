import type { Projects } from "../types/projects";

const images = import.meta.glob<string>("../assets/projectsImages/*.webp", {
  eager: true,
  import: "default"
});

const getImage = (file: string): string => {
  const image = images[`../assets/projectsImages/${file}-image.webp`];
  if (!image) throw new Error(`Imagem não encontrada: ${file}-image.webp`);
  return image;
};

type ProjectRow = [
  name: Projects["title"],
  description: Projects["description"],
  link: Projects["link"],
  efficiency: Projects["efficiency"],
  tools: Projects["tools"],
  file: string
]

const rows: ProjectRow[] = [
  ["Reviva Velas", "Site de velas aromatizadas, difusores e home-sprays", "https://github.com/kauanvinicius9/CandleShop", "Desenvolvido para alavancar vendas reais de produtos artesanais utilizando uma vitrine web responsiva e intuitiva. O site está em produção na Vercel indexado na Google Search Console", "Angular - Docker - TypeScript", "revivavelas"],
  ["Stock", "Gerenciamento de estoque de ferramentas", "https://github.com/kauanvinicius9/Stock", "Desenvolvido para acompanhamento de estoque virtual de ferramentas, diminuindo a desorganização e a ausência de controle", "Next - FastAPI - SQLite", "stock"],
  ["FlowStream Engine", "Motor automatizado de máquinas de estado", "https://github.com/kauanvinicius9/FlowStream-Engine", "Desenvolvido para diminuir o controle manual de fluxos complexos usando condicionais extensas. O sistema passa de um estado a outro apenas quando regras estritas forem atendidas", "React - Django - SQLite", "flowstream-engine"],
  ["Invex", "Simulador de investimentos e acompanhamento financeiro", "https://github.com/kauanvinicius9/Invex", "Desenvolvido para simulação real de investimentos com visualizações de dados através de dashboards, podendo melhorar sua organização financeira de forma eficiênte e simples. Seu investimento pode ser calculado com juros simples ou compostos", "Nuxt - TypeScript", "invex"],
  ["Zuri", "Inteligência Artificial Copiloto - Extensão", "https://github.com/kauanvinicius9/Zuri", "Desenvolvido para auxiliar o usuário oferecendo opções de resumo do site em que ele estiver. Uma extensão do Chrome podendo guardar de forma segura, textos selecionados em uma página web para sincronizar instantaneamente com a abertura do painel lateral", "React - TypeScript", "zuri"],
];

export const projects: Projects[] = rows.map(([title, description, link, efficiency, tools, file], index) => ({
  id: index + 1,
  title,
  description,
  link,
  efficiency,
  tools,
  image: getImage(file),
}))