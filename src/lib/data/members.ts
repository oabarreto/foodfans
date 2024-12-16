export interface Member {
  name: string;
  description?: string;
  imageUrl: string;
  isExclusive?: boolean;
  rating?: number;
  verified?: boolean;
}

export const members: Member[] = [
  {
    name: "Belas Frutas",
    imageUrl: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    name: "Sanduich Pesto",
    imageUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  },
  {
    name: "Ice Good Cream",
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    isExclusive: true,
    description: "Lorem Ipsum is simply dummy text of the printing",
    verified: true,
    //rating: 5,
  },
  {
    name: "Guaca-Mole",
    imageUrl: "https://images.unsplash.com/photo-1484980972926-edee96e0960d",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    verified: true,
  },
  {
    name: "Delicious Juice",
    imageUrl: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909",
    //rating: 4,
  },
  {
    name: "Avocattito Abacato",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
  },
  {
    name: "Pancake Bolada",
    imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759",
  },
  {
    name: "Potato Frita",
    imageUrl: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f",
    description: "Po, essa deu fome, né?",
  },
  {
    name: "Salmonzin Do Jacquin",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  },
  {
    name: "Chilli",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9",
  },
  {
    name: "BreakFast in Paris",
    imageUrl: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90",
  },
  {
    name: "Modern Abstract Canvas",
    description: "Bold contemporary artwork perfect for modern spaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isExclusive: true,
    rating: 4,
    verified: true,
  },
  {
    name: "Ceramic Sculpture",
    description: "Handcrafted ceramic piece with unique textures.",
    imageUrl:
      "https://images.unsplash.com/photo-1730630906214-1256b57d65b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //rating: 5,
  },
  {
    name: "Nature Photography",
    description: "Stunning landscape captured in perfect detail.",
    imageUrl:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80",
    verified: true,
  },
  {
    name: "Minimalist Sculpture",
    description: "Clean lines and pure forms in marble.",
    imageUrl:
      "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80",
    isExclusive: true,
  },
  {
    name: "Vintage Collection",
    description: "Curated vintage pieces with historical significance.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1733760125610-3b5ebc834623?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    verified: true,
  },
  {
    name: "Contemporary Portrait",
    description: "Modern take on classical portraiture.",
    imageUrl:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80",
    //rating: 5,
  },
  {
    name: "Abstract Photography",
    description: "Experimental photography pushing boundaries.",
    imageUrl:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80",
    isExclusive: true,
    rating: 4,
  },
  {
    name: "Metal Wall Art",
    description: "Industrial-inspired metalwork for modern spaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80",
    verified: true,
  },
  {
    name: "Digital Art Print",
    description: "Limited edition digital artwork.",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
    isExclusive: true,
    //rating: 5,
  },
  {
    name: "Glass Sculpture",
    description: "Handblown glass with mesmerizing patterns.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
    verified: true,
  },
  {
    name: "Textile Art",
    description: "Contemporary fiber art installation.",
    imageUrl:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80",
    isExclusive: true,
    rating: 4,
  },
  {
    name: "Bronze Sculpture",
    description: "Classical bronze casting with modern themes.",
    imageUrl:
      "https://images.unsplash.com/photo-1734014937750-75729631681e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //rating: 5,
    verified: true,
  },
  {
    name: "Urban Photography",
    description: "Street photography capturing city life.",
    imageUrl:
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80",
    isExclusive: true,
  },
  {
    name: "Watercolor Series",
    description: "Delicate watercolor paintings of nature.",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    rating: 4,
  },
  {
    name: "Mixed Media Collage",
    description: "Innovative combination of materials and techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80",
    verified: true,
    //rating: 5,
  },
];
