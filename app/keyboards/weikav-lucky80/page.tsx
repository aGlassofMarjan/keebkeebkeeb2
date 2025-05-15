'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Weikav Lucky80",
    description: "Wireless TKL Gaming Keyboard",
    image_url: "/weikav-lucky80/weikav-lucky80-cover.jpg",
    product_link: '',
    list_feature: [
      "ANSI TKL layout, FR4 Plate",
      "Tri-Mode Connectivity, Extended 8000mAh Power",
      "QMK/VIA Programmable Core",
      "Hotswappable with 3-pin & 5-pin Mechanical Switches",
      "Ball-Catch Quick-Release System, 6063 Aluminum Unibody",
      "Hotswappable PCB, Dynamic 16M Color RGB"
    ],
    segment: [
      {
        title: 'A New Chapter, Familiar Excellence',
        description: 'Thank you for making the Lucky65 a beloved favorite. Now, the Lucky80 TKL brings the same iconic design—ball-catch structure, ice-crystal weight, and magnetic 2.4G receiver storage—into a more expansive tenkeyless layout. Perfect for those who want extra space without sacrificing the refined touch you already love.',
        image: '/weikav-lucky80/seg-1-l80.jpg'
      },
      {
        title: 'Seamless Versatility, Refined',
        description: 'Beyond its core innovations, the Lucky80 is designed to adapt effortlessly—whether you are switching between devices, platforms, or lighting moods. Every added feature serves a purpose: to stay out of your way until you need it, then deliver without compromise.',
        image: '/weikav-lucky80/seg-2-l80.jpg'
      },
      {
        title: 'Engineered for Refined Performance',
        description: 'The Lucky80’s structural innovations go beyond aesthetics—every layer has been meticulously tuned to deliver a harmonious balance of flex, stability, and acoustic character. From its internal damping system to tool-free maintenance, this is gasket mounting evolved.',
        image: '/weikav-lucky80/seg-3-l80.jpg'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={''}/>
  );
}