'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Epomaker TH40",
    description: "Compact design, programmability, versatile connectivity for an enhanced typing experience",
    image_url: "/epomaker-th40/th40-head.png",
    product_link: 'https://www.tokopedia.com/jigoh-store/epomaker-th-40-mechanical-keyboard-gaming-1731365832973977117?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=',
    list_feature: [
      "Ultra-Compact 40% Minimalistic Layout",
      "VIA Programmability and Multi-Layer Functionality",
      "Advanced Gasket Design",
      "Versatile Tri-Mode Connectivity",
      "South-facing RGB & Customizable Lighting Effects"
    ],
    segment: [
      {
        title: 'Ultra-Compact 40% Layout',
        description: 'The EPOMAKER TH40 is a marvel in compact keyboard design, featuring a 40% layout that eliminates the number pad, arrow keys, and the traditional top row of number keys. This may sound minimalistic, but many users find this layout enhances typing efficiency. The TH40 includes a split space bar with an FN key conveniently placed between the 2.25u and 2.75u spacebars, designed to minimize finger travel and increase typing speed. Lightweight and portable, this keyboard is ideal for those on the move.',
        image: '/epomaker-th40/seg-3-epo-th40.jpg'
      },
      {
        title: 'QMK/VIA (V2 Version) Programmability and Multi-Layer Functionality',
        description: 'Customization is key with the TH40, which is programmable via QMK/VIA software. It features four switchable layers—three of which are programmable—allowing users to tailor their keyboard without needing to open the software each time. This flexibility is particularly beneficial for programmers and typists who require specific setups for their tasks.',
        image: '/epomaker-th40/seg-4-epo-th40.jpg'
      },
      {
        title: 'Advanced Gasket Design',
        description: 'The TH40 uses a gasket mount design for reducing keystroke noise and minimizing the hollow sound. It incorporates Poron plate foam, an IXPE black switch pad, and bottom Poron foam, all contributing to a more satisfying acoustic typing experience.',
        image: '/epomaker-th40/seg-1-epo-th40.jpg'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={''}/>
  );
}