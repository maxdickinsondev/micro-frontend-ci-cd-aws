import { products } from "../data/products";
import { ProductsResponse } from "./types";

function getProducts(): Promise<ProductsResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 100);
  });
}

export { getProducts };
