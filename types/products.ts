export interface Data {
  imageUrl: string
  title: string
  product_link: string
  description: string
  list_feature: string[]
  segment: Segment[]
}

interface Segment {
  title: string
  description: string
  image?: string 
}