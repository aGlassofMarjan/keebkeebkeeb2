"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "WOB Rainy75",
    description:
      "75% pre-built, pre-lubed switches and high-quality keycaps",
    image_url:
      "https://www.wobkey.com/cdn/shop/files/3500_LR75BK.jpg?v=1714454897",
    product_link:
      "https://www.tokopedia.com/jigoh-store/wob-rainy75-mechanical-keyboard-aluminum-alloy-wireless-bluetooth-customized-computer-game-e-sports-1731301334901818909?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
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
    <ProductPage
      imageUrl={data.image_url}
      title={data.title}
      description={data.description}
      list_feature={data.list_feature}
      segment={data.segment}
      product_link={data.product_link}
    />
  )
}
