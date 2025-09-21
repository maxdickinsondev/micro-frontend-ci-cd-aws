export interface CartProps {
  price: string;
  title: string;
  image: string;
  onClickCart?: () => void;
  onClickWishlist?: () => void;
}
