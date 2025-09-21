// @ts-ignore
import { Header, publicApiFunction } from "@ecommerce/util-ui";

// @ts-ignore
import {
  useBearStore,
  useWishlistStore,
  useCartStore,
  // @ts-ignore
} from "@ecommerce/util-state";

export default function Root(props) {
  publicApiFunction();

  const cart = useCartStore((state) => state.products);
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <Header
      wishlistAmount={wishlist.length || 0}
      cartAmount={cart.length || 0}
    />
  );
}
