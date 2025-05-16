"use client"

import { LUMINKEY75v2 as data } from "@/data/detail-keyboards"

import ProductPage from "@/components/product-page"

export default function ProductCard() {
  return (
    <ProductPage
      image_url={data.image_url}
      title={data.title}
      description={data.description}
      list_feature={data.list_feature}
      segment={data.segment}
      product_link={""}
    />
  )
}
