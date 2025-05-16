"use client";

import ProductPage from "@/components/product-page";





export default function ProductCard() {
  const data = {
    title: "Epomaker Tide Alice",
    description:
      "The Alice66 keyboard offers soothing acoustics, sound dampening, and a Gasket-mount design for a comfortable, pleasant typing experience.",
    image_url:
      "https://epomaker.com/cdn/shop/files/IMG_4110.png?v=1746609639&width=1946",
    product_link:
      "https://www.tokopedia.com/jigoh-store/epomaker-alice-66-mechanical-keyboard-gaming-1731356454254577181?extParam=whid%3D18606105%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    list_feature: [
      "65% Alice Layout with Knob for Natural Typing",
      "Tri-Mode (2.4G/Bluetooth/Wired) & 4000mAh Battery",
      "Gasket Mount & South-Facing RGB",
      "VIA Programmable & Hot-Swappable PCB",
      "5-Layer Sound Dampening for Thocky Acoustics",
    ],
    segment: [
      {
        title: "Ergo Alice Layout with 66 Keys",
        description:
          "Step into a new era of comfort with the Epomaker Alice 66, which boasts an ergonomic Alice layout with 66 keys. This carefully designed layout supports natural hand movement and positioning, significantly reducing strain during long typing sessions.",
        image:
          "https://epomaker.com/cdn/shop/files/IMG_4310.jpg?v=1746609639&width=1946",
      },
      {
        title: "Triple Modes Connectivity",
        description:
          "The Epomaker Alice 66 adapts effortlessly to your workflow with its triple connectivity options. Whether you need the steadfast reliability of a Type-C wired connection, the freedom of Bluetooth 5.0, or the quick setup of 2.4GHz wireless, this keyboard ensures you're always connected to your devices without fuss.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/2_9fef12ef-64c7-44be-a501-ea82fb2489ef.jpg?v=1744178155",
      },
      {
        title: "5 Layer Sound Dampening Material",
        description:
          "It features a silicone bottom pad, an IXPE switch pad, and two layers of Poron foam sandwiched between the plate and PCB to absorb shock and mellow the sound profile. Additionally, the PET Sound-Enhancement pad accentuates the switch's deep 'thock,' creating a tranquil and pleasant typing.",
        image:
          "https://epomaker.com/cdn/shop/files/IMG_4111.png?v=1746609639&width=1946",
      },
      {
        title: "Gasket Structure & Hotswappable Sockets",
        description:
          "Engineered for both comfort and convenience, the Epomaker Alice 66 features a gasket-mounted design that enhances the overall typing feel by adding a slight flex to the keyboard structure.",
        image: "https://kbd.news/pic/2024/182/2552.jpg",
      },
      {
        title: "QMK/VIA Support for Easy Customization",
        description:
          "Unlock the full potential of your keyboard with robust QMK support on the Epomaker Alice 66. This powerful feature set allows for deep customization of key mappings, intricate macros, and dynamic lighting options.",
        image:
          "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/5_daf14d04-0723-46d9-a2d6-e59767552b5c.jpg?v=1744178158",
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
