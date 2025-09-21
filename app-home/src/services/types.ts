export interface ProductDTO {
  id: number;
  price: string;
  title: string;
  image: string;
}

export type ProductsResponse = Array<ProductDTO>;
