import { navigateToUrl } from "single-spa";
import { Link, Separator } from "../../atoms";
import { HeaderProps } from "./types";
import { useState } from "react";
import { Menu } from "../menu";
import { Badge } from "../../atoms/badge";

function Header({ wishlistAmount, cartAmount }: HeaderProps) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <>
      <div className="px-4 md:px-8 lg:px-10 xl:px-40 flex items-center justify-between py-4">
        <h1
          className="font-bold text-2xl cursor-pointer"
          onClick={() => navigateToUrl("/")}
        >
          Ecommerce
        </h1>
        <ul className="space-x-12 flex flex-row hidden lg:flex">
          <Link title="Home" path="/" />
          <Link title="Contact" path="/contact" />
          <Link title="About" path="/about" />
        </ul>
        <div className="space-x-4 flex items-center">
          <div
            className="flex items-center relative cursor-pointer"
            onClick={() => navigateToUrl("/wishlist")}
          >
            <span className="material-symbols-outlined" translate="no">
              favorite
            </span>
            {wishlistAmount > 0 && <Badge amount={wishlistAmount} />}
          </div>
          <div
            className="flex items-center relative cursor-pointer"
            onClick={() => navigateToUrl("/cart")}
          >
            <span className="material-symbols-outlined" translate="no">
              shopping_cart
            </span>
            {cartAmount > 0 && <Badge amount={cartAmount} />}
          </div>
          <div
            className="flex items-center cursor-pointer hidden lg:flex"
            onClick={() => navigateToUrl("/profile")}
          >
            <span className="material-symbols-outlined" translate="no">
              person
            </span>
          </div>
          <div
            className="flex items-center cursor-pointer lg:hidden"
            onClick={() => setIsCollapse((prev) => !prev)}
          >
            <span className="material-symbols-outlined" translate="no">
              {isCollapse ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>
      <Separator />
      {isCollapse && (
        <div className="mt-8">
          <Menu onClick={() => setIsCollapse(false)} />
        </div>
      )}
    </>
  );
}

export { Header };
