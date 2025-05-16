"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "VGN MADLIONS MAD68 Pro HE",
    description: "Hall Effect Magnetic Switch Gaming Keyboard.",
    image_url: "https://diykeycap.com/cdn/shop/files/MAD68-HE.jpg?v=1732450045",
    product_link:
      "https://www.tokopedia.com/jigoh-store/madlions-68-pro-keyboard-gaming-rapid-trigger-full-alumunium-1731179147851302550?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "0.1ms Latency, 0.01mm RT Accuracy",
      "8kHz Polling Rate, 128K Scan Rate",
      "0 Dead Zone, SOCD, RS, DKS, MT, TGL, Key Macros",
      "Hot-Swappable, 0.1- 3.4mm Actuation Range",
      "North-facing RGB LED Lights",
    ],
    segment: [
      {
        title: "High-quality e-sports gaming keyboard",
        description:
          "MAD 68 is equipped with a high-performance chip with polling rate up to 8,000Hz, scan rate of 32,000Hz, and ultra-low latency of 0.125ms—designed for competitive needs.",
        image:
          "https://www.dekada.com/en/images/madlions_mad_68_he_rgb_bk_04_9VY3ea.jpg",
      },
      {
        title: "Designed for FPS games",
        description:
          "Magnetic switches on the MADE60 provide instant and accurate response, making counter-strafing easier in games like Valorant and CS2 for more precise aiming and movement.",
      },
      {
        title: "Rapid Trigger",
        description:
          "Every input feels fast and responsive—ideal for quick actions or complex key combinations.",
      },
      {
        title: "Flexible Key Configuration",
        description:
          "MAD60 HE supports key function configuration, macros, and lighting effects through web-based software.",
      },
      {
        title: "Compact 60% Size",
        description:
          "Without a Numpad, its space-saving design is easy to carry—suitable for gaming, work, and mobile activities.",
      },
      {
        title: "attractive rgb lighting",
        description:
          "16 million color RGB lighting effects are maximized with side keycaps, and can  be adjusted to your preference for a more stylish appearance.",
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
