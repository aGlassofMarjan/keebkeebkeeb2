"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "Epomaker Tide Alice",
    description:
      "Ergonomic Alice layout, hot-swappable switches ensuring comfort and customization.",
    image_url:
      "https://epomaker.com/cdn/shop/files/EPOMAKER_Tide_Alice_1.jpg?v=1746604907&width=990",
    product_link:
      "https://www.tokopedia.com/jigoh-store/epomaker-tide-alice-mechanical-keyboard-gaming-1731356640049989149?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "65% Alice Layout with Knob for Natural Typing",
      "Tri-Mode (2.4G/Bluetooth/Wired) & 4000mAh Battery",
      "Gasket Mount & South-Facing RGB",
      "VIA Programmable & Hot-Swappable PCB",
      "5-Layer Sound Dampening for Thocky Acoustics",
    ],
    segment: [
      {
        title: "Ergonomic Alice Keyboard",
        description:
          "Introducing the Epomaker Tide Alice, featuring a 65% Alice layout with 66 keys and a convenient knob for easy adjustments. This ergonomic design promotes comfortable hand positioning during extended use, reducing strain while enhancing productivity.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_33.jpg?v=1743472531",
      },
      {
        title: "CNC Anodized 6063 Aluminum Case",
        description:
          "Constructed from CNC anodized 6063 aluminum, this keyboard boasts exceptional build quality. The sturdy materials ensure a solid feel while maintaining a sleek appearance, making it a great addition to any desk.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/13_8d2614b9-6607-44df-9159-a567f7d4d496.jpg?v=1744883745",
      },
      {
        title: "Gasket Structure & FR4 Plate",
        description:
          "The gasket structure combined with an FR4 plate provides a softer typing experience, minimizing vibrations and producing a satisfying sound. This innovative design also enhances the overall sound profile, making your typing feel and sound just right.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_12.jpg?v=1743472531",
      },
      {
        title: "Full-key Hotswappable PCB",
        description:
          "Equipped with a full key hotswappable PCB, the Tide Alice allows you to replace switches without soldering, enabling personalized customization. Easily switch between different switch types to find your perfect typing experience.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_8.jpg?v=1743472532",
      },
      {
        title: "Triple Modes with 4000mAh Battery",
        description:
          "With a powerful 4000mAh battery and triple modes of connectivity, the Tide Alice allows for extended use without frequent charging. Easily switch between wired and wireless modes to suit your setup, giving you flexibility and adaptability.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_49.jpg?v=1743472531",
      },
      {
        title: "Five-layers of Sound Dampening material",
        description:
          'The Tide Alice utilizes a five-layer sound dampening system consisting of Poron sandwich foam, IXPE switch pad, PET sound-improving film, Poron case foam, and PET insulation pad. This thoughtful arrangement effectively dampens unwanted hollow sounds and lessens case ping, producing a fuller, "thocky" sound signature that enriches your overall typing experience.',
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_47.jpg?v=1743472531",
      },
      {
        title: "VIA Programmable",
        description:
          "Utilize VIA support for complete key customization, allowing you to set macros and shortcuts tailored to your workflow. Customize every key to streamline your typing experience and enhance productivity.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/EPOMAKER_Tide_Alice_17.jpg?v=1744883612",
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
