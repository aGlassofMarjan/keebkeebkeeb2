'use client';

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "WOB Rainy75 RT",
    description:
      "Heavy aluminum design offering rich sound, and smooth, tactile typing experience",
    image_url:
      "https://www.nouvolo.com/cdn/shop/files/rainy75rt-grey-textured-mirror2.jpg?v=1737556274&width=1445",
    product_link:
      "https://www.tokopedia.com/jigoh-store/wob-rainy75rt-gaming-magnetic-shaft-keyboard-mechanical-cnc-aluminum-alloy-game-dedicated-rain-75rt-fearless-contract-1731301220135634461?extParam=whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "75% Layout (81 keys), pre-built",
      "Surround Gasket Mount Structure",
      "CNC Anodized 6063 Aluminum Body",
      "RGB, 1.6mm, 4 layered PCB for the best EMI reduction",
      "FR4/Carbon Fiber plate",
      "Sound Dampening: (3.5mm) PORON plate & bottom foam",
    ],
    segment: [],
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={data.product_link}/>
  );
}
