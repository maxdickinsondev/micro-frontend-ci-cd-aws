import skirt from "../assets/skirt.svg";
import handbag from "../assets/handbag.svg";
import gamepad from "../assets/gamepad.svg";
import watercooler from "../assets/watercooler.svg";
import bookself from "../assets/bookself.svg";
import food from "../assets/food.svg";
import camera from "../assets/camera.svg";
import notebook from "../assets/notebook.svg";
import { ProductsResponse } from "../services/types";

export const products: ProductsResponse = [
  {
    id: 1,
    price: "$260",
    title: "The North Coat",
    image: skirt,
  },
  {
    id: 2,
    price: "$960",
    title: "Gucci duffle bag",
    image: handbag,
  },
  {
    id: 3,
    price: "$160",
    title: "RGB liquid CPU Cooler",
    image: watercooler,
  },
  {
    id: 4,
    price: "$360",
    title: "Small BookSelf",
    image: bookself,
  },
  {
    id: 5,
    price: "$100",
    title: "Breed Dry Dog Food",
    image: food,
  },
  {
    id: 6,
    price: "$360",
    title: "CANON EOS DSLR Camera",
    image: camera,
  },
  {
    id: 7,
    price: "$700",
    title: "ASUS FHD Gaming Laptop",
    image: notebook,
  },
  {
    id: 8,
    price: "$660",
    title: "GP11 Shooter USB Gamepad",
    image: gamepad,
  },
];
