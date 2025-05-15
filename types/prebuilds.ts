interface Tag {
  name: string;
  primary_color: string;
  border_color: string;
  text_color: string;
}

export interface Keyboard {
  name: string;
  manufacturer: string;
  type: string;
  product_link: string;
  detail_link: string;
  price: string;
  tags: Tag[];
}