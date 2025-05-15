"use client"

import ProductPage from "@/components/product-page"

export default function ProductCard() {
  const data = {
    title: "Venom 60 HE",
    description: "Build the Fastest Hall Effect Keyboard",
    image_url: "/venom60he/geon-venom-60-he.jpg",
    product_link: "",
    list_feature: [
      "0.16ms latency",
      "RISC-V32 architecture applied",
      "Supports 8KHz polling rate / 14KHz scan rate per key",
      "Hotswappable with 3-pin & 5-pin Mechanical Switches",
      "Custom PCB standard specifications",
      "Daughterboard and JST connector included",
    ],
    segment: [
      {
        title: "Fast",
        description:
          "The Geon Venom 60 HE is a premium compact keyboard that exemplifies high-end craftsmanship in the mechanical keyboard community. Featuring a sleek 60% layout that eliminates the numpad, function row, and navigation cluster, this keyboard combines an elegant aluminum case with advanced gasket-mount construction that delivers a responsive yet cushioned typing experience. The hot-swappable PCB allows for effortless switch customization without soldering, while the pre-lubed stabilizers and internal silicone dampening create a refined acoustic profile that keyboard enthusiasts covet.",
        image: "/venom60he/seg-1-ve80.jpg",
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
      product_link={""}
    />
  )
}
