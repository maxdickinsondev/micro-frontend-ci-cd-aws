import { Link, TextField } from "../../atoms";
import { MenuProps } from "./types";

function Menu({ onClick }: MenuProps) {
  return (
    <div className="bg-white px-4 flex flex-col items-start space-y-4 h-screen">
      <TextField placeholder="Pesquisar" />
      <Link
        path="/about"
        title="About"
        onClick={() => onClick && onClick("about")}
      />
      <Link
        path="/cart"
        title="Cart"
        onClick={() => onClick && onClick("cart")}
      />
      <Link
        path="/contact"
        title="Contact"
        onClick={() => onClick && onClick("contact")}
      />
      <Link path="/" title="Home" onClick={() => onClick && onClick("home")} />
      <Link
        path="/profile"
        title="Profile"
        onClick={() => onClick && onClick("profile")}
      />
      <Link
        path="/wishlist"
        title="Wishlist"
        onClick={() => onClick && onClick("wishlist")}
      />
    </div>
  );
}

export { Menu };
