'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "LUMINKEY75v2 75% Custom Mechanical Keyboard",
    description: "All-Encompassing Optimization",
    image_url: "/luminkey75v2/luminkey75v2-cover.jpg",
    list_feature: [
      "ANSI/ISO layout - 81 Keys, 75% Keyboard",
      "Three Connectivities: Bluetooth 5.0/2.4Ghz/Type-C",
      "VIA Programmable",
      "Hotswappable with 3-pin & 5-pin Mechanical Switches",
      "Horizontal roller wheel, CNC Case Aluminimun",
      "Hotswappable PCB, South-facing LEDs"
    ],
    segment: [
      {
        title: 'Horizontal Scroll Wheel',
        description: 'The upgraded scroll wheel mounting component features sharp angles with a contrasting color design. It incorporates custom bearings inside, optimizing the scrolling experience.',
        image: '/luminkey75v2/segment-1-75v2.jpg'
      },
      {
        title: 'Quick-release design',
        description: 'It features a bead-based quick-release structure, allowing users to easily swap out different cushioning options to find the sound that best suits their preferences. The new silicone bead gasket points and custom silicone—every invisible internal detail is meticulously designed.',
        image: '/luminkey75v2/segment-2-75v2.jpg'
      },
      {
        title: 'Ergonomics Design',
        description: 'Ergonomic design with minimalist lines, featuring a 7° tilt typing angle and original height PBT keycaps, allowing you to type with ease.',
        image: '/luminkey75v2/segment-3-75v2.jpg'
      },
      {
        title: 'Personalized weight',
        description: 'The brand-new bottom case design features a beveled stainless steel matte PVD weight, high-gloss textured circular decorative blocks, with 4 different shell color options available. Additional materials and decorative blocks, along with weight replacements, will be announced in the future.',
        image: '/luminkey75v2/segment-4-75v2.jpg'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={''}/>
  );
}
