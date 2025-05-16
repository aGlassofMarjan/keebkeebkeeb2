'use client';

import ProductPage from '@/components/product-page';
import { EpomakerP87 as data } from '@/data/detail-keyboards';

export default function ProductCard() {
  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={data.product_link}/>
  );
}
