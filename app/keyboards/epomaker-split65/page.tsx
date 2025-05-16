"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "Epomaker Split 65",
    description:
      "The Epomaker Split65's ergonomic, split design offers unmatched comfort, reducing wrist strain during long typing or gaming sessions.",
    image_url:
      "https://epomaker.com/cdn/shop/files/IMG_4410.png?v=1746609558&width=1946",
    product_link:
      "https://www.tokopedia.com/jigoh-store/epomaker-split-65-mechanical-keyboard-gaming-1731366049614693917?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "Triple Modes Connectivity",
      "NKRO & South-facing RGB Backlight",
      "Top-Mount & Full - Key Hotswappable",
      "VIA Programmable",
      "4 Layers of Sound Dampening Material",
    ],
    segment: [
      {
        title: "Ergonomic and Split Design",
        description:
          "The Epomaker Split65 features an ergonomic, split design that enables users to adjust the keyboard's halves to their preferred typing angles.",
        image:
          "https://epomaker.com/cdn/shop/files/split65_pic.jpg?v=1746609558&width=1946",
      },
      {
        title: "Triple Modes Connectivity",
        description:
          "Offering versatile connectivity options, the Epomaker Split65 is equipped with Type-C wired, Bluetooth 5.0, and 2.4GHz wireless modes.",
        image:
          "https://epomaker.com/cdn/shop/files/IMG_4393.png?v=1746609558&width=1946",
      },
      {
        title: "4 Layer Sound Dampening Material",
        description:
          "To ensure a quieter typing experience, the Split65 incorporates a four-layer sound dampening system.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/2-1-2.jpg?v=1744093959",
      },
      {
        title: "QMK/VIA Support",
        description:
          "The Split65 supports QMK/VIA, powerful tool for keyboard customization.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/4-1_RGB.jpg?v=1744093959",
      },
    ],
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
