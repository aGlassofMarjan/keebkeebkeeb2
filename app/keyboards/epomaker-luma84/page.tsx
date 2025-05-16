'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Epomaker Luma 84",
    description: "Compact design, programmability, versatile connectivity for an enhanced typing experience",
    image_url: "/epomaker-luma84/luma-84-head.png",
    product_link: 'https://www.tokopedia.com/jigoh-store/epomaker-luma-84-mechanical-keyboard-gaming-1731364996560356893?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=',
    list_feature: [
      "84 Keys Low-Profile Aluminum Keyboard with PBT Keycaps",
      "Full-Key Hot Swappable Sockets",
      "Tri-mode connectivity: Bluetooth 5.0, 2.4GHz, & USB-C",
      "Gasket-Mount & South-facing RGB",
      "VIA Programmable"
    ],
    segment: [
      {
        title: 'Effortless Customization',
        description: 'Tired of the limitations of your current membrane keyboard? Try the Luma84 Keyboard with Hot-Swap and VIA support, to revolutionize your workflow with unparalleled flexibility.',
        image: '/epomaker-luma84/luma-84-head.jpg'
      },
      {
        title: 'Low-Profile, High Performance',
        description: 'Level up your gaming setup with our Luma84 Low-Profile Mechanical Keyboard. Crafted from durable aluminum and greasy-free PBT keycaps, the Luma84 boasts unmatched sturdiness and minimalist elegance as a stylish centerpiece for any gaming setup.',
        image: '/epomaker-luma84/luma-84-seg-2.png  '
      },
      {
        title: 'Limitless Versatility',
        description: 'Transform your desk setup to the modern minimalist style with the Luma84 Wireless Keyboard, as tangled wires become past worries.',
        image: '/epomaker-luma84/luma-86-seg-1.png'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={data.product_link}/>
  );
}
