'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Galatea TKL F12/F13",
    description: "Many keycaps profile with one board.",
    image_url: "/galatea-pcb/galatea_pcb.jpg",
    list_feature: [
      "Soldered",
      "Available in FR4- 1.6mm, Black & Red",
      "Available in CEM-3 - 1.2mm, Yellow",
      "Available in CEM-3 - 1.0mm, Blue"
    ],
    segment: [
      {
        title: 'Compatible Keyboard',
        description: 'F1-8X PLATELESS, F1-8X, F1-88, FROG TKL WK , FROG TKL WKL. When using the FR-4 / CEM-3 Coreless Solderable (Raw) product, the JST connector must be removed to use Plateless.',
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={''}/>
  );
}