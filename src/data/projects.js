// src/data/projects.js
// This is your project data. Think of it like a list of cards.
// Each {} is one project. Add as many as you like!

const projects = [
  {
    id: 1,                          // unique number for each project
    title: "The Birchwood Residence",
    category: "Residential",
    year: "2024",
    description:
      "A family home reimagined with warm oak joinery, linen drapery, and a muted palette of ivory, sage, and terracotta. The goal was a living room that feels like a deep breath — unhurried and full of light.",
    // Put image files in the public/images/ folder
    // Then reference them like this:
    images: [
      "/images/birchwood-1.jpg",
      "/images/birchwood-2.jpg",
      "/images/birchwood-3.png",
    ],
    // This is the image shown on the project card
    coverImage: "/images/birchwood-1.jpg",
  },
  {
    id: 2,
    title: "Studio Noor",
    category: "Commercial",
    year: "2024",
    description:
      "A wellness studio designed around the ritual of arrival. Rattan screens, warm concrete floors, and a palette drawn from desert sand and aged brass.",
    images: [
      "/images/noor-1.jpg",
      "/images/noor-2.jpg",
      "/images/noor-3.jpg",
      "/images/noor-4.jpg",
    ],
    coverImage: "/images/noor-1.jpg",
  },
  {
    id: 3,
    title: "Maadhyam Café",
    category: "Hospitality",
    year: "2023",
    description:
      "A café concept celebrating Nepali craft — handmade ceramic tiles, woven jute pendant lights, and raw plaster walls where slowing down feels natural.",
    images: [
      "/images/cafe-1.jpg",
      "/images/cafe-2.jpg",
      "/images/cafe-3.jpg",
    ],
    coverImage: "/images/cafe-1.jpg",
  },
  // ✅ To add a new project, copy the block above and paste it here
  // Make sure to give it a new id number!
];

export default projects;