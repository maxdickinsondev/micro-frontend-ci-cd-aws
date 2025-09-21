// @ts-ignore
import { Cart, Button } from "@ecommerce/util-ui";
// @ts-ignore
import { useWishlistStore, useCartStore } from "@ecommerce/util-state";
import { useCallback } from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToCart = useCartStore((state) => state.addToCart);

  const navigateToHome = useCallback(() => navigateToUrl("/"), []);

  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40">
      {wishlist.length > 0 ? (
        <div className="py-20">
          <span>Wishlist({wishlist.length})</span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {wishlist.map((product, index) => (
              <div key={index}>
                <Cart
                  price={product.price}
                  title={product.title}
                  image={product.image}
                  onClickCart={() => addToCart(product)}
                  onClickWishlist={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-40 flex flex-col items-center text-center space-y-10">
          <h1 className="text-5xl text-black">Your wishlist is empty!</h1>
          <span>Please, back to home and add some products.</span>
          <Button onClick={navigateToHome}>Go to Home Page</Button>
        </div>
      )}
    </div>
  );
}
