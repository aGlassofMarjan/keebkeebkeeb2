"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "Epomaker Tide 49",
    description:
      "Gasket-mounted FR4 plate and five-layer sound dampening for a deep, thocky typing experience, with hot-swappable switches enabling customizable tactile feedback in a compact 40% design.",
    image_url:
      "https://epomaker.com/cdn/shop/files/EPOMAKERTide49_12.jpg?v=1746604982&width=1946",
    product_link:
      "https://www.tokopedia.com/jigoh-store/epomaker-tide-49-mechanical-keyboard-gaming-40-customized-1731356807182517789?extParam=whid%3D18606105%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "40% Ultra-Compact Gasket Design & CNC Aluminum",
      "Tri-Mode (2.4G/Bluetooth/Wired) & 3000mAh Battery",
      "South-Facing RGB & Minimalist Aesthetic",
      "VIA Programmable & Hot-Swappable PCB",
      "5-Layer Sound Dampening& N-Key Rollover",
    ],
    segment: [
      {
        title: "Utra-compact 40% Layout",
        description:
          "The Epomaker Tide49 features an ultra-compact 40% layout with 49 keys, making it an excellent choice for those seeking to maximize desk space while retaining essential functionality.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/1_3d5e3b4a-c5a9-48ef-8f23-562d5446ec43.jpg?v=1743475213",
      },
      {
        title: "Full Key Hotswappable PCB",
        description:
          "Equipped with a full key Hotswappable PCB, the Tide49 allows you to easily change switches without soldering. Personalize your tactile experience by swapping out switches to find the perfect feel for your typing style.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/2_3096d8be-d201-42be-8265-bb0a8fa2fd78.jpg?v=1743475213",
      },
      {
        title: "Triple-mode Connectivity with 3000mAh Battery",
        description:
          "With triple modes of connectivity and a 3000mAh battery, the Tide49 ensures reliable connectivity, whether you prefer wired or wireless options. Switch effortlessly between devices to suit your daily routines.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/3_f6f25a86-7611-450d-9fe4-6403f0a27a98.jpg?v=1743475212",
      },
      {
        title: "CNC Anodized 6063 Aluminum Case",
        description:
          "The keyboard features a CNC anodized 6063 aluminum case, providing both durability and a contemporary style. This quality construction ensures that the keyboard can withstand everyday use while complementing your workspace aesthetics.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_49_8.jpg?v=1743475213",
      },
      {
        title: "Gasket Structure with FR4 Plate",
        description:
          "Thanks to the gasket structure with an FR4 plate, the Tide49 offers a more comfortable typing experience while minimizing noise levels. The five-layer sound-dampening material further enhances this quality, making it suitable for quiet environments.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_49_17.jpg?v=1743475213",
      },
      {
        title: "VIA Support",
        description:
          "Like the other Tide Series models, the Tide49 supports VIA programmability, allowing users to fully customize keyboard settings to meet their specific needs. Create macros and key remaps to enhance efficiency and streamline your workflow.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_49_22.jpg?v=1743475212",
      },
      {
        title: "Advanced Sound Dampening",
        description:
          "The Tide49 incorporates a five-layer sound dampening system consisting of Poron sandwich foam, IXPE switch pad, PET sound-improving film, Poron case foam, and PET insulation pad. This combination effectively reduces unwanted hollow sounds and mitigates case ping, resulting in a deeper, 'thocky' sound signature for an enhanced auditory experience.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_49_7.jpg?v=1743475474",
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
