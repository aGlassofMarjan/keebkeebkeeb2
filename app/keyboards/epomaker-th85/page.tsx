"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "Epomaker TH 85",
    description:
      "75% Gasket Hot-swappable Wireless Mechanical VIA Gaming Keyboard",
    image_url:
      "https://epomaker.com/cdn/shop/files/IMG_8891.png?v=1746609196&width=990",
    product_link:
      "https://www.tokopedia.com/jigoh-store/epomaker-th-85-mechanical-keyboard-gaming-1731365594913211933?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "Triple Modes Connectivity",
      "NKRO & South-facing RGB Backlight",
      "Top-Mount & Full - Key Hotswappable",
      "VIA Programmable",
      "4 Layers of Sound Dampening Material",
    ],
    segment: [
      {
        title: "Reliable Low-Latency Gaming Keyboard",
        description:
          "Elevate your gaming experience with our TH85 Gaming Keyboard, with low-latency technology and anti-ghosting features.",
        image:
          "https://epomaker.com/cdn/shop/files/IMG_8613_c9682039-9b94-4dda-9712-3fa78adff808.jpg?v=1746609196&width=1946",
      },
      {
        title: "QMK/VIA Compatible Keyboard:",
        description:
          "Houses 84 pre-lubed responsive keys and a unique logo plate separating hotkeys and arrow keys, the EPOMAKER TH85 QMK Keyboard is packed with full compatibility that adapts to your needs.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/6-1_QMK.jpg?v=1742803690  ",
      },
      {
        title: "Tri-Mode Wireless Connectivity",
        description:
          "Experience ultimate flexibility with our Tri-Mode wireless TH85 Keyboard in a 80% compact layout.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/6-2_OS.jpg?v=1742804126",
      },
      {
        title: "Satisfying Sound, Premium Feel",
        description:
          "Enjoy a rich acoustic experience with our TH85 Gasket-Mount Keyboard, which enhances both sound and feel significantly from traditional tray-mount ones.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/6-4.jpg?v=1742803691",
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
