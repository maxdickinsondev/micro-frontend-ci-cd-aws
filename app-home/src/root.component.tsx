// @ts-ignore
import { Cart, Tag } from "@ecommerce/util-ui";

import {
  useCartStore,
  useWishlistStore,
  // @ts-ignore
} from "@ecommerce/util-state";
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "./services/products";
import { ProductsResponse } from "./services/types";

export default function Root(props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const [products, setProducts] = useState<ProductsResponse>([]);

  const fetchProdutcts = useCallback(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchProdutcts();
  }, [fetchProdutcts]);

  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40 pt-20">
      <div>
        <Tag label="This month" />
      </div>
      <h1 className="mt-5 mb-12 font-bold text-3xl">Best Selling Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item.id}>
            <Cart
              price={item.price}
              title={item.title}
              image={item.image}
              onClickCart={() => addToCart(item)}
              onClickWishlist={() => addToWishlist(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
