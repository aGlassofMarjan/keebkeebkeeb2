'use client'

import ProductPage from '@/components/product-page';

export default function ProductCard() {
  const data = {
    title: "Cidoo ABM098",
    product_link: 'https://www.tokopedia.com/jigoh-store/cidoo-abm098-three-connection-rgb-mechanical-keyboard-1731227351221831197?extParam=src%3Dshop%26whid%3D18606105&aff_unique_id=&channel=others&chain_key=',
    description: "1800 Compact VIA Gasket Mount Hot Swappable Mechanical Gaming Keyboard",
    image_url: "/cidoo-abm098/cidoo-abm098.jpg",
    list_feature: [
      "ANSI layout, 1800-compact Keyboard",
      "VIA Programmable",
      "Three Connectivities: Bluetooth 5.0/2.4Ghz/Type-C",
      "Hotswappable with 3-pin & 5-pin Mechanical Switches",
      "Rotary Knob for Media Control & NKRO Supportable",
      "South-facing LEDs & Light Diffusers in Green and Black variants"
    ],
    segment: [
      {
        title: 'VIA Programmable',
        description: 'With the popular V65 keyboard, CIDOO is launching an upgraded keyboard that supports VIA programmable – and can be connected by type-C wired, 2.4G wireless and 5.0 Bluetooth! For those who are used to using other keys that are not in the keyboard, the VIA software is here to help! Creating macros and remapping keys are easily fulfilled with VIA. Equipped with on-board memories, the key changes can be saved in different layers and the keyboard can be easily switched to different layers. It is ideal for those who demand accuracy, speed, reliability and endurance for long time gaming sessions.',
        image: '/cidoo-abm098/segment-1-abm098.jpg'
      },
      {
        title: '1800 Compact Mechanical Keyboard',
        description: 'Missing a numpad for office working? CIDOO ABM098 saves you the fuss to buy another numpad! Coming in 1800 compact, the keyboard comes with a numpad that can be necessary for many people, as well as the main alpha area and some additional cursor keys. Still, the keyboard is saving space for the mouse area compared with a full-size keyboard.',
        image: '/cidoo-abm098/segment-2-abm098.jpg'
      },
      {
        title: 'Wired or Bluetooth Wireless Connectivity',
        description: 'With built-in 4000mAh battery, the keyboard supports connection via Bluetooth wireless connectivity, as well as with the included Type-C USB cable. The keyboard can be connected up to 3 device and each device can be easily. With Bluetooth connection, it easily connects seamlessly to your devices without messy cables.',
        image: '/cidoo-abm098/segment-3-abm098.jpg'
      },
      {
        title: 'Gasket-Mounted, Poron PCB Foam & IXPE Switch Sheet',
        description: 'Gasket mounting is a type of keyboard mounting, where no screw are used into the switch plate. With the high-quality Poron PCB foam and IXPE Switch that aim to dampen noises, the keyboard creates a cleaner sound profile because the gaskets cushion the shock of each keypress.',
        image: '/cidoo-abm098/segment-4-abm098.jpg'
      }
    ]
  }

  return (
    <ProductPage imageUrl={data.image_url} title={data.title} description={data.description} list_feature={data.list_feature} segment={data.segment} product_link={data.product_link}/>
  );
}