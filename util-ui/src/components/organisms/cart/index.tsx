import { CartProps } from "./types";

function Cart({
  price,
  title,
  image,
  onClickCart,
  onClickWishlist,
}: CartProps) {
  return (
    <div className="w-full flex flex-col mb-10">
      <div className="group w-full mb-4 flex items-center rounded-md h-80 justify-center cursor-pointer bg-[#F5F5F5] relative">
        <img className="w-full max-w-30 max-h-40" src={image} />
        <button
          onClick={onClickCart}
          className="group-hover:flex absolute bottom-0 h-12 hidden w-full bg-black rounded-b-md text-white items-center justify-center"
        >
          Add to Cart
        </button>
      </div>
      <span className="mb-2 font-medium">{title}</span>
      <div className="w-full flex flex-row justify-between">
        <p className="text-[#DB4444] font-medium">{price}</p>
        <span
          className="material-symbols-outlined cursor-pointer hover:text-[#DB4444]"
          onClick={onClickWishlist}
        >
          favorite
        </span>
      </div>
    </div>
  );
}

export { Cart };
