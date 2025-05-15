'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Epomaker P87",
    description: "Heavy aluminum design offering rich sound, and smooth, tactile typing experience",
    image_url: "/epomaker-p87/epo87-head.png",
    product_link: 'https://www.tokopedia.com/jigoh-store/epomaker-p87-mechanical-keyboard-gaming-1731365974838511133?extParam=whid%3D18606105&aff_unique_id=&channel=others&chain_key=',
    list_feature: [
      "87% TKL ANSI US Layout with CNC Metal Knob",
      "QMK/VIA Support for Easy Customization",
      "5 Layers of Sound-Dampening Materials",
      "Per-key south-facing RGB LEDs",
      "Aluminum Wireless Gasket Keyboard",
      "4000mAh Battery for Tri-Mode Connectivity"
    ],
    segment: [
      {
        title: 'TKL Gaming Keyboard with Knob',
        description: 'Introducing the latest addition to the Aluminum Wireless keyboard family from EPOMAKER, the powerful P87 Gaming keyboard with 87 keys and 1 metal knob, all programmable with VIA software.',
        image: '/epomaker-p87/epo-p87-variant.jpg'
      },
      {
        title: 'Types Thocky & Comfy',
        description: 'Hefty and solid in weight for durability and stability, the P87 keyboard is crafted with CNC-cut aluminum that weighs over 1.8kg. The anodized surface is nice to the touch with rounded edges for comfort and against daily wear.',
        image: '/epomaker-p87/seg-2-epo-p87.jpg'
      },
      {
        title: 'Wire-free Convenience',
        description: 'For users of all devices and OS systems, the EPOMAKER P87 is compatible in cable, wireless 2.4Ghz or Bluetooth 5.0 with Mac, Linux and Mainstream Gaming controllers.',
        image: '/epomaker-p87/tri-mode-p87.jpg'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={''}/>
  );
}