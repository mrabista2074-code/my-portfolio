// src/data/projects.js
// Rich project data for the interior design portfolio

const projects = [
  {
    id: 1,
    title: "The Birchwood Residence",
    category: "Residential",
    year: "2024",
    location: "Baluwatar, Kathmandu",
    area: "2,400 sq. ft.",
    client: "The Shrestha Family",
    materials: ["Warm White Oak", "Organic Linen", "Terracotta Tiles", "Polished Concrete"],
    description: "A sanctuary designed for unhurried living. Reimagined with bespoke warm oak joinery, natural linen drapery, and a serene, light-filled layout.",
    fullDescription: "The Birchwood Residence was conceived as an escape from the city's pulse. I stripped away heavy partitions to allow natural light to wash across the rooms throughout the day. Custom floor-to-ceiling oak storage units conceal utilities while providing warm texture. Handpicked linen curtains soften the light, and a curated palette of ivory, sage, and terracotta evokes a grounding, earthy energy. Every corner invites pause and quiet reflection.",
    coverImage: "/images/birchwood-1.jpg",
    images: [
      "/images/birchwood-1.jpg",
      "/images/birchwood-2.jpg",
      "/images/birchwood-3.png",
    ],
  },
  {
    id: 2,
    title: "Studio Noor",
    category: "Commercial",
    year: "2024",
    location: "Jhamsikhel, Lalitpur",
    area: "1,150 sq. ft.",
    client: "Noor Wellness Co.",
    materials: ["Handwoven Rattan", "Desert Sand Plaster", "Aged Brass", "Travertine Stone"],
    description: "A sensory wellness studio centered around the ritual of arrival, visual quietude, and tactile earthy textures.",
    fullDescription: "For Studio Noor, the challenge was creating a functional workspace that doubles as a retreat. The entry features a curved wabi-sabi reception area made of sand-textured plaster. Rattan partition screens create privacy without blocking the flow of light. Travertine details add ancient weight, while aged brass lighting fixtures offer a warm, golden glow. The resulting environment engages all senses, encouraging deep breaths and slow movement.",
    coverImage: "/images/noor-1.png",
    images: [
      "/images/noor-1.png",
      "/images/noor-2.png",
    ],
  },
  {
    id: 3,
    title: "Maadhyam Café",
    category: "Hospitality",
    year: "2023",
    location: "Lazimpat, Kathmandu",
    area: "1,600 sq. ft.",
    client: "Maadhyam Collective",
    materials: ["Handmade Ceramic Tiles", "Reclaimed Sal Wood", "Woven Jute", "Earthy Clay Plaster"],
    description: "A specialty café celebrating Nepali craftsmanship, featuring custom pottery, woven jute lights, and natural clay finishes.",
    fullDescription: "Maadhyam Café is an homage to local craftsmanship. I collaborated with artisans from Bhaktapur for custom handmade red-clay tiles and potters for unique tablewares. The walls are finished in raw local clay plaster which breathes naturally and regulates humidity. Overhanging woven jute pendant lights cast organic, textured shadows across tables made from reclaimed Sal wood. It is a space where coffee, craft, and conversations sit in slow harmony.",
    coverImage: "/images/cafe-1.png",
    images: [
      "/images/cafe-1.png",
      "/images/cafe-2.png",
    ],
  },
];

export default projects;