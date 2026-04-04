export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "zenith",
    title: "Zenith",
    description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    longDescription: "Developed a decentralized music platform for artists to mint and sell NFTs with Solidity and IPFS, enabling transactions and faster monetization via Polygon. Implemented role-based access and interactive features like community hubs, increasing session duration substantially.",
    technologies: ["Solidity", "Polygon", "Ethereum", "IPFS", "Next.js", "TypeScript", "TailwindCSS", "Smart Contracts", "Web3.js", "Blockchain"],
    achievements: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
      "Implemented role-based access and interactive features like community hubs, increasing session duration by 65%",
      "Eliminated third-party dependencies and automated royalty payouts, reducing overhead and platform latency by 30%"
    ],
    image: "/images/projects/zenith/zenith.jpg",
    github: "https://github.com/achyut21/zenith",
    liveUrl: "https://devfolio.co/projects/zenith-202e",
    featured: true
  },
  {
    id: "pokearena",
    title: "PokeArena",
    description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    longDescription: "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs, enabling secure trading and battling with on-chain verified ownership and battle logic. Integrated Aptos wallet authentication for seamless trades with real-time feedback.",
    technologies: ["Move", "Aptos", "NFTs", "React", "TypeScript", "Node.js", "Express", "TailwindCSS", "Three.js", "MongoDB", "Blockchain"],
    achievements: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
      "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
      "Crafted a pixel art-inspired UI/UX using TailwindCSS and Three.js, improving user engagement by 60%"
    ],
    image: "/images/projects/pokearena/pokearena.jpg",
    github: "https://github.com/achyut21/pokearena",
    featured: true
  }
];

