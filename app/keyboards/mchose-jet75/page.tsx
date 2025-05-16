"use client";

import ProductPage from "@/components/product-page";

export default function ProductCard() {
  const data = {
    title: "MCHOSE Jet75",
    description: "Hall Effect Magnetic Switch Gaming Keyboard.",
    image_url:
      "https://www.mchose.store/cdn/shop/files/BlackTopographic_6090649c-71bf-4927-8155-d5a2cf840401.jpg?v=1739881275&width=1000",
    product_link:
      "https://www.tokopedia.com/jigoh-store/mchose-jet-75-rapid-trigger-hall-effect-magnetic-switch-keyboard-gaming-esport-edition-1731390932105201181?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "0.1ms Latency, 0.01mm RT Accuracy",
      "8kHz Polling Rate, 128K Scan Rate",
      "0 Dead Zone, SOCD, RS, DKS, MT, TGL, Key Macros",
      "Hot-Swappable, 0.1- 3.4mm Actuation Range",
      "North-facing RGB LED Lights",
    ],
    segment: [
      {
        title: "0.1ms Ultra-Low Latency for Peak Performance",
        description:
          "Designed for precision, this keyboard features an esports-grade chip with 0.1ms ultra-low latency, ensuring near-instant responses for a competitive edge in fast-paced games.",
        image:
          "https://www.mchose.store/cdn/shop/files/MCHOSE_Jet_75_0.1ms_Ultra-Low-1_6ab7cd1d-67e9-4902-98fd-48cf59eb3079.png?v=1740743649&width=1200",
      },
      {
        title: "Ultra-Low Latency for Gamers",
        description:
          "With an 8KHz polling rate and 128K scan rate, this keyboard ensures ultra-low latency and near-instant responses, providing a competitive edge in fast-paced games.",
        image:
          "https://www.mchose.store/cdn/shop/files/8K_Hz_polling_Rate.png?v=1740742968&width=1200",
      },
      {
        title: "True 0.01mm Precision for Unrivaled Accuracy",
        description:
          "With a remarkable 0.01mm precision, the JET75 ensures every keystroke is captured with flawless responsiveness. Each press is recognized with pinpoint accuracy, ensuring that rapid combos and quick actions are executed flawlessly. It empowers you to react faster and execute with absolute control, giving you a distinct advantage in competitive gameplay.",
        image:
          "https://www.mchose.store/cdn/shop/files/MCHOSE_Jet_75_Kailh_Magnetic_God_Switch.jpg?v=1740737057&width=1200",
      },
      {
        title: "Adaptive Calibration for Precision",
        description:
          "The JET75 features Adaptive Dynamic Calibration, which automatically fine-tunes the keyboard’s response in real-time. This smart system optimizes keystroke accuracy, ensuring consistent performance without the hassle of manual recalibration.",
        image:
          "https://www.mchose.store/cdn/shop/files/mchose_jet75_HE_keyboard-1.png?v=1740556944&width=1000",
      },
      {
        title: "Built for Precision",
        description:
          "The design features silicone sound-absorbing pads and a silicone bottom pad to reduce noise, offering a cleaner typing experience. With an aluminum alloy positioning plate, it ensures excellent key feedback and stability, perfect for gamers seeking precise responses.",
        image:
          "https://www.mchose.store/cdn/shop/files/MCHOSE_Jet_75_4.jpg?v=1740737170&width=1200",
      }
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
