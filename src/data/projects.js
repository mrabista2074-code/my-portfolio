// src/data/projects.js
// Rich project data for the editorial slide-based portfolio

const projects = [
  {
    id: 1,
    title: "MetLife",
    subtitle: "Commercial Project",
    category: "Office",
    year: "2025",
    location: "Baluwatar, Kathmandu",
    software: "Sketchup 25.0.634, Enscape 4.7.0.57",
    client: "MetLife",
    materials: ["Slatted Wood Ceilings", "Terrazzo Finishes", "Blue Upholstery", "Indoor Planters"],
    objective: "To design a vibrant and welcoming corporate reception that reflects MetLife's brand identity while providing a comfortable waiting area for clients.",
    style: "Modern Corporate with warm wooden accents, dynamic ceiling elements, and branded color highlights.",
    designAreas: [
      ["Reception Desk", "Client Lounge"],
      ["Branding Wall", "Planter Partitions"],
    ],
    description: "A dynamic corporate reception space designed for MetLife, balancing professional branding with inviting warmth.",
    fullDescription: "This office reception project for MetLife focuses on creating an impactful first impression. The design utilizes an expansive slatted wood ceiling to guide the eye toward the illuminated branding wall. A custom terrazzo-style reception desk is paired with vibrant artwork and comfortable blue lounge seating, perfectly integrating the company's brand colors into a warm, modern architectural space.",
    coverImage: "/images/metlife.png",
    images: [],
    pdfs: [
      { 
        url: "/PDF/Conceptual_3D_Views 2025.09.25 rev-7 (1).pdf",
        headerTitle: "Rendered Images"
      },
      { 
        url: "/PDF/AS-BUILT JOINERY DRAWING.pdf",
        headerTitle: "Furniture Details"
      }
    ],
  },

  {
    id: 2,
    title: "Tangal Residence",
    subtitle: "Client Project",
    category: "Residential",
    year: "2024",
    location: "Jhamsikhel, Lalitpur",
    area: "1,150 sq. ft.",
    client: "Suraksha Pandey",
    materials: ["Handwoven Rattan", "Desert Sand Plaster", "Aged Brass", "Travertine Stone"],
    software: "Sketchup 25.0.634, Enscape 4.7.0.57, V-Ray 7.10.01",
    objective: "To design a modern residential space that balances functional daily living with elegant, comfortable aesthetics.",
    style: "A blend of contemporary design and cozy warmth, utilizing natural light and high-quality finishes to create a welcoming home environment.",
    designAreas: [
      ["Living Room", "Master Bedroom"],
      ["Kitchen", "etc."],
    ],
    description: "A modern residential project focused on creating a warm, functional, and elegant living space.",
    fullDescription: "The Tangal Residence project involved the complete interior design of a modern home. The focus was on creating a seamless flow between the living room, kitchen, and dining areas, while ensuring the master bedroom served as a comfortable private retreat.",
    coverImage: "/images/tangal.png",
    images: [],
    pdfs: [
      { 
        url: "/PDF/SURAKSHA PANDEY RENDERS 2026.3.6.pdf",
        headerTitle: "Rendered Images"
      }
    ],
  },
  {
    id: 3,
    title: "Midea",
    subtitle: "Collaborative Project",
    category: "Commercial",
    year: "2025",
    location: "Lazimpat, Kathmandu",
    software: "Sketchup 25.0.634, Enscape 4.7.0.57",
    client: "Midea",
    materials: ["White Acrylic Solid Surface", "Brushed Aluminum", "LED Backlighting", "Glass"],
    objective: "To design a modern and interactive showroom experience that highlights Midea's innovative appliance solutions, creating a professional and welcoming environment for clients.",
    style: "Futuristic corporate minimalism characterized by sleek white and blue branding elements, dynamic architectural curves, and bright, clean display zones.",
    designAreas: [
      ["Showroom Area", "Office Area"],
    ],
    description: "A sleek, modern corporate showroom designed to showcase Midea's innovative appliance solutions.",
    fullDescription: "This project involved designing an engaging and highly functional showroom for Midea. The design utilizes dynamic, curved architectural elements and the brand's signature blue and white color palette to create a futuristic, professional environment.",
    coverImage: "/images/midea.jpg",
    images: [],
    pdfs: [
      {
        url: "/PDF/Midea.pdf",
        headerTitle: "Rendered Images"
      },
      {
        url: "/PDF/MIDEA 1ST FLOOR FURNITURE DETAIL(CONSTRUCTION DRAWING).pdf",
        headerTitle: "Construction Drawing"
      }
    ],
  },

  {
    id: 4,
    title: "Jaquar",
    subtitle: "Office Project",
    category: "Office",
    year: "2026",
    location: "Kathmandu",
    software: "Sketchup 25.0.634, Enscape 4.7.0.57",
    client: "Academic Concept",
    materials: ["Wood Slat Panels", "Textured Plaster", "Matte White Surfacing", "LED Ambient Lighting"],
    objective: "To design a professional and welcoming modern office space that emphasizes brand identity and creates a calming, structured environment.",
    style: "Modern corporate minimalism featuring elegant wood slat detailing, soft ambient lighting, and neutral earth tones.",
    designAreas: [
      ["Reception Desk", "Waiting Lounge"],
      ["Branding Wall", "Staff Workstations"],
    ],
    description: "A sleek, modern corporate office reception designed to convey professionalism and calm.",
    fullDescription: "The Jaquar office project focuses on the critical first impression of the reception area. The design incorporates a bespoke curved reception desk and an illuminated logo branding wall against textured plaster. Warmth is introduced through vertical wood slat panels and a comfortable waiting lounge, balancing corporate identity with an inviting, modern aesthetic.",
    coverImage: "/images/jaquar.jpg",
    pdf: "/PDF/Jaquar 3D RENDERS.pdf",
    images: [],
  },
  {
    id: 5,
    title: "Multipurpose Hall",
    subtitle: "Internship Project",
    category: "Internship Project",
    year: "2024",
    location: "Kumaltar, Lalitpur",
    software: "Sketchup 25.0.634, Enscape 4.7.0.57",
    client: "Studio A",
    materials: ["Polished Concrete", "Teak Wood", "Matte Black Steel", "Textured Glass"],
    objective: "To design a state-of-the-art multipurpose auditorium that integrates acoustic excellence with modern geometric aesthetics for immersive presentations and events.",
    style: "Contemporary geometric with high-tech integration. Featuring dark acoustic paneling, striking LED ambient lighting, and sleek modern seating.",
    designAreas: [
      ["Main Auditorium", "Stage Area"],
    ],
    description: "An internship collaboration designing a vibrant cafe integrated beneath serene residential lofts.",
    fullDescription: "During my internship, I assisted in the spatial planning and material selection for this dual-purpose project. The ground floor cafe features an energetic, industrial vibe with black steel and polished concrete, while the upper lofts use warm teak wood and textured glass for a softer residential feel.",
    coverImage: "/images/cover.jpg",
    pdf: "/PDF/Whole project khumaltar.pdf",
    images: [],
  },
];

export default projects;